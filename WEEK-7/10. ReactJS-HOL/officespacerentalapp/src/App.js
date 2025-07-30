
import React from 'react';
import './App.css'; 



const officeImage = '/office-space.jpg';

function App() {

    const officeDetails = {
        Name: "DBS",
        Rent: 50000,
        Address: "Chennai"
    };


    const pageHeading = <h1>Office Space , at Affordable Range</h1>;


    const officeImageJSX = (
        <img
            src={officeImage}
            width="25%"
            height="25%"
            alt="Office Space"
        />
    );

    const getRentColor = (rent) => {
        return rent <= 60000 ? 'red' : 'green';
    };

    const officeSpaces = [
        { Name: "DBS", Rent: 50000, Address: "Chennai" },
        { Name: "TCS", Rent: 75000, Address: "Bengaluru" },
        { Name: "Infosys", Rent: 55000, Address: "Hyderabad" }
    ];

    return (
        <div className="App">
            {pageHeading}
            <hr /> {}

            {}
            {officeImageJSX}
            <h3>Name: {officeDetails.Name}</h3>
            <h3 style={{ color: getRentColor(officeDetails.Rent) }}>
                Rent: Rs. {officeDetails.Rent}
            </h3>
            <h3>Address: {officeDetails.Address}</h3>

            <hr /> {}

            <h2>More Office Spaces:</h2>
            {}
            {officeSpaces.map((office, index) => (
                <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <h3>Name: {office.Name}</h3>
                    <h3 style={{ color: getRentColor(office.Rent) }}>
                        Rent: Rs. {office.Rent}
                    </h3>
                    <h3>Address: {office.Address}</h3>
                </div>
            ))}
        </div>
    );
}

export default App;