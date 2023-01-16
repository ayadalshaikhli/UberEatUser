import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();
  console.log(dish);
  const onPress = () => {
    console.warn("Dish pressed");
    navigation.navigate("DishDetails", { id: dish.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={{flex:1}}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      <View>
        {
            dish.image && (
                <Image style={styles.image} source={{uri: dish.image}}/>
            )
        }
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    marginVertical: 5,
    color: "#6e6969",
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fc5c65",
  },
  image: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 15,
    resizeMode: "cover",
  },
});

export default DishListItem;
