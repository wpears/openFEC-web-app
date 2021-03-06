var events = require('./events.js');
var Handlebars = require('handlebars');
var templates = {};

var renderBrowse = function(e) {
   var tmplName = e.category; 

    $.ajax({
        url: 'views/' + tmplName + '.handlebars',
        dataType: 'text',
        success: function(data) {
            templates[tmplName] = Handlebars.compile(data);
            $('#main').html(templates[tmplName].call());
            events.emit('bind:browse');
        }
    });
};

module.exports = {
    init: function() {
        events.on('render:browse', renderBrowse);
    }
};
