"use strict";

function* Favourites() {
    var pizza = yield "What is your favourite pizza?";
    var game = yield "What is your favourite game?";
    var movie = yield "What is your favourite movie?";

    console.log(pizza + " " + game + " " + movie);
}

var q = Favourites();
q.next();
q.next('Chesse');
q.next('Half-life');
q.next('Dark Knight');
