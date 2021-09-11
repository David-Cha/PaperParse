'use strict';

const { Client } = require('@elastic/elasticsearch');

const esclient = new Client({ node: 'http://localhost:9200' });
const index = 'vue-upload-test';

exports.search = async function (searchText) {
  const model = [];
  const { body } = await esclient.search({
    index: index,
    body: {
      query: {
        match: {
          'attachment.content': searchText
        }
      }
    }
  });

  body.hits.hits.forEach((hit) => {
    model.push({
      doc_name: hit._source.doc_name,
      doc_page: hit._source.doc_page,
      score: hit._score
    });
  });

  return model;
};
