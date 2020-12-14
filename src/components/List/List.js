const List = ({ list, handleClick }) => (
    <ul>
        {list.map((item, index) => (
            <li key={index} onClick={handleClick}>
                {item}
            </li>
        ))}
    </ul>
);

export default List;
