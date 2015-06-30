
module.exports = function (app){
  // Model require.
  var Entry = require ('../models/entry');

  findAllEntries = function (req, res){
    var query = Entry.find().sort("-createdAt");

    query.exec (function (err, conj){
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
    var tags = req.body.tags;

    var entry = new Entry({
      title         : req.body.title,
      desc          : req.body.desc,
      images        : req.body.images,
      tags          : tags.split(" ")
    });

    entry.save (function (err){
      if (err)
        res.send (err);
    });
  };

  deleteEntry = function (req, res){
    Entry.remove ({
      _id : req.params.entry
    }, function (err, conj){
      if (err)
        res.send (err);

      var query = Entry.find().sort("-createdAt");

      query.exec (function (err, conj){
        if (err)
          res.send (err);

        res.json (conj);
      });
    });
  };

  numEntries = function (req, res){
    var query = Entry.find().count();

    query.exec (function (err, conj){
      if (err)
        res.send (err);

      res.json ([{ "Num" : conj }]);
    });
  };

  updateEntry = function (req, res){
    console.log (req.body);
  };

  // Routes definition.
  app.get     ('/api/entries', findAllEntries);
  app.get     ('/api/oneEntry', findFirstEntry);
  app.get     ('/api/numEntries', numEntries);
  app.post    ('/api/addEntry', addEntry);
  app.delete  ('/api/deleteEntry/:entry', deleteEntry);
  app.post    ('/api/updateEntry', updateEntry);
};
