import React from "react";
import ReactDOM from 'react-dom';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
        this.tick = this.tick.bind(this);

    }

    tick() {
        console.log("tick")
        this.setState({time: new Date()});

    }

    componentDidMount() {
        console.log("mount");
        setInterval(this.tick(), 1000);
    }

    render() {
        //this.componentDidMount()
        let date = this.state.time.toDateString();
        let time = this.state.time.toTimeString();

        return (
            <>
                <h1>Date: {date}</h1>
                <h1>Time: {time}</h1>
            </>
            
        )
    }

}