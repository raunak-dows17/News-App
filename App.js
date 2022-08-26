import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import All from "./screens/All";
import Business from "./screens/Business";
import Health from "./screens/Health";
import Sports from "./screens/Sports";
import Tech from "./screens/Tech";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

function App() {
  const scheme = "dark";

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Today's News"
          component={All}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name="home" color={props.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Today's Business"
          component={Business}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name="dollar-sign" color={props.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Today's Health"
          component={Health}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name="heart" color={props.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Today's Sports"
          component={Sports}
          options={{
            tabBarIcon: (props) => (
              <Icon
                type="ionicon"
                name="tennisball-outline"
                color={props.color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Today's Tech"
          component={Tech}
          options={{
            tabBarIcon: (props) => (
              <Icon type="ionicon" name="hardware-chip-outline" color={props.color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;
