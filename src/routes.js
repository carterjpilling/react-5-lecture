//this file will be a directory. its like a direction sign pointing in a bunch of ways
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import AlbumList from './components/AlbumList'
import { Switch, Route } from 'react-router-dom'
import SingleAlbum from './components/SingleAlbum'
import NotFound from './components/NotFound'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/albums' component={AlbumList} />
    <Route exact path='/album/:albumId' component={SingleAlbum} />
    <Route component={NotFound} />
  </Switch>
)