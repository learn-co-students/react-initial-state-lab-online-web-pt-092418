import React, {Component} from 'react'// your Bomb code here!

export default class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    time = () => {
        if (this.state.secondsLeft > 0) {
            const newTime = this.state.secondsLeft - 1;
            this.setState({
                secondsLeft: newTime
            });
            return this.state.secondsLeft + " seconds left before I go boom!"
        } else {
            return "Boom!"
        }
    };

    render() {
        return(
            <div>
                {this.time()}
            </div>
        )
    }
}

