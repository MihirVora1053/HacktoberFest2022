import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function TestCallout({ name, rating, price, image }) {
  return (
    <View style={{ width: 70, height: 150, backgroundColor: "" }}>
      <View style={{ width: 70, height: 110, borderRadius: 10 }}>
        <Image
          source={require("../assets/CalloutImage.jpg")}
          style={{
            borderRadius: 10,
            width: 70,
            height: 110,
            alignSelf: "center",
          }}
        ></Image>
        <Text style={{ marginTop: 8, fontWeight: "bold", fontSize: 14 }}>
          {name}
        </Text>
      </View>
      <View style={styles.rate}>
        <Text style={{ fontSize: 13 }}>{rating} ⭐️</Text>
        <Text>₹ {price}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rate: {
	flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
