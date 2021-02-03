import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import apikeys from './apikeys';

const containerStyle = {
    position: 'relative',  
    width: '350px',
    height: '350px',
}

const style = {
    width: '100%',
    height: '100%'
}

export class MapContainer extends Component {
    render() {
      return (
        <Map containerStyle={containerStyle} style={style} initialCenter={{
            lat: 5.55000423344699, 
            lng: -4.968354397843002
          }} google={this.props.google} zoom={8}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />  
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: (apikeys.GOOGLEKEY)
  })(MapContainer)