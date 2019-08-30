import { createAppContainer, createStackNavigator } from 'react-navigation'

import Main from './pages/Main'
import Gym from './pages/Gym'

export default createAppContainer(
    createStackNavigator({
        Main,
        Gym
    },
    {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#E37144',
            },
            headerTintColor: '#FFF'
        }
    })
)