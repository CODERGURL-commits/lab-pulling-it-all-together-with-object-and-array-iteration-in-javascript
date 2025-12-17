function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// 1. numPointsScored
function numPointsScored(playerName) {
    const game = gameObject();
    
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    }
    
    if (game.away.players[playerName]) {
        return game.away.players[playerName].points;
    }
    
    
}

// 2. shoeSize
function shoeSize(playerName) {
    const game = gameObject();
    
    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    }
    
    if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    }
}

// 3. teamColors
function teamColors(teamName) {
    const game = gameObject();
    
    if (game.home.teamName === teamName) {
        return game.home.colors;
    }
    
    if (game.away.teamName === teamName) {
        return game.away.colors;
    }
}

// 4. teamNames
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// 5. playerNumbers
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    
    if (game.home.teamName === teamName) {
        for (const player in game.home.players) {
            numbers.push(game.home.players[player].number);
        }
    }
    
    if (game.away.teamName === teamName) {
        for (const player in game.away.players) {
            numbers.push(game.away.players[player].number);
        }
    }
    
    return numbers;
}

// 6. playerStats
function playerStats(playerName) {
    const game = gameObject();
    
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }
    
    if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    

}

// 7. bigShoeRebounds
function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = 0;
    let playerWithBiggestShoe = null;
    
    // Check home team
    for (const player in game.home.players) {
        if (game.home.players[player].shoe > biggestShoe) {
            biggestShoe = game.home.players[player].shoe;
            playerWithBiggestShoe = player;
        }
    }
    
    // Check away team
    for (const player in game.away.players) {
        if (game.away.players[player].shoe > biggestShoe) {
            biggestShoe = game.away.players[player].shoe;
            playerWithBiggestShoe = player;
        }
    }
    
    // Get rebounds
    if (game.home.players[playerWithBiggestShoe]) {
        return game.home.players[playerWithBiggestShoe].rebounds;
    }
    if (game.away.players[playerWithBiggestShoe]) {
        return game.away.players[playerWithBiggestShoe].rebounds;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        numPointsScored,
        shoeSize,
        teamColors,
        teamNames,
        playerNumbers,
        playerStats,
        bigShoeRebounds
    };
}       