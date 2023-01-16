import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import orders from "../../../assets/data/orders.json"
import restaurants from "../../../assets/data/restaurants.json"
import styles from "./Styles"
import DishListItem from '../../components/DishListItem';
import BasketDishItem from '../../components/BasketListItem'
const order = orders[0];

const OrderDetailsHeader = () => {
    console.log(order)
  return (
    <View style={styles.page}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.subtitle}>
           {order.status} &#8226; 2 days ago
        </Text>
        <Text style={styles.menutitle}>Your orders</Text>
      </View>
    </View>
  )
}

const OrderDetails = () => {
    return (
       <FlatList
         ListHeaderComponent={<OrderDetailsHeader />}
         data={restaurants[0].dishes}
         renderItem={({ item }) => <BasketDishItem basketDish={item} />}
         />
    )

}

export default OrderDetails