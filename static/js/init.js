var search = require('./modules/search.js');
var api = require('./modules/api.js');
var navs = require('./modules/navs.js');
var tables = require('./modules/tables.js');
var tmpls = require('./modules/tmpls.js');
var filters = require('./modules/filters.js');
var urls = require('./modules/urls.js');

api.init();
search.init();
navs.init();
tables.init();
tmpls.init();
filters.init();
urls.init();
