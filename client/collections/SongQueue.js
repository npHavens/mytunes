// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add remove', function() {
      if ( this.size() === 1 ) {
        this.playFirst();
      }
    }, this);

    this.on('ended dequeue', function() {
      // Removes the first song in the Song Queue when any song is being played.  Assumption is that the first song in queue is played
      this.at(0).set('playCount', this.at(0).get('playCount') + 1);

      this.remove(this.at(0));

      if ( this.size() > 0 ) {
        this.playFirst();
      }
    }, this);
  },

  enqueue: function(song) {
    this.push(song);
  },

  playFirst: function() {
    this.at(0).play();
  }
});