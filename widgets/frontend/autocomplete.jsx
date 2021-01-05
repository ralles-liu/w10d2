import React from "react";

export default class AutoComplete extends React.Component{
    constructor(props){
        super(props)

        this.state = {input: ""};

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render(){
        const mappedNames = this.props.names.map((name) => {
            if (name.startsWith(this.state.input)){
                return <li>{name}</li>;
            }
        });

        return(
        <>
            <input onChange={this.handleInputChange} type="text"/>
            <ul>{mappedNames}</ul>
        </>
        );
    }

    handleInputChange(e){
        this.setState({
            input: e.currentTarget.value
        });
    }
}