const List = ({ list, handleClick }) => (
    <ul>
        {list.map( item => (
            <li key={item.id} onClick={handleClick}>
                {item.name}
            </li>
        ))}
    </ul>
);

export default List;
