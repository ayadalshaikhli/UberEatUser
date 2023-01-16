import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import restaurants from "../../../assets/data/restaurants";

const dish = restaurants[0].dishes[0];

const Basket= () => {

  return (
    <View style={styles.page}>
      <Text>
        Ayad
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#d3d3d3",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  quantityContainer:{
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  quantity: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#000",
    marginTop: "auto",
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  buttontext: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default Basket;
