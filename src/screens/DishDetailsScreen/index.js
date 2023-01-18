import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";


const DishDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1);
    const [dish, setDish] = useState(null);


    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params?.id;

    useEffect(() => {
        if(id) {
            DataStore.query(Dish, id).then(setDish);
        }
    }, [id]);
    console.log(dish);

    const onPress = () => {
        navigation.navigate('Basket', {
            dish: dish,
            quantity: quantity,
        })
        console.warn('Add to basket')
        
    }

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
        
    }
    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    const totalPirce = () => {
        return (dish.price * quantity).toFixed(2)
    }

    if (!dish) {
        return <ActivityIndicator 
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
    }
  return (
    <View style={styles.page}>
      <View style={
        styles.container
      }>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
      </View>
      <View style={styles.separator}/>
      <View style={styles.row}>
        <AntDesign 
            name="minuscircleo"
            size={60}
            color="#000"
            onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
            name="pluscircleo"
            size={60}
            color="#000"
            onPress={onPlus}
        />

      </View>

      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttontext}>
            Add {quantity} {quantity > 1 ? 'items' : 'item'
            } to cart &#8226;
              $ (${totalPirce()})

        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 30,
        
    },
    container: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#d3d3d3',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    quantity: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: '#000',
        marginTop: "auto",
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    buttontext:{
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    }

    
    

})

export default DishDetailsScreen