import { StyleSheet } from 'react-native'
<<<<<<< HEAD
import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from '../persistence'
import { setUser } from '../features/User/userSlice'

const Navigator = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth.value)

  useEffect(()=> {
    (async ()=> {
      try {
        const response = await getSession()
        if (response.rows._array.length) {
          const user = response.rows._array[0]
          console.log({user});
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token
          }))
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])
=======
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen'
import AuthStackNavigator from './AuthStackNavigator'
import { useSelector } from 'react-redux'

const Navigator = () => {

  const {user} = useSelector(state => state.auth.value)
>>>>>>> 7430ad11cd450a5776989bbcdab77068bc9e8779
  return (
    <NavigationContainer>
        {user ? <BottomTabNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})