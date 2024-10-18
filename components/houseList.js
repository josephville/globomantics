import { useState } from "react";
import HouseRowMem from "./houseRow";

const houseArray = [
    {
        id: 1,
        address: "123 E Main St, Rochester",
        country: "United States",
        price: 120000,
    },
    {
        id: 2,
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000,
    },
];

const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);
    
    const [counter, setCounter] = useState(0);
    const buttonClicked = () => setCounter(counter + 1);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            },
        ]);
    };

    return (
        <>
            {counter}
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Adress</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => ( 
                        <HouseRowMem key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add {counter}
            </button>
        </>
    );
};

export default HouseList;