import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { 
    Container,
    GymContainer,
    MapContainer,
    Title,
    Logo,
    Address,
    InformationContainer,
    ActivitiesContainer,
    ActivityContainer,
    ActivityTitle,
    ActivityText,
    List,
    ActivityButton
} from './styles'

import Icon from 'react-native-vector-icons/Entypo'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import markerImage from '../../assets/marker.png'
import api from '../../services/api'


export default function Gym({ navigation })  {
    const [gym, setGym] = useState(null)
    const [region, setRegion] = useState(null)
    const [loading, setLoading] = useState(false)

    function loadGym() {
        const gym = navigation.getParam('gym')
        handleLocation(gym)
        setGym(gym)
        console.log(gym.activities)
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

    function handleMarkAppointment(gymID, activity) {
        Alert.alert('Marcar horario', `Deseja realemente marcar um horario na atividade ${activity.title} ?`, [
            {
                text: 'Não',
                onPress: () => {}
            }, {
                text: 'Sim',
                onPress: async () => {
                    try {
                        setLoading(true)
                    
                        const data = {
                            gymId: gymID,
                            activityId: activity.id
                        }
    
                        const retorno = await api.post('/checkin', data)

                        const { gym, checkinStatus } = retorno.data
                        
                        Alert.alert(checkinStatus, `checkin completo na academia ${gym.title} atividade ${gym.activity.title}`)
    
                        setLoading(false)
                    } catch {
                        Alert.alert('Ocorreu um erro ao fazer checkin na academia')
                        setLoading(false)
                    }
                    

                }
            }
        ])
    }

    function refreshList() {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)        
        }, 3000);

    }

    useEffect(() => {
        loadGym()

        return () => { console.log('vai sair') }

    }, [])

    
    return (
        (
            gym &&
                <Container>
                    <GymContainer>
                        <InformationContainer>
                            <Logo source={{ uri: gym.logo}} />
                            <Title>{gym.title}</Title>
                            <Address><Icon name="address" size={30} /> {gym.address}</Address>
                        </InformationContainer>

                        <ActivitiesContainer>
                            <ActivityTitle>Selecione uma atividade para marcar a hora</ActivityTitle>
                            <List
                                data={gym.activities}
                                keyExtractor={activity => String(activity.id)}
                                onRefresh={refreshList}
                                refreshing={loading}
                                renderItem={({ item }) => (
                                    <ActivityButton onPress={() => {handleMarkAppointment(gym.id, item)}}>
                                        <ActivityContainer>
                                            <ActivityText>{item.title}</ActivityText>
                                        </ActivityContainer>
                                    </ActivityButton>
                                )}
                            />
                            

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