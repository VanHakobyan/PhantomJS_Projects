import BookmakerModel from "../CommonModels"

var page = require('webpage').create();
page.open('https://www.188bet.com/en-gb/sports/all/in-play', function (status) {
    console.log("Status: " + status);
    if (status === "success") {
        page.switchToFrame(0);
        console.log("Hello Aram!");
        Parse(page);
        console.log("Hello Aram!");
    }
    phantom.exit();
});

function Parse(page) {
    var bookmaker = new BookmakerModel();
    bookmaker.Name = "188Bet";
    bookmaker.BookmakerNumber = 188;
    console.log(bookmaker.Name);
    //var sport = new SportModel();
    //var league = new LeagueModel();
    //var match = new MatchModel();
    //var market = new MarketModel();

    //var oddstblcontainers = document.getElementsByClassName('odds-tbl-containers');
    //var sportContainers = oddstblcontainers.getElementsByClassName('container').filter(x => x.attribute['id'].value != 'sc25');
    //console.log(sportContainers.count);
    //console.log(sportContainers[0]);
}