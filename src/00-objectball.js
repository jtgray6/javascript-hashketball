function gameObject () {
    let gameObject = {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
             }
        }
    }
    return gameObject;
}

function allPlayers(object) {
    let teamInfo = Object.entries(object)
    let homePlayersObj = teamInfo[0][1]["players"]
    let awayPlayersObj = teamInfo[1][1]["players"]
    let homePlayers = Object.entries(homePlayersObj)
    let awayPlayers = Object.entries(awayPlayersObj)
    let allPlayers = homePlayers.concat(awayPlayers)
    return allPlayers
}

function numPointsScored (playerName) {
    let players = allPlayers(gameObject());
    let points = 0;
    players.forEach(player => {
        if (player[0] == playerName) {points = player[1]["points"]}})
    return points
}

function shoeSize (playerName) {
    let players = allPlayers(gameObject());
    let shoeSize = 0;
    players.forEach(player => {
        if (player[0] == playerName) {shoeSize = player[1]["shoe"]}})
    return shoeSize
}

function teamColors (teamName) {
    let teamInfo = Object.entries(gameObject());
    let teamColors = []
    teamInfo.forEach(team => {
        if (team[1]["teamName"]==teamName) {teamColors = team[1]["colors"]}})
    return teamColors
}

function teamNames () {
    let teamInfo = Object.entries(gameObject());
    let teams = [];
    teamInfo.forEach(team => {
        teams.push(team[1]["teamName"])
    })
    return teams
}

function playerNumbers (teamName) {
    let teamInfo = Object.entries(gameObject());
    let thisTeamPlayers = [];
    teamInfo.forEach(team => {
        if (team[1]["teamName"]==teamName) {thisTeamPlayers = team[1]["players"]}})
    let teamPlayersArr = Object.entries(thisTeamPlayers)
    teamNumbers = [];
    teamPlayersArr.forEach(player => {
        teamNumbers.push(player[1]["number"])
    })
    return teamNumbers
}

function playerStats (playerName) {
    let players = allPlayers(gameObject());
    let stats = [];
    players.forEach(player => {
        if (player[0]==playerName) {stats = player[1]}})
    return stats
}

function bigShoeRebounds() {
    let players = allPlayers(gameObject());
    let biggestShoe = 0;
    let biggestShoeRebounds = 0;
    players.forEach(player => {
        if (player[1]["shoe"] > biggestShoe) {
            biggestShoe=player[1]["shoe"]
            biggestShoeRebounds=player[1]["rebounds"]
        }
    })
    return biggestShoeRebounds
}

bigShoeRebounds();