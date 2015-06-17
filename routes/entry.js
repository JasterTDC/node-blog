
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

  addEntry = function (req, res){
    var entry = new Entry({
      title         : req.body.title,
      desc          : req.body.desc,
      images        : req.body.images,
      tags          : req.body.tags
    });

    entry.save (function (err){
      if (err)
        res.send (err);
    });
  };
  // Routes definition.
  app.get ('/entries', findAllEntries);
  app.get ('/oneEntry', findFirstEntry);
  app.post('/addEntry', addEntry);
};
