//0 to 12 represents 2,3,4,5,6,7,8,9,10,J,Q,K of diamonds
var cards = ["2_of_diamonds.png", "3_of_diamonds.png", "4_of_diamonds.png", "5_of_diamonds.png", "6_of_diamonds.png", "7_of_diamonds.png", "8_of_diamonds.png", "9,_of_diamonds.png",
"10_of_diamonds.png", "jack_of_diamonds.png", "queen_of_diamonds.png", "king_of_diamonds.png"];
var score = 12;
var used = [0,0,0,0,0,0,0,0,0,0,0,0];
var flipped = [0,0,0,0,0,0,0,0,0,0,0,0];

function revealCard(data, cardnumber, chosen) {
    if(data.charAt(cardnumber) == '1')
    {
        var imgpath = "/static/img/small_cards/".concat(cards[chosen]);
        var idname = "#card".concat(cardnumber);
        $(idname).attr('src', imgpath);
        $("#finalscore").html("Score: ".concat(score));
        $('#endmodal').modal('show');
        $('#endmodal').modal({backdrop: 'static', keyboard: false});

    }
    else if(flipped[cardnumber] == 0)
    {
        flipped[cardnumber] = 1;
        var rand = Math.floor(Math.random() * 12);
        while(used[rand] == 1)
        {
            rand = Math.floor(Math.random() * 12);
        }
        used[rand] = 1;
        var imgpath = "/static/img/small_cards/".concat(cards[rand]);
        var idname = "#card".concat(cardnumber);
        $(idname).attr('src', imgpath);
        score--;
        $("#score").html("Score: ".concat(score));
    }

  }
  
  $(document).ready(function() {

    var data = $("#data").html();
    console.log(data);

    var chosen = Math.floor(Math.random() * 12);
    used[chosen] = 1;
    var imgpath = "/static/img/small_cards/".concat(cards[chosen]);
    $("#card_to_get").attr('src', imgpath);

    $("#card0").click(function() { return revealCard(data, 0, chosen) });
    $("#card1").click(function() { return revealCard(data, 1, chosen) });
    $("#card2").click(function() { return revealCard(data, 2, chosen) });
    $("#card3").click(function() { return revealCard(data, 3, chosen) });
    $("#card4").click(function() { return revealCard(data, 4, chosen) });
    $("#card5").click(function() { return revealCard(data, 5, chosen) });
    $("#card6").click(function() { return revealCard(data, 6, chosen) });
    $("#card7").click(function() { return revealCard(data, 7, chosen) });
    $("#card8").click(function() { return revealCard(data, 8, chosen) });
    $("#card9").click(function() { return revealCard(data, 9, chosen) });
    $("#card10").click(function() { return revealCard(data, 10, chosen) });
    $("#card11").click(function() { return revealCard(data, 11, chosen) });
    $('#endmodal').modal({backdrop: 'static', keyboard: false});
    $('#endmodal').modal('hide');
});