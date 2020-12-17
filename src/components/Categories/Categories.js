const Categories = ({ selected }) => {
    return (
            <ul className="categories-list"> 
                { selected.categories.map((element, index) => (            
                    <li className="category" key={ index }>{ element }</li> 
                )) } 
            </ul>
        );
};

export default Categories;