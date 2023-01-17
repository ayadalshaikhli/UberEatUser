import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import RestaurantItem from '../../components/RestaurantItem'
// import restaurants from '../../../assets/data/restaurants.json'
import { DataStore } from 'aws-amplify'
import { Restaurant } from '../../models'



const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([])


  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants)
  },[])

  return (
    <View style={styles.page}>
        <FlatList
            data={restaurants}
            renderItem={({item}) => <RestaurantItem restaurant={item}/>}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,

    },
})
export default HomeScreen