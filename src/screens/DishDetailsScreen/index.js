import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import restaurants from "../../../assets/data/restaurants";
import { AntDesign } from '@expo/vector-icons'

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
    const [quantity, setQuantity] = useState(0);

    const onMinus = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
        
    }
    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    const totalPirce = () => {
        return (dish.price * quantity).toFixed(2)
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

      <View style={styles.button}>
        <Text style={styles.buttontext}>
            Add {quantity} {quantity > 1 ? 'items' : 'item'
            } to cart &#8226;
              $ (${totalPirce()})

        </Text>
      </View>
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