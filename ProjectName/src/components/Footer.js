import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';

const Footer = ({onPress, buttonText}) => (
  <View style ={{
    borderColor: "#EDEDEE", 
    borderTopWidth: 1, 
    paddingHorizontal: 32, 
    paddingTop: 16,
    height: 102, 
    width: "100%", 
    zIndex: 100
  }}>
    <TouchableOpacity onPress={onPress}>
      <View style={{
        backgroundColor: "#4769EE", 
        paddingVertical: 16, 
        alignItems: "center", 
        borderRadius: 16
      }}>
        <Text style={{color: "white", fontSize: 16, fontWeight: "700"}}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default Footer;