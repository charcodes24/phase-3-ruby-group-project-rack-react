import AddPark from "./AddPark";
import Card from "./Card";

function Container({ parks, addPark }) {

    const displayParks = parks.map((park, i) => {
        return <Card
            key={i}
            park={park}
            />
    })
    
    return (
        <div>
            <AddPark addPark={addPark}/>
            {displayParks}
        </div>
    )
}

export default Container;