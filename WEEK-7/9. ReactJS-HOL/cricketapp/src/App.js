import React from 'react';
import './App.css';

import ListOfPlayers from './ListOfPlayers';
import ListOfIndianPlayers, { OddPlayers, EvenPlayers, IndianPlayers } from './IndianPlayers';

function App() {
    
    var flag = false;


    const indianTeamMembers = {
        first: IndianPlayers[0],
        second: IndianPlayers[1],
        third: IndianPlayers[2],
        fourth: IndianPlayers[3],
        fifth: IndianPlayers[4],
        sixth: IndianPlayers[5]
    };


    if (flag === true) {
        return (
            <div className="App">
                {}
                {}
                <ListOfPlayers />
            </div>
        );
    } else {
        return (
            <div className="App">
                {}
                <h1>Indian Team</h1>
                <hr />

                <h1>Odd Players</h1>
                <OddPlayers
                    first={indianTeamMembers.first}
                    third={indianTeamMembers.third}
                    fifth={indianTeamMembers.fifth}
                />
                <hr />

                <h1>Even Players</h1>
                <EvenPlayers
                    second={indianTeamMembers.second}
                    fourth={indianTeamMembers.fourth}
                    sixth={indianTeamMembers.sixth}
                />
                <hr />

                <h1>List of Indian Players Merged:</h1>
                {}
                <ListOfIndianPlayers IndianPlayers={IndianPlayers} />
            </div>
        );
    }
}

export default App;