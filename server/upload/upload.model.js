'use strict';

const { Client } = require('@elastic/elasticsearch');
const { PDFDocument } = require('pdf-lib');

const esclient = new Client({ node: 'http://localhost:9200' });
const index = 'pages';

// TODO edit the routes such that you also get doc name from front-end, which will be part of id and index

const indexPdfPage = function (articleTitle, id, page, pageNumber) {
  esclient.index({
    index: articleTitle,
    id: id,
    body: {
      data: page,
      doc_name: articleTitle,
      doc_page: pageNumber
    },
    pipeline: 'attachment'
  });
};

exports.indexPdfPages = async function (articleTitle, buffer) {
  const pdfDoc = await PDFDocument.load(buffer);
  const length = pdfDoc.getPages().length;

  for (let i=0; i < length; ++i) {
    const currentPageDoc = await PDFDocument.create();
    const [currentPage] = await currentPageDoc.copyPages(pdfDoc, [i]);
    currentPageDoc.addPage(currentPage);
    const currentPageDocBytes = await currentPageDoc.saveAsBase64();

    indexPdfPage(articleTitle, `${articleTitle}-${i+1}`, currentPageDocBytes, i+1);
  }

  indexSentences(articleTitle, length);
};

const indexSentences = function (articleTitle, totalPages) {
  for (let i=0; i < totalPages; ++i) {
    const { body } = await esclient.search({
      index: articleTitle,
      id: `${articleTitle}-${i+1}`
    });

    const text = body._source.attachment.content;
    const parsedSentences = parseSentencesInPage(text);

    for (const sentence in parsedSentences) {
      esclient.index({
        index: "sentences",
        body: {
          sentence: sentence,
          doc_name: articleTitle,
          doc_page: i+1
        }
      });
    }
  }
};

const parseSentencesInPage = function (text) {
    // parse text, break it into individual sentences
    // only get the sentences that contain statistics
        // statistic is something that contains "(%|\d.\d)
    // has a percent sign, or is any number of digits then . then any number of digits
    // store in array where each element contains a sentence, pageNumber, articleTitle

    // TODO: much more complex matching, right now it's only %
    var text=text.replace(/\n/g, ' ');

    let sentences = text.split(". ");
    for (let i=0; i < sentences.length; i++){
        if (sentences[i].search("%") == -1){
            delete sentences[i];
        }
    }
    return sentences;
}

exports.deletePdfPages = async function (fileName) {
  esclient.deleteByQuery({
    index: index,
    body: {
      query: {
        term: {
          doc_name: fileName
        }
      }
    }
  });
};
