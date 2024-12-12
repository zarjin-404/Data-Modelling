import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    rquired: true,
  }
});

const orderSchame = new mongoose.Schema({

  productPrice: {
      required: true,
      type: Number
  }

  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

  orderItems: {
    type: [orderItemSchema],
  }

  address: {
    type: String,
    required: true
  }

  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  }

});

export const Order = mongoose.model('Order', orderSchame);
