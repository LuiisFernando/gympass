import React, { Component, useState, useEffect } from 'react'

import { 
    Container,
    Form,
    Input,
    SubmitButton,
    SubmitButtonText,
    List,
    Loading,
    Gym,
    Avatar,
    Title,
    GymButton,
    GymButtonText,
    Col1,
    Col2
} from './styles'

import api from '../../services/api'

export default function Main ({ navigation }) {
    const [gyms, setGyms] = useState([])
    const [loading, setLoading] = useState(false)

    async function loadGym(pageNumber = 1) {
        setLoading(true)

        const gyms = await api.get('gyms')

        setGyms(gyms.data)

        setLoading(false)

        console.log(gyms)
    }

    useEffect(() => {
        loadGym()
    }, [])



    function handleNavigation(gym) {
        navigation.navigate('Gym', { gym })
    }




    return (
        <Container>
            <Form>
                <Input 
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="bucar academia"
                />

                <SubmitButton>
                    <SubmitButtonText>+</SubmitButtonText>
                </SubmitButton>
            </Form>

            <List 
            data={gyms}
            keyExtractor={academia => String(academia.id)}
            ListFooterComponent={loading && <Loading />}
            renderItem={({ item }) => (
                <Gym>
                    <Col1>
                        <Avatar source={{ uri: item.logo }} />
                    </Col1>

                    <Col2>
                        <Title>{item.title}</Title>

                        <GymButton onPress={() => {handleNavigation(item)}}>
                            <GymButtonText>
                                Ver academia
                            </GymButtonText>
                        </GymButton>
                    </Col2>
                </Gym>
            )}
        />
            
            

        </Container>
    )  
    
}

Main.navigationOptions = {
    title: 'Gympass'
}