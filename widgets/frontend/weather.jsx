import React from "react";
import ReactDOM from "react-dom";

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API ff}
// navigator.geolocation.getCurrentPosition

export default class Weather extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            weather: "loading...",
            city: ""
        };
    }

    render(){
        return(<h1>{this.state.city}: {this.state.weather}</h1>);
    }

    componentDidMount(){
        const k = "37eeb7ef8bc8b47f06e91da4703b0a99";
        const ctx = this;

        navigator.geolocation.getCurrentPosition(success);

        function success(pos){
            // Set state
            const location = pos.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${k}`;
            const request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onload = function(){
                // if (this.status >= 200 )
                const obj = JSON.parse(this.response);
                ctx.setState({
                    weather: obj.main.temp.toString(),
                    city: obj.name.toString()
                });
            }
            request.send();
        }
    }
}