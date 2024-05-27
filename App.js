<<<<<<< HEAD
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native"
=======
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native"
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
import { colors } from "./src/constants/colors"
import { useFonts } from "expo-font"
import Navigator from "./src/navigation/Navigator"
import { Provider } from "react-redux"
import store from "./src/store"
<<<<<<< HEAD
import { dropSessionsTable, initSQLiteDB, truncateSessionsTable } from "./src/persistence"

(async ()=> {
    try {
        if (Platform.OS !== 'web') {
            const response = await initSQLiteDB()
        }
    } catch (error) {
    }
})()



const App = () => {
    const [fontsLoaded, fontError] = useFonts({
        Josefin: require("./assets/JosefinSans-Regular.ttf"),
    })

    if (!fontsLoaded || fontError) {
        return null
    }

    if (fontsLoaded && !fontError) {
        return (
            <SafeAreaView style={styles.container}>
                <Provider store={store}>
                    <Navigator />
                </Provider>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        // alignItems: "center",
        backgroundColor: colors.teal200,
    },
=======

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })

  if (!fontsLoaded || fontError) {
    return null
  }

  if (fontsLoaded && !fontError) {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Navigator/>
        </Provider>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    // alignItems: "center",
    backgroundColor: colors.teal200,
  },
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
})

export default App
