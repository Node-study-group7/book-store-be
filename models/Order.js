const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema(
  {
    userID: { type: mongoose.ObjectId, ref: 'User' },
    contact: { type: Object, required: true },
    shipTo: { type: Object, required: true },
    totalPrice: { type: Number, default: 0, required: true },
    status: { type: String, default: 'preparing' },
    items: [
      {
        bookID: { type: mongoose.ObjectId, ref: 'Book' },
        qty: { type: Number, default: 1, required: true },
        price: { type: Number, required: true },
      },
    ],
    orderNum: { type: String },
  },
  { timestamps: true },
);

orderSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.__v;
  return obj;
};

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
