import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'

export default function Headlinelist({newsList}) {
  const navigation=useNavigation();
  return (
    <View>
        <FlatList 
            data={newsList}
            showsVerticalScrollIndicator ={false}
            renderItem={({item}) => (
              <View>
                 <View style={{height:2,backgroundColor:Color.lightgray,marginTop:10}}></View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('read-news',{news:item})} 
                style={{marginTop:15,display:'flex',flexDirection:'row'}}>
                    <Image source={{uri:item.urlToImage}} 
                    style={{width:130,height:130}} />
                    
                    <View style={{marginRight:130,marginLeft:10}}>
                    <Text numberOfLines={4} style={{fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                    <Text style={{color:Color.primary,marginTop:6}}>{item?.source?.name}</Text>
                    </View>
            
                </TouchableOpacity>
               
              </View>
            )}
        />
    </View>
  )
}