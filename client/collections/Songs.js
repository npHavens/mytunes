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

  // fetch: function() {
  //   $.ajax({
  //     url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  //     type: 'GET',
  //     data: JSON,
  //     contentType: 'application/json',
  //     success: function(data) {
  //       // console.log('succeeded', data);
  //       console.log(data);
  //       this.add(data.results);
  //     }.bind(this),
  //     error: function(data) {
  //       console.log('error', data);
  //       return false;
  //     }
  //   });
  // }

});

