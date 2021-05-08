const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://123:123@cluster0.acvvk.mongodb.net/tutcrud?retryWrites=true&w=majority',
  { useNewUrlParser: true, useCreateIndex: true }
);
