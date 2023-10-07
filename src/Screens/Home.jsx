import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Home = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#212121CC",
        padding: 13,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "PostsScreen") {
            return (
              <View>
                <AntDesign
                  name="plus"
                  size={size}
                  color={focused ? "#FFFFFF" : "#212121CC"}
                  style={
                    focused
                      ? {
                          backgroundColor: "#FF6C00",
                          display: "flex",
                          padding: "13px 25px",
                        }
                      : null
                  }
                />
              </View>
            );
          } else if (route.name === "CreatePostsScreen") {
            return (
              <View style={focused ? { backgroundColor: "#FF6C00" } : null}>
                <AntDesign name="appstore-o" size={size} color={color} />
              </View>
            );
          } else if (route.name === "ProfileScreen") {
            return (
              <View style={focused ? { backgroundColor: "#FF6C00" } : null}>
                <Feather name="user" size={24} color="black" />
              </View>
            );
          }
        },
      })}
    >
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: "",
          tabBarShowLabel: false,
          headerTitle: "Ім'я юзера",
          headerTitleAlign: "center",
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
