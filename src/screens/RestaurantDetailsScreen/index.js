import { View, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants'
import { Ionicons } from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem'
import Header from './Header'
import styles from './Styles'
import { useRoute, useNavigation } from '@react-navigation/native'

const restaurant = restaurants[0]
const RestaurantDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;
  console.warn(id)
  return (
    <View style={styles.page}>
        <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>}
            data={restaurant.dishes}
            renderItem={({item}) => <DishListItem dish={item}/>}
            keyExtractor={(item) => item.name}
        />
        <Ionicons style={styles.iconContainer} name="arrow-back-circle" size={45} color="white" 
        onPress={() => navigation.goBack()}/>
        
    </View>
  ) 
}


export default RestaurantDetailsPage