const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    trim: true,
    text: true,
  },
  brand: {
    type: String,
    required:true,
    text: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive'],
  },
  discount: {
    type: Number,
    default: 0,
  },
  finalPrice: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: true,
    text: true,
  },
  images: {
    type: [String], 
    required: true,
  },
  stock: {
    type: Number,
    default: 1,
    min: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  tags: {
    type: [String],
    index: true,
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  ratings: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  numReviews: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Middleware to calculate finalPrice before saving
productSchema.pre('save', function (next) {
  if (this.discount > 0) {
    this.finalPrice = this.price - ((this.price * this.discount) / 100);
  } else {
    this.finalPrice = this.price;
  }
  next();
});

// Create text index for search (MongoDB full-text search)
productSchema.index({ name: 'text', brand: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);
