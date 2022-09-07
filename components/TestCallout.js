import React from 'react'
import { View, Image,Text } from 'react-native'

export default function TestCallout({name,rating,price,image}) {
  return (
    <View style={{ width: 70, height: 120, backgroundColor: "" }}>
			<View style={{ backgroundColor: "red", width: 70, height: 70 }}>
				<Image source={require("../assets/CalloutImage.jpg")} style={{width:70, height:80, alignSelf:'center'}}></Image>
			</View>
			<Text style={{ marginTop: 5 }}>{name}</Text>
			<Text style={{ marginTop: 3, marginLeft: 7, marginBottom:0,fontSize: 13 }}>
				{rating} ⭐️
			</Text>
			<Text style={{ marginTop: -17, marginLeft: 30 }}>₹ {price}</Text>
			
		</View>
  )
}
