// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',

  initialize: function() {
    this.fetch({data: JSON, contentType: 'application/json', reset: true});
  },

  parse: function(response) {
    return response.results;
  }

});

