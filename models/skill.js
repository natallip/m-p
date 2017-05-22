'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SkillSchema = new Schema({
    html: {
      type: String
    },
    css: {
      type: String
    },
    js: {
      type: String
    },
    php: {
      type: String
    },
    mySQL: {
      type: String
    },
    node: {
      type: String
    },
    mongo: {
      type: String
    },
    git: {
      type: String
    },
    gulp: {
      type: String
    },
    bower: {
      type: String
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('skill', SkillSchema);