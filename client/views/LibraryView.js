// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    // var results = this.collection.fetch();

    //event listener for add on this.collection
      //on event call render
    this.collection.on('reset', function(){
      this.render();
    }, this);

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  },

  // fetch: function() {
  //   $.ajax({
  //     url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  //     type: 'GET',
  //     data: JSON,
  //     contentType: 'application/json',
  //     success: function(data) {
  //       console.log('succeeded', data);
  //       this.renderSongs(data.results);
  //       this.render();
  //     }.bind(this),
  //     error: function(data) {
  //       console.log('error', data);
  //     }
  //   });
  // },

});
