import React, { Component } from 'react';
import {
  View
} from 'react-native';

const CardSection= () =>{
  return(
    <View style={styles.subContainerStyle}>
      {Props.children}
    </View>
);

};

const styles = {
  subContainerStyle:{
    borderBottomWidth:1,
    padding:5,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection: 'row',
    borderColor:'#ddd'
    position:'relative'
  },
}

export default CardSection;
