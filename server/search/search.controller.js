'use strict';

const SearchModel = require('./search.model');

exports.search = async function (req, res) {
  let model;

  try {
    model = await SearchModel.search(req.params.id);
  } catch (error) {
    console.log('Failed to do search: ' + error);
    return res.status(400).send('Failed to do search');
  }

  res.status(200).json(model);
};
