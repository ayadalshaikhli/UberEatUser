import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants'
import { Ionicons } from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem'
import Header from './Header'
import styles from './Styles'
const restaurant = restaurants[0]
const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
        <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>}
            data={restaurant.dishes}
            renderItem={({item}) => <DishListItem dish={item}/>}
            keyExtractor={(item) => item.id}
        />
        <Ionicons style={styles.iconContainer} name="arrow-back-circle" size={45} color="white" />
    </View>
  ) 
}


export default RestaurantDetailsPage