import React, { useState, useEffect } from 'react';
import MapView, { Callout, Marker, Circle } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image, Button } from "react-native";
import Slider from "@react-native-community/slider";
import TestCallout from "./components/TestCallout";
import * as Location from 'expo-location';



export default function App() {
  const [radius, setRadius] = React.useState(1000);
  const [range, setRange] = React.useState("50%");
  const [pin, setPin] = React.useState({
    latitude: 19.1379608,
    longitude: 72.8397201,
  });
  const [cPin,setCPin]=React.useState({
    latitude: 19.2119,
    longitude: 72.8282,
  });
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setPin(
         {
             latitude:location.coords.latitude,
             longitude:location.coords.longitude
       }
       );
    })();
  }, []);

 async function handlePress(){
    let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setPin(
         {
             latitude:location.coords.latitude,
             longitude:location.coords.longitude
       }
       );
  }
  return (
    <View style={styles.container}>
      <MapView
        provider='google'
        style={styles.map}
        initialRegion={{
          latitude: 19.1379608,
          longitude: 72.8397201,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          icon={require("./assets/MarkerLogo.jpg")}
          coordinate={cPin}
          draggable={true}
          onDragStart={(e) => {
            console.log(e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setCPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <TestCallout name="Mihir" price="1" rating="5"/>
          </Callout></Marker>
        <Marker
          icon={require("./assets/MarkerLogo.jpg")}
          coordinate={pin}
          draggable={true}
          onDragStart={(e) => {
            console.log(e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          
          <Callout>
            <TestCallout name="Mihir" price="1" rating="5"/>
          </Callout>
          
        </Marker>
        <Circle
          fillColor="#fcbc0533"
          radius={radius}
          center={pin}
          strokeColor="#fcbc05"
        />
      </MapView>
      <Slider
        style={{ width: 250, height: 40 }}
        thumbImage={require("./assets/CLogo.jpg")}
        minimumValue={1}
        value={50}
        maximumValue={100}
        maximumTrackTintColor="#fcbc05"
        minimumTrackTintColor="#fcbc05"
        onValueChange={(value) => {
          setRange(parseInt(value * 100));
          console.log(range);
        }}
        onSlidingComplete={(value) => {
          setRadius(100 * value);
        }}
      />
      <View style={styles.button}>
      <Button onPress={handlePress} title="Current Location"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: 500,
  },
  callout: {
    width: 80,
    height: 500,
  },
  button:{
    marginBottom:"8%"
  }
});
