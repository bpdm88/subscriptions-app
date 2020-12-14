const List = ({ list }) => (
    <ul>
        {list.map((item, index) => (
                <li key={ index }>
                    { item }
                </li>
        ))}
    </ul>
);


export default List;