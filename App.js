// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';
// //
// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }
// //
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
//
//
// import React from 'react';
// import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
//
// const App = () => {
//   return (
//       <>
//           <View style={styles.container1}>
//               <Text style={{ fontWeight: '600', fontSize: 25, color: '#ffffff' }}>
//                   Hello world!!!!!
//               </Text>
//               <Image
//                   source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
//                   style={{ width: 100, height: 100 }}
//               />
//               <TextInput
//                 style={styles.inputStyle}
//                 defaultValue={"You can do it!!!"}
//               />
//
//           </View>
//           <View style={styles.container2}>
//             <Text style={{ fontWeight: '600', fontSize: 25, color: '#ffffff' }}>
//                 Hello world!!!!!
//             </Text>
//           </View>
//       </>
//   );
// };
//
// const styles = StyleSheet.create({
//     container1: {
//         flex: 1,
//         backgroundColor: 'red',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     container2: {
//         flex: 1,
//         backgroundColor: 'blue',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     inputStyle: {
//         height: 45,
//         borderColor: 'gray',
//         borderWidth: 1.5
//     }
//
// })
//
//
// export default App;

import React from 'react';

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Profile, Alarm, Chat } from "./screens"

const Tab = createBottomTabNavigator();



const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={"Home"} component={Home} />
                <Tab.Screen name={"Chat"} component={Chat} />
                <Tab.Screen name={"Alarm"} component={Alarm} />
                <Tab.Screen name={"Profile"} component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;


