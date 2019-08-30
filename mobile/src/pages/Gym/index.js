import React, { useState, useEffect } from 'react'

import { 
    Container,
    Avatar
} from './styles'

export default function Gym({ navigation })  {
    const [gym, setGym] = useState(null)


    function loadGym() {
        const gym = navigation.getParam('gym')
        console.log(gym)
        setGym(gym)
    }

    useEffect(() => {
        loadGym()
    }, [])

    
    return (
        (
            gym && 
            <Container>
                <Avatar source={{ uri: gym.logo }} />
            </Container>
        )
        
    )
    
}

Gym.navigationOptions = {
    title: 'Academia'
}