import React, { Component } from 'react'
import "../App.css"

export class Album extends Component {
    constructor(props) {
		super(props)
    }
    render() {
        return (
            <div className = "single">
            <div calssName="final">
            <h1>Albums</h1>
            <img   alt="example" src={this.props.src} width="200" height="300" />
                    <h5>{this.props.artist}</h5>
                    <h5>{this.props.album}</h5>
                    </div>
            </div>
        )
    }
}

export default Album
