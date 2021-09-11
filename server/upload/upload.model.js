'use strict';

const { Client } = require('@elastic/elasticsearch');
const { PDFDocument } = require('pdf-lib');

const esclient = new Client({ node: 'http://localhost:9200' });
const index = 'vue-upload-test';

const indexPdfPage = function (id, page, pageNumber) {
  esclient.index({
    index: index,
    id: id,
    body: {
      data: page,
      doc_name: "TODO NAME",
      doc_page: pageNumber
    },
    pipeline: 'attachment'
  });
};

exports.indexPdfPages = async function (buffer) { // TODO: file names
  const pdfDoc = await PDFDocument.load(buffer);
  const length = pdfDoc.getPages().length;

  for (let i=0; i < length; ++i) {
    const currentPageDoc = await PDFDocument.create();
    const [currentPage] = await currentPageDoc.copyPages(pdfDoc, [i]);
    currentPageDoc.addPage(currentPage);
    const currentPageDocBytes = await currentPageDoc.saveAsBase64();

    indexPdfPage(`GET-NAME-FROM-PARAMS-${i+1}`, currentPageDocBytes, i+1);
  }
};

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
