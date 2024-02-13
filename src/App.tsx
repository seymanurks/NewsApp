import React from "react";
import {
  SafeAreaView, 
  View, 
  Text,
 FlatList 
} from "react-native";
import news_data from "./news_data.json"

const App = () => {
  return(
    <SafeAreaView>
      <View>
        <Text>News App</Text>
        <FlatList 
        data = {news_data}
        renderItem = {({item}) => <Text>{item.title}</Text>}
        />
      </View>
    </SafeAreaView>
  )
}

export default App;