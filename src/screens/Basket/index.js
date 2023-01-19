import { View, Text, StyleSheet, FlatList, } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import BasketDishItem from "../../components/BasketListItem";
import { useNavigation } from "@react-navigation/native";
import { useBasketContext } from "../../contexts/BasketContext";




const Basket = () => {
  const [quantity, setQuantity] = useState(0);
  const navigation = useNavigation();
  const getTotal = () => {
    return (quantity * dish.price).toFixed(2);
  };
  const { restaurant, basketDishes, totalPrice } = useBasketContext();



  return (
    <View style={styles.page}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={{ fontWeight: "bold", marginTop: 20, fontSize:19}}>Your Items</Text>
        <FlatList
            data={basketDishes}
            renderItem={({ item }) => <BasketDishItem basketDish={item} />}
            keyExtractor={(item) => item.id}
        />
      <View style={styles.separator} />
  

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order &#8226; ${totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
    color: "#525252",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 5,
    borderRadius: 3,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default Basket;
