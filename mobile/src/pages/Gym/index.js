import React, { useState, useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { 
    Container,
    Avatar,
    GymContainer,
    MapContainer
} from './styles'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'


export default function Gym({ navigation })  {
    const [gym, setGym] = useState(null)


    function loadGym() {
        const gym = navigation.getParam('gym')
        
        gym.location.latitudeDelta = 0.006
        gym.location.longitudeDelta = 0.006

        setGym(gym)
    }

    useEffect(() => {
        loadGym()
    }, [])

    
    return (
        // (
        //     gym && 
        //     <Container>
        //         <Avatar source={{ uri: gym.logo }} />
        //     </Container>
        // )
        (
            
            gym &&
                <Container>
                    <GymContainer>
                        <Text>gym</Text>
                    </GymContainer>
                    <MapContainer>

                        <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation={true}
                        loadingEnabled={true}
                        initialRegion={gym.location}
                        ref={ref => {
                        this.mapView = ref;
                        }}
                        ></MapView>
                    </MapContainer>
                </Container>
        )
        
    )
    
}

Gym.navigationOptions = {
    title: 'Academia'
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    }
});