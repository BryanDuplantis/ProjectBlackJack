var shuffleDeckAPI_URL = "http://deckofcardsapi.com/api/shuffle/?deck_count=1"
var drawCardAPI_URL = "http://deckofcardsapi.com/api/draw/"
var myID;
var currentHand;
var currentCard;

// $(document).ready(function (){

var shuffleDeck = document.querySelector('#btnDeal');

shuffleDeck.onclick = (function (){
    
    getJSON(shuffleDeckAPI_URL, function (d) {
      myID = d.deck_id;

      getJSON(drawCardAPI_URL + myID + "/?count=4",function (d) {
    
    $("#myHand").empty();
    $("#myHand").append("<img src=" + d.cards[0].image + ">");
    $("#myHand").append("<img src=" + d.cards[1].image + ">");

    $("#dealerHand").empty();
    $("#dealerHand").append("<img class = dealerCard src = https://playingcardcollector.files.wordpress.com/2013/10/bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png>");
    $("#dealerHand").append("<img src=" + d.cards[0].image + ">");

    })
})

var hitCard = document.querySelector('.hitBtn')

hitCard.onclick = (function (){

    getJSON(drawCardAPI_URL + myID + "/?count=1",function (d) {
        // var hitCard = d.deck.id;

    $("#myHand").append("<img src=" + d.cards[0].image + ">");
    // var currentHand += d.cards[].value

    }) 
})




    function getJSON(url, cb) {
      JSONP_PROXY = 'https://jsonp.afeld.me/?url='
      // THIS WILL ADD THE CROSS ORIGIN HEADERS
      
      var request = new XMLHttpRequest();
      
      request.open('GET', JSONP_PROXY + url);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          cb(JSON.parse(request.responseText));
        } 
      };

        request.send();
}

    })