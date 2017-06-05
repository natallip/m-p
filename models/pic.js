'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  PicSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Укажите название проекта']
    },
    tech: {
      type: String
      //required: [true, 'Укажите используемые технологии']
    },
    picture: {
      type: String
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('pic', PicSchema);