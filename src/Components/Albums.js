import React, { Component } from 'react'
import '../App.css';

export class Albums extends Component {
    constructor(props) {
		super(props)
    }
    render() {
        return (
            <div className = "three-cards">
                {this.props.albums.map(album => {
                return (<ul>
                    <img className="final"alt="example" src={album.src} width="200" height="300" />
                    <h5>{album.artist}</h5>
                    <h5>{album.album_title}</h5>
                    <h5>{album.album_cover}</h5>
                    </ul>)
            })}
            </div>
        )
    }
}

export default Albums
