import TrafficLight from "./TrafficLight/TrafficLight";

const List = ({ list, handleClick }) => (
    <ul>
        {list.map((item, index) => (
            <li key={index} onClick={handleClick}>
                {item}
                <TrafficLight colourCode={3} />
            </li>
        ))}
    </ul>
);

export default List;
