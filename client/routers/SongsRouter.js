var songsRouter = Backbone.Router.extend({
  routes: {
    'songs':                        'songs',                //...html/#songs   => songs method
    'songs/:title':                 'songs',                //...html/#songs/Back and Forth/   => songs method
    'songs/:title/':                'songs',                //...html/#songs/Back and Forth/   => songs method
    'songs/:title/:artist':         'songs',                //...html/#songs/Back and Forth/Aaliyah   => songs method
  },

  initialize: function(params) {
    this.collection = params.collection;
  },

  songs: function(title) {
    console.log('songs called');

    this.collection.on('reset', function() {
      var song = this.collection.where({title: title});
      song[0].enqueue();
    }, this);


    //console.log(this.collection.where({artist: 'Aaliyah'}));

    //Find a way to access the collection
    //get the song from collection
    //enqueue the song using songApp method
  },
});

