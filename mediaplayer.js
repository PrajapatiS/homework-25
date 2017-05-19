let app= angular.module('MusicApp', []);

app.controller('SongsController', function($scope){
   $scope.songs=[
    { song_title: 'song1', artist_name: 'artist1', album_title:'album1', duration:' 1min', cover_art:'artI' },
    { song_title: 'song2', artist_name: 'artist2', album_title:'album2', duration:' 6min', cover_art:'artII' },
    { song_title: 'song3', artist_name: 'artist3', album_title:'album3', duration:' 2min', cover_art:'artIII' },
    { song_title: 'song4', artist_name: 'artist1', album_title:'album4', duration:' 4min', cover_art:'artIV' },
  
   ];

   $scope.play= function(next){
    console.log('cliked');
     $scope.sgplay= next;
  console.log($scope.sgplay.song_title);
};

});

