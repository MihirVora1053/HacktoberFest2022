import * as React from "react";
import MapView, { Callout, Marker, Circle } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Slider from "@react-native-community/slider";
import TestCallout from "./components/TestCallout";
export default function App() {
  const [radius, setRadius] = React.useState(1000);
  const [range, setRange] = React.useState("50%");
  const [pin, setPin] = React.useState({
    latitude: 19.1379608,
    longitude: 72.8397201,
  });
  return (
    <View style={styles.container}>
      <MapView
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
    height: Dimensions.get("window").height,
  },
  callout: {
    width: 100,
    height: 120,
  },
});
