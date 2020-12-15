<<<<<<< HEAD
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
=======
import { Component } from "react";

class List extends Component {

    constructor(){
        super();

        this.handleClick =  this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.handleLoad();
    }

    handleClick(event){
        this.props.setSelected( event.currentTarget.dataset.id );
    }

    render(){
        const { list } = this.props;
        return(
            <ul>
                {list.map( item => (
                    <li 
                    key={item.id} 
                    onClick={ this.handleClick }
                    data-id={ item.id }
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        );     
    }
}
>>>>>>> main

export default List;
