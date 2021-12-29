import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const params = {
  isMapReady: true,
  isMarkerShown: true,
  loadingEnabled: true,
  location: {latitude: 51.2270364, longitude: 58.4826075},
  markerColor: '#06b6d4',
  region: {
    latitude: 51.2270364,
    longitude: 58.4826075,
    latitudeDelta: 0.010676351271733608,
    longitudeDelta: 0.007999996686777422,
  },
  style: [{borderRadius: 8}, {height: 128, width: 312}],
};

export default function App() {

  return (
    <MapView
      initialRegion={params.initialRegion}
      loadingEnabled={params.loadingEnabled}
      region={params.region}
      rotateEnabled={params.rotateEnabled}
      scrollEnabled={params.scrollEnabled}
      style={params.style}
    >
      {Platform.OS !== 'web' && params.isMapReady && params.isMarkerShown && (
        <Marker coordinate={params.location} centerOffset={{x: 0, y: -22}}>

        </Marker>
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
