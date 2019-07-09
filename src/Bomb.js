// your Bomb code here!
import React, { Component}from 'react';



export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {secondsLeft: this.props.initialCount}
    }
    
    render() {
        const {secondsLeft} = this.state
        return (
            <div>{secondsLeft === 0 ?  "Boom!": `${secondsLeft} seconds left before I go boom!` }</div>
        );
    }
}