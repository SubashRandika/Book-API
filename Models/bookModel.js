var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    title:{
        type: String
    },
    author:{
        type: String
    },
    genre:{
        type: String
    },
    read:{
        type: Boolean,
        default: false
    }
});

/*
 * Due to mongoose pluralizes collections. Mongoose is querying "Books" but data is in mongodb as "Book".
 * Can either rename collection name 'Book' into 'Books' or use line 24 code to explicitly tell mongoose
 * to query as name of 'Book'
 */
bookModel.set('collection', 'Book');

module.exports = mongoose.model('Book', bookModel);