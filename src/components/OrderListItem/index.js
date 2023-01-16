import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import {useNavigation} from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("OrderDetails", { order: order });
  };

  return (
    <Pressable onPress={onPress} style={{ flexDirection: "row", margin: 10, alignItems: "center" }}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 5 }}
      />
      <View>
        <Text style={{fontWeight: "600", fontSize: 16}}>{order.Restaurant.name}</Text>
        <Text style={{marginVertical: 5}}>3 Items &#8226; $34.42</Text>
        <Text style={{marginVertical: 5}}>{order.status}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrderListItem;
