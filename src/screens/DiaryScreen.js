import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function DiaryScreen() {
  return (
    <View>
         <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:"rgb(0,145,255)"}}>
                  {/* icon tìm kiếm */}
                <TouchableOpacity style={{width:'10%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}> <Text>tìm</Text></View>
                 </TouchableOpacity>
                 <TextInput style={{height:40,width:'80%',backgroundColor:"rgb(0,145,255)"}} placeholder='tìm kiếm'/>
                 <TouchableOpacity style={{width:'10%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}> <Text>tìm</Text></View>
                 </TouchableOpacity>
                 
            </View>
      
    </View>
  );
}