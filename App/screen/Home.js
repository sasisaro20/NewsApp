import { View, Text ,StyleSheet, ScrollView, ActivityIndicator, Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import Headlinelist from '../Components/Home/Headlinelist';
import GlobalApi from '../Service/GlobalApi';


export default function Home() {
  const [newsList ,setNewsList]=useState([])
  const [loading ,setLoading]=useState(true)

  useEffect(()=>{
      // getTopHeadline 
      getNewsByCategory('Latest News') 
  },[])

  const getNewsByCategory= async(category) =>{
    setLoading(true);
    const result=(await GlobalApi.getByCategory(category)).data;
    setNewsList(result.articles)
    setLoading(false)
}

  const getTopHeadline= async() =>{
      const result=(await GlobalApi.getTopHeadline).data;
      setNewsList(result.articles)
  }

  

  return (
    <ScrollView style={{backgroundColor:Color.white}}> 
    
      <View style={{ display:'flex',flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between' }}>
      <Text style={style.appName}>NewsHub</Text>
      </View>
        
        {/* category List */}
        <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>
        {loading?<ActivityIndicator 
        style={{marginTop:Dimensions.get('screen').height*0.40}}   size={'large'} color={Color.primary}/>:
      <View>

         {/* Top Headline Slider */}
        <TopHeadlineSlider newsList={newsList}/>
        {/* Head Line List */}
        <Headlinelist newsList={newsList}/>

        </View>
     
}    
    </ScrollView>
  )
}

const style = StyleSheet.create({
    appName:{
      fontSize:25,
      fontWeight:'bold',
      color: Color.primary,
      backgroundColor:'whitesmoke',
      borderWidth:2,
      borderColor:'#99ebff',
      borderRadius:20,
      marginTop:40,
      padding:10,
      marginLeft:10
    }
})