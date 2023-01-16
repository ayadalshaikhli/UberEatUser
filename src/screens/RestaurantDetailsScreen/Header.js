import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import styles from "./Styles";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} min
        </Text>
        <Text style={styles.menutitle}>Menu Title</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
