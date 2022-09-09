import React from 'react'
import { GooglePlacesAutocomplete,InputAutocompleterProps } from 'react-native-google-places-autocomplete';
import { Text,StyleSheet } from 'react-native';
import  Constants  from 'expo-constants';
import { GOOGLE_API } from '../enviroment';
export default function InputAutoComplete({placeholder,onPlaceSelected}) {
  return (
    <>
      
      <GooglePlacesAutocomplete
        styles={{ textInput:styles.input }}
        placeholder={placeholder}
        fetchDetails
        onPress={(data, details = null) => {
        
          onPlaceSelected(details)
        }}
        query={{
          key: GOOGLE_API,
          language: 'en',
        }}
      />
    </>
  )
}
const styles = StyleSheet.create({
    
        input:{
          borderRadius: 20,
        },
})