import { View, Text, Image, TouchableOpacity, Share, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';


export default function ReadNews() {

  const news = useRoute().params.news;
  const navigation = useNavigation();
  useEffect(()=>{
    console.log(news)
  } , [])

  const sharenews =()=>{
    Share.share({
      message:news.title+"\nRead More"+news.description
    })
  }
  return (
    <ScrollView style = {{backgroundColor:Color.white,flex:1}}>
      <View style = {{marginTop:40,marginBottom:10,display:'flex',flexDirection:'row',marginRight:16,marginLeft:16,justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>sharenews()}>
        <FontAwesome6 name="share-square" size={26} color="black" />
        </TouchableOpacity>
      </View>
       <Image source={ {uri:news.urlToImage}} style={{width:'100',height:300,borderRadius:15,marginLeft:16,marginRight:16}}/>
       <Text style= {{ marginTop:10,fontSize:22,fontWeight:'bold',marginLeft:16,marginLeft:16}}>{news.title}</Text>
       <Text style = {{marginTop:10,color:Color.primary,fontSize:16,marginLeft:16}}>{news.source.name}</Text>
       <Text style= {{ marginTop:10,fontSize:18,color:Color.gray,lineHeight:30,marginLeft:16,marginRight:16,
      }}>{news.description}</Text>
       <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
       <Text style = {{marginTop:10,color:Color.primary,fontSize:16,fontWeight:'bold',marginLeft:16}}>Read More</Text>
       </TouchableOpacity>
    </ScrollView>
  )
}