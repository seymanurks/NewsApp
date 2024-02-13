import React from "react";
import {
  SafeAreaView, 
  View, 
  Text,
 FlatList, 
 ScrollView,
 StyleSheet,
 Image,
 Dimensions
} from "react-native";
import news_data from "./news_data.json"
import NewsCard from "./components/NewsCard";
import news_banner_data from "./news_banner_data.json"

const App = () => {

  const renderNews = ({item}) => <NewsCard news = {item}/>

  return(
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.title}>News</Text>
        <FlatList 
        ListHeaderComponent = {() =>  <ScrollView 
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          >
            {news_banner_data.map(bannerNews => 
            <Image 
            style = {styles.banner_image}
            source= {{uri:bannerNews.imageUrl}}/>)}
          </ScrollView>}
        data = {news_data}
        renderItem = {renderNews}
        keyExtractor = {(item, index) => item.u_id.toString()}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
  banner_image: {
    height: Dimensions.get("window").height / 5,
    width:  Dimensions.get("window").width 
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10
  }
})

export default App;