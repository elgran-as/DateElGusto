import { StyleSheet } from 'react-native'
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
<<<<<<< HEAD
=======
          console.log({user});
>>>>>>> 77aa8dc1b75ce4fa9a0eba4af60de805dd490466
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token
          }))
        }
      } catch (error) {
<<<<<<< HEAD
=======
        console.log(error);
>>>>>>> 77aa8dc1b75ce4fa9a0eba4af60de805dd490466
      }
    })()
  }, [])
  return (
    <NavigationContainer>
        {user ? <BottomTabNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})