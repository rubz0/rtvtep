import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';

class Map extends Component {
    state = {
        places: []
    }

    public static navigationOptions = {
      title: 'Map Screen',
    };
  
    render() {

      return (
        <MapView>
         
        </MapView>
      );
    }
  }

  export default Map;