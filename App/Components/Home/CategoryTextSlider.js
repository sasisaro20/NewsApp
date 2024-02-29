import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Color  from '../../Shared/Color'

export default function CategoryTextSlider({selectCategory}) {
  const [active , setActive]= useState(1) 
const categoryList=[
  {
    id:1,
    name:'Latest News' 
  },
  {
    id:2,
    name:'Economy'
  },
  {
    id:3,
    name: 'International Relations'
  },
  {
    id:4,
    name: 'Social Issues'
  },
  {
    id:5,
    name: 'Technology'
  },
  {
    id:6,
    name : 'Entertainment'
  },
  {
    id:7,
    name : 'Sports '
  },
  {
    id:8,
    name : ' Environment '
  },
  {
    id:9,
    name : ' Health '
  },
  {
    id:10,
    name : ' Education '
  },
  {
    id:11,
    name : ' Crime and Justice '
  },
  {
    id:12,
    name : ' Science '
  },
  {
    id:13,
    name : 'Tamil Movies News'
  },

]
const onCategoryClick=(id)=>{
  setActive(id)
}
 return (
    <View style={{marginTop:10}}>
       <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
       renderItem={({item}) => (
        <TouchableOpacity onPress={()=>{onCategoryClick(item.id);
        selectCategory(item.name)}}>

          <Text style={
            item.id==active?styles.selectText:styles.unselectText}>{item.name}</Text>
        </TouchableOpacity>
       )} 
       />
    </View>
  )
}

const styles = StyleSheet.create({
    unselectText:{
      marginRight:20,
      fontSize:20,
      marginLeft:2,
      fontWeight:'800', 
      color:Color.gray,
      marginLeft:10,
      marginBottom:10,
      backgroundColor:'#f5f5f0',
      borderRadius:20,
      padding:10,
      borderColor:'#00b8e6',
     
  },
    selectText:{
    marginRight:20,
    fontSize:20,
    fontWeight:'900', 
    color:Color.primary,
    marginLeft:10,
    marginBottom:10,
    backgroundColor:'#f5f5f0',
    borderRadius:20,
    padding:10,
    borderWidth:3,
    borderColor:'#00b8e6',
    
  

}
})