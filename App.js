import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Date el gusto</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const createBottomTabNavigator = () => {
  Navigation.registerComponent('ZapatillasScreen', () => ZapatillasScreen);
  Navigation.registerComponent('RopaScreen', () => RopaScreen);
  Navigation.registerComponent('AccesoriosScreen', () => AccesoriosScreen);

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: 'ZapatillasScreen',
            },
            icon: require('./assets/zapatillas.png'),
            label: 'Zapatillas',
          },
          {
            component: {
              name: 'RopaScreen',
            },
            icon: require('../assets/ropa.png'),
            label: 'Ropa',
          },
          {
            component: {
              name: 'AccesoriosScreen',
            },
            icon: require('../assets/accesorios.png'),
            label: 'Accesorios',
          },
        ],
      },
    },
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
