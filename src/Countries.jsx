import { useEffect, useState } from "react";


const CountryCard = ({ name, flag, altText }) => {
    return (
        <div
            style={{
                width: "200px",
                border: "1px solid #cccccc7a",
                borderRadius: "10px",
                margin: "5px",
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <img
                src={flag}
                alt={altText}
                style={{
                    width: "100px",
                    height: "100px"
                }}
            />
            <h4>{name}</h4>
        </div>
    );
};


const API_URL = "https://xcountries-backend.azurewebsites.net/all";
function Countries(){

    const[countries, setCountries] = useState([])
    
    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await fetch(API_URL)
                const jsonRes = await response.json()
                setCountries(jsonRes)
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        };

        fetchData();
    }, [])


    return (
        <div
        style={{
            display:"flex",
            flexWrap:"wrap"
        }}>
            {countries.map((value) => (
                <CountryCard
                    key={value.name}
                    name={value.name}
                    flag={value.flag}
                    altText={`${value.name} flag`}
                />
            ))}
        </div>
    )
}

export default Countries