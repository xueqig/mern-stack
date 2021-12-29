const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://xueqi:guan@cluster0.yeumu.mongodb.net/sample_mflix?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);
