const TrafficLight = ({ colourCode }) => {
    let classNames = {
        1: "traffic-light--green",
        2: "traffic-light--yellow",
        3: "traffic-light--red",
    };

    return <div className={classNames[colourCode]}></div>;
};

export default TrafficLight;
