import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Basket from "../screens/Basket";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import OrderDetails from "../screens/OrderDetails";
import OrderScreen from "../screens/OrderScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuthContext } from "../contexts/AuthContext";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { dbUser} = useAuthContext();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {dbUser ? (
              <Stack.Screen name="HomeTabs" component={HomeTabs} />

      ) : (
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      )}
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={{headerShown:false}}
    barStyle={{ backgroundColor: 'white'}} >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
            <HomeStack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen}/>
            <HomeStack.Screen name="DishDetails" component={DishDetailsScreen}/>
            <HomeStack.Screen name="Basket" component={Basket}/>
        </HomeStack.Navigator>
    )
}

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator screenOptions={{headerShown:false}}>
            <OrderStack.Screen name="OrderScreen" component={OrderScreen}/>
            <OrderStack.Screen name="OrderDetails" component={OrderDetails}/>
        </OrderStack.Navigator>
    )
}



export default RootNavigator;
