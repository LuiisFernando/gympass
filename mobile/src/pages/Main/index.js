import React, { Component, useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { 
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    Loading,
    Gym,
    Avatar,
    Title,
    Col1,
    Col2,
    GymContainer,
    Rating
} from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'

import api from '../../services/api'

export default function Main ({ navigation }) {
    const [gyms, setGyms] = useState([])
    const [loading, setLoading] = useState(false)

    async function loadGym(pageNumber = 1) {
        setLoading(true)

        const gyms = await api.get('gyms')
        
        setGyms(gyms.data)

        setLoading(false)
    }

    useEffect(() => {
        loadGym()
    }, [])



    function handleNavigation(gym) {
        navigation.navigate('Gym', { gym })
    }

    function handleRating(academia) {
        const rating = Math.round(academia.rating * 100) / 100
        const starArray = []
        console.log(rating)
        for (let i = 1; i <= rating; i++) {
            
            starArray.push(<Icon key={`${academia.id + i}`} name="star" size={15} />)
            
        }
            
        if (starArray.length < 5) {
            for (let i = starArray.length; i < 5; i++) {
                starArray.push(<Icon key={`${academia.id + i + 1}`} name="star-border" size={15} />)                
            }
        }

        return starArray
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
                    {/* <SubmitButtonText>+</SubmitButtonText> */}
                    <Icon name='add' size={20} color='#FFF' />
                </SubmitButton>
            </Form>

            <List
            
            data={gyms}
            keyExtractor={academia => String(academia.id)}
            ListFooterComponent={loading && <Loading />}
            renderItem={({ item }) => (
                <Gym onPress={() => {handleNavigation(item)}}>
                    <GymContainer>
                        <Col1>
                            <Avatar source={{ uri: item.logo }} />
                        </Col1>

                        <Col2>
                            <Title>{item.title}</Title>
                            
                            <Rating>
                                {handleRating(item)}
                            </Rating>
                        </Col2>
                    </GymContainer>
                    
                </Gym>
            )}
        />
            
            

        </Container>
    )  
    
}

Main.navigationOptions = {
    title: 'Gympass'
}