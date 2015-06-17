// Include section.
var mongoose        = require ('mongoose'),
    Schema          = mongoose.Schema;

// Schema definition.
var entrySchema     = new Schema({
  title             : { type: String, default: '' },
  desc              : { type: String, default: '' },
  images            : { type: Array, default: '' },
  createdAt         : { type: Date, default: Date.now}
});

module.exports = mongoose.model ('Entry', entrySchema);