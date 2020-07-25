let numberOfPlayers;
let rounds = [];
let color = "white" || "black";

function getPairing(players, system) {
    let rounds = numberOfPlayers - 1;

    if (system === 1) {
        for(let i = 0; i < numberOfPlayers - 1; i++ ){
            for (let j = i + 1; j < numberOfPlayers; j++) {
                rounds.push({ user1: users[i].username, 
                              user2: users[j].username });
            }
        }
    } else if (system === 2) {

    }
    return rounds;
}

let players = getPairing([
    { username: "Dwight", rank: 1650 },
    { username: "Ola", rank: 3650 },
    { username: "Morfeusz", rank: 850 },
], 1);

