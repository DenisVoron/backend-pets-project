const { Schema, model } = require('mongoose');


const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    photoPet: {
      type: String,
      default: 'https://us.123rf.com/450wm/naddya/naddya1701/naddya170100029/naddya170100029.jpg?ver=6',
    },
    comments: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);



const Pet = model('pet', petSchema);

module.exports = {
  Pet
};