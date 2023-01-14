import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const RestaurantItem = ({restaurant}) => {
    return (
        <View style={styles.restaurantContainer}>
            <Image
                source={{
                    uri: restaurant.image.startsWith("http")
                        ? restaurant.image
                        : DEFAULT_IMAGE,
                }}
                style={styles.image}
            />
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>
                        $ {restaurant.deliveryFee.toFixed(1)} &#8226;{" "}
                        {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
                    </Text>
                </View>

                <View style={styles.rating}>
                    <Text>{restaurant.rating.toFixed(1)}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    restaurantContainer: {
        width: "100%",
        marginVertical: 10,
      },
      image: {
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 5,
      },
      title: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
      },
      subtitle: {
        color: "grey",
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
      },
      rating: {
        marginLeft: "auto",
        backgroundColor: "lightgray",
        width: 30,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
      },
})

export default RestaurantItem