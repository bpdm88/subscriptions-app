import TrafficLight from "./TrafficLight/TrafficLight";

const List = ({ list, handleClick }) => (
    <ul>
        {list.map((item, index) => (
            <li key={index} onClick={handleClick}>
                {item.name} {console.log(item.payment_date)}
                // function for below
                <TrafficLight colourCode={2} />
            </li>
        ))}
    </ul>
);

export default List;
