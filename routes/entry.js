
module.exports = function (app){
  // Model require.
  var Entry = require ('../models/entry');

  findAllEntries = function (req, res){
    Entry.find (function (err, conj){
      if (err)
        res.send (err);

      res.json (conj);
    });
  };

  findFirstEntry = function (req, res){
    Entry.findOne (function (err, conj){
      if (err)
        res.send (err);

      res.json (conj);
    });
  };

  // Routes definition. 
  app.get ('/entries', findAllEntries);
  app.get ('/oneEntry', findFirstEntry);
};
