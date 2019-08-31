import React, { useState, useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { 
    Container,
    Avatar,
    GymContainer,
    MapContainer,
    ActivitiesContainer
} from './styles'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import markerImage from '../../assets/marker.png'


export default function Gym({ navigation })  {
    const [gym, setGym] = useState(null)
    const [region, setRegion] = useState(null)

    function loadGym() {
        const gym = navigation.getParam('gym')
        handleLocation(gym)
        setGym(gym)
    }

    function handleLocation(academia) {
        const { latitude, longitude } = academia.location
        
        const region = {
            latitude,
            longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
        }

        setRegion(region)
    }

    useEffect(() => {
        loadGym()

        return () => { console.log('vai sair') }

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

                        <ActivitiesContainer>

                        </ActivitiesContainer>

                    </GymContainer>

                    <MapContainer>

                        <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation={true}
                        loadingEnabled={true}
                        initialRegion={region}
                        ref={ref => {
                        this.mapView = ref;
                        }}
                        >

                            <Marker coordinate={gym.location} anchor={{ x: 0, y: 0 }} image={markerImage} />

                        </MapView>
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