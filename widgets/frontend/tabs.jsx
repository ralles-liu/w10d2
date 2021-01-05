import React from "react";
import ReactDOM from 'react-dom';

export default class Tabs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selected: 1,
        }

        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(e){
        const name = e.currentTarget.getAttribute("name");
        console.log(name);
        this.setState(
            {selected: eval(name)}
        );
    }

    render(){

        const mappedTabs = this.props.tabs.map((tab, i) => {
            if (i === this.state.selected) {
                return (
                    <li name={i} key={i} onClick={this.handleTabClick}>
                        <h1>{tab.title}</h1>
                        <article>{tab.content}</article>
                    </li>
                );
            } else {
                return <li name={i} key={i} onClick={this.handleTabClick}><h1>{tab.title}</h1></li>;
            }
        });

        return(
            <>
                <ul>
                    {mappedTabs}
                </ul>
            </>
        );
    }
}