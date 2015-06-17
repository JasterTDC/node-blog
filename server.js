
// Include section.
var express       = require ('express'),
    bodyParser    = require ('body-parser'),
    methodOver    = require ('method-override'),
    morgan        = require ('morgan'),
    mongoose      = require ('mongoose'),
    database      = require ('./config/database'),
    app           = express ();

// Port.
var port          = process.env.PORT || 1557;

// App config.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOver('X-HTTP-Method-Override'));
app.use(morgan ('dev'));

// Database connection.
mongoose.connect (database.url, function (err, rs){
  if (err)
    res.send (err);
});

// Routes.
require ('./routes/entry') (app);

// Listening port.
app.listen (port);
