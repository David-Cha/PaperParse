'use strict';

const { Client } = require('@elastic/elasticsearch');

const esclient = new Client({ node: 'http://localhost:9200' });
const index = 'sentences';

exports.search = async function (searchText) {
  const model = [];
  const { body } = await esclient.search({
    index: index,
    body: {
      query: {
        match: {
          'attachment.content': searchText // TODO: will need to be changed
        }
      }
    }
  });

  body.hits.hits.forEach((hit) => {
    model.push({
      article_title: hit._source.doc_name,
      page_number: hit._source.doc_page,
      sentence: hit._source.sentence,
      score: hit._score
    });
  });

  return model;
};
