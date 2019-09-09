const mongoose = require('mongoose');

const snapshotOptions = {
  __v: expect.any(Number),
  _id: expect.any(mongoose.Types.ObjectId),
};

const selectOptions = '-__v -_id';

module.exports = {
  selectOptions,
  snapshotOptions,
};
