
import React, { useState } from 'react'

const Weather = () => {
    const [input, setInput] = useState("");
    const [aqi, setAqi] = useState(null);
    const [error, setError] = useState("");
    const Design = {
        backgroundColor: 'yellow',
        maxHeight: 'fit-content',
        width: '35rem',
        display: 'grid',
        borderRadius: '0.8rem',
        justifyContent: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        padding: '0',
        margin: '0',
        justifyItems: 'center'
    };
    const stateMap = {
        "Andhra Pradesh": "Andhra_Pradesh",
        "Arunachal Pradesh": "Arunachal_Pradesh",
        "Assam": "Assam",
        "Bihar": "Bihar",
        "Chhattisgarh": "Chhattisgarh",
        "Goa": "Goa",
        "Gujarat": "Gujarat",
        "Haryana": "Haryana",
        "Himachal Pradesh": "Himachal_Pradesh",
        "Jharkhand": "Jharkhand",
        "Karnataka": "Karnataka",
        "Kerala": "Kerala",
        "Madhya Pradesh": "Madhya_Pradesh",
        "Maharashtra": "Maharashtra",
        "Manipur": "Manipur",
        "Meghalaya": "Meghalaya",
        "Mizoram": "Mizoram",
        "Nagaland": "Nagaland",
        "Odisha": "Odisha",
        "Punjab": "Punjab",
        "Rajasthan": "Rajasthan",
        "Sikkim": "Sikkim",
        "Tamil Nadu": "Tamil_Nadu",
        "Telangana": "Telangana",
        "Tripura": "Tripura",
        "Uttar Pradesh": "Uttar_Pradesh",
        "Uttarakhand": "Uttarakhand",
        "West Bengal": "West_Bengal",

        // Union Territories
        "Andaman and Nicobar Islands": "Andaman_and_Nicobar_Islands",
        "Chandigarh": "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu": "Dadra_and_Nagar_Haveli_and_Daman_and_Diu",
        "Delhi": "Delhi",
        "Jammu and Kashmir": "Jammu_and_Kashmir",
        "Ladakh": "Ladakh",
        "Lakshadweep": "Lakshadweep",
        "Puducherry": "Puducherry"
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setAqi(null);
        setError("");

        const apiState = stateMap[input] || input;
        fetch(`https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=100&filters[state]=${apiState}`).then((res) => { return res.json() }).then((val) => {
            if (val.records && val.records.length > 0) {
                setAqi(val.records[0].avg_value);
            } else {
                setError("No data found. Try another state!");
            }
        }).catch(() => { alert("Try using different state!") });

    }
    return (
        <div>
            <form style={Design} onSubmit={handleSubmit} >
                <h1>Fetch AQI</h1>
                <span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter state name"
                    />
                    <select value={input} onChange={(e) => setInput(e.target.value)}>
                        {Object.keys(stateMap).map((state) => {
                            return <option key={state } value={state} >{state}</option>
                        })}
                    </select>

                    <button type="submit">Send</button>
                </span>
                {aqi && <h2>The average AQI of {input} is {aqi}</h2>}
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
            </form>
        </div>
    )
}

export default Weather;