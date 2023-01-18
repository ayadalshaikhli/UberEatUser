import { View, Text, Image } from "react-native";
import styles from "./Styles";

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: restaurant.image && restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE
        }}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {(restaurant.deliveryFee || 0).toFixed(1)} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menutitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;