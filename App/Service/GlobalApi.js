import { create } from "apisauce"


const api = create({
    baseURL: 'https://newsapi.org/v2',
  })
  const apiKey = '?country=us&apiKey=6fbaaf72b3cb46508f5bca7887a29447'
  
  const getTopHeadline = api.get ('/top-headlines'+apiKey)
  const getByCategory =(category)=>api.get('/everything?q='+category+"&apiKey=6fbaaf72b3cb46508f5bca7887a29447")
  
  export default{
    getTopHeadline,
    getByCategory

  }
  
  //top-headlines?country=us&apiKey=6fbaaf72b3cb46508f5bca7887a29447