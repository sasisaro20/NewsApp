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
                 <View style={{height:1,backgroundColor:' #d6d6c2'}}></View>
                <TouchableOpacity
                onPress={()=>navigation.navigate('read-news',{news:item})} 
                style={{marginTop:20,display:'flex',flexDirection:'row',marginLeft:10,
                backgroundColor:'#f5f5f0',borderRadius:20,padding:10,marginRight:10,marginBottom:5,marginTop:5,
                borderWidth:2,borderColor:'#99ebff'}}>
                   
                    <Image source={{uri:item.urlToImage}} 
                    style={{width:160,height:130,borderRadius:10}} />

                    
                    <View style={{justifyContent:'center',flexShrink:2,gap:4,marginLeft:10}}>
                    <Text numberOfLines={4} style={{fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                    <Text style={{color:Color.primary,marginTop:6}}>{item?.source?.name}</Text>
                    </View>
            
                </TouchableOpacity>

              </View>
            )}
        />

        <View style={{marginBottom:30}}></View>
    </View>
  )
}