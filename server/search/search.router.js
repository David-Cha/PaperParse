'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');
const SearchController = require('./search.controller');

const router = express.Router();

router.get('/:id', asyncHandler(SearchController.search)); // TODO: move search query to body?

module.exports = router;
