import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, TouchableHighlight, Dimensions } from 'react-native';
import Map from './containers/Map';

export default function App() {
  const screenWidth = Dimensions.get('window').width;
  fetch('https://www.google.com', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response)
    .then((responseJson) => {
      console.log(responseJson)
      // return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <Map/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
