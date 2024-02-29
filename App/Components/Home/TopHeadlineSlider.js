import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'

export default function ({ newsList }) {
  const navigation = useNavigation()
  return (
    <View style={{ marginTop: 10, marginRight: 10}}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('read-news', { news: item })}
            style={{ width: Dimensions.get('screen').width * 0.80, marginRight: 15, marginLeft: 10,padding:5,
            borderRadius:30, backgroundColor:'#f5f5f0',borderWidth:2,borderColor:'#99ebff',padding:20}}>

            <Image source={{ uri: item.urlToImage }}
              style={{ height: Dimensions.get('screen').width * 0.77, borderRadius: 10 }} />

            <Text numberOfLines={3} style={{ marginTop: 10, fontSize: 23, fontWeight: '800',color:'black' }}>{item.title }</Text>

            <Text style={{ marginTop: 5, color: Color.primary }}>{item?.source?.name}</Text>
          </TouchableOpacity >
          
        )}
      />
       <View style={{height:1,backgroundColor:'gray',marginTop:10}}></View>
    </View>
  )
}