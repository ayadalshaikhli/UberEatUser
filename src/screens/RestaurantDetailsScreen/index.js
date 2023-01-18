import { View, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem'
import Header from './Header'
import styles from './Styles'
import { useRoute, useNavigation } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Restaurant, Dish } from '../../models'

const RestaurantDetailsPage = () => { 
  const [restaurant, setRestaurant] = useState(null)
  const [dishes, setDishes] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
 
  
  useEffect(() => {
    if (!id) {
      return;
    }
    DataStore.query(Restaurant, id).then(setRestaurant)
    DataStore.query(Dish, (dish) => dish.restaurantID.eq(id)
    ).then(
      setDishes
    );
    
  },[
    id
  ])

  if (!restaurant) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  console.log(dishes)
  return (
    <View style={styles.page}>
        <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>}
            data={dishes}
            renderItem={({item}) => <DishListItem dish={item}/>}
            keyExtractor={(item) => item.name}
        />
        <Ionicons style={styles.iconContainer} name="arrow-back-circle" size={45} color="white" 
        onPress={() => navigation.goBack()}/>
        
    </View>
  ) 
}


export default RestaurantDetailsPage