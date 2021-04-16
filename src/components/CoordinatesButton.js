// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {

    onClick = (event) => {
        let position = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(position)
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>CoordinatesButton</button>
            </div>
        )
    }
}

export default CoordinatesButton
