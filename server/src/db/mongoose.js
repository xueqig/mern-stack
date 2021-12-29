const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://xueqi:guan@cluster0.yeumu.mongodb.net/mern_stack?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);
