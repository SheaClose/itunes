angular.module('itunes').service('itunesService', function($http, $q){
  var url = 'https://itunes.apple.com/search?term='
  var artistArgument = "&callback=JSON_CALLBACK"
  var editedArr = [];

  this.getSongData = function (artist) {
    return $http.jsonp(url + artist + artistArgument).then(function (response){
      for (var i = 0; i < response.data.results.length; i ++){
        var stuff = {
          AlbumArt: response.data.results[i].artworkUrl30,
          Artist: response.data.results[i].artistName,
          Collection: response.data.results[i].collectionName,
          CollectionPrice: response.data.results[i].collectionPrice,
          Play: response.data.results[i].previewUrl,
          Type: response.data.results[i].primaryGenreName
        }
        editedArr.push(stuff);
        stuff = {};
      }
      return editedArr;
    })
  }
});
