import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import albums from '../data.json'
import './style.css'

class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      album: {},
    }
  }

  componentDidMount() {
    console.log(this.props.match)
    const { albumId } = this.props.match.params

    const album = albums.find((element) => element.id === +albumId)

    if (!album) {
      this.props.history.push('/404')
    } else {
      this.setState({
        album: album,
      })
    }
  }
  //prevprops, the previous value of props. Used to see if we need to refresh the page (aka if something has changed)
  //this just makes it so we can change the url. 
  componentDidUpdate(prevProps) {
    const { albumId } = this.props.match.params
    //only perform if the albumId changes
    if (albumId !== prevProps.match.params.albumId) {
      const album = albums.find((element) => element.id === +albumId)

      if (!album) {
        this.props.history.push('/404')
      } else {
        this.setState({
          album: album,
        })

      }
    }
  }
  handleBuyAlbum = () => {
    alert('YOU BOUGHT IT')
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    return (
      <div className="single-album">
        <h2>
          {this.state.album.artist} - {this.state.album.title}
        </h2>
        <img
          src={this.state.album.image}
          alt={this.state.album.title}
          className="large-album-art"
        />
        <button onClick={() => this.handleBuyAlbum()} className="buy-button">
          Buy Now!
        </button>
      </div>
    )
  }
}
export default withRouter(SingleAlbum)
