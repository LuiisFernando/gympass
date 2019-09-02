import React, {  useState, useEffect } from 'react'

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
    Col3,
    GymContainer,
    Rating,
    RatingText,
    RatingStar
} from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'

import api from '../../services/api'

export default function Main ({ navigation }) {
    const [page, setPage] = useState(1)
    const [gyms, setGyms] = useState([])
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)



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

        for (let i = 1; i <= rating; i++) {
            
            starArray.push(<Icon key={`${academia.id + i}`} name="star" size={15} color="#ffdd78" />)
            
        }
            
        if (starArray.length < 5) {
            for (let i = starArray.length; i < 5; i++) {
                starArray.push(<Icon key={`${academia.id + i + 1}`} name="star-border" size={15} color="#ffdd78" />)               
            }
        }

        const rest = rating % 1

        if (rest > 0) {
            starArray.pop()
            starArray.push(<Icon key={`${academia.id + rest + 1}`} name="star-half" size={15} color="#ffdd78" />)
        }

        return starArray
    }

    function refreshList() {
        setRefreshing(true)

        setRefreshing(false)
    }

    return (
        <Container>
            {/* <Form>
                <Input 
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="buscar academia"
                />

                <SubmitButton>
                    <Icon name='add' size={20} color='#FFF' />
                </SubmitButton>
            </Form> */}

            <List
                data={gyms}
                keyExtractor={academia => String(academia.id)}
                onEndReached={() => loadGym()}
                ListFooterComponent={loading && <Loading />}
                onRefresh={refreshList}
                refreshing={refreshing}
                renderItem={({ item }) => (
                    <Gym onPress={() => {handleNavigation(item)}}>
                        <GymContainer>
                            <Col1>
                                <Avatar source={{ uri: item.logo }} />
                            </Col1>

                            <Col2>
                                <Title>{item.title}</Title>
                            </Col2>

                            <Col3>
                                <Rating>
                                    <RatingText>{Math.round( item.rating * 10) / 10}</RatingText>
                                    <RatingStar>{handleRating(item)}</RatingStar>
                                </Rating>
                            </Col3>
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