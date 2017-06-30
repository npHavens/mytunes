// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(){
      if ( this.size() === 1 ) {
        this.playFirst();
      }
    }, this);
  },

  enqueue: function(song) {
    this.push(song);
  },

  playFirst: function() {
    this.models[0].play();
  }
});