import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1
    
`

export const GymContainer = styled.View`
    flex: 4
`

export const InformationContainer = styled.View`
    flex: 1
    padding: 20px 0
`

export const Title = styled.Text`
    font-size: 20px
    font-weight: bold
    align-self: center
    
`

export const Address = styled.Text`
    font-size: 15px
    padding-left: 10px
    
`

export const Logo = styled.Image`
    width: 60px
    height: 60px
    border-radius: 30px
    background: #eee
    align-self: center
`

export const ActivitiesContainer = styled.View`
    flex: 2
    border-color: #eee
    padding-top: 40px
`

export const ActivityContainer = styled.View`
    height: 50px
    padding-left: 20px
    border-bottom-width: 1px
    border-color: #eee
    flex-direction: row
    align-items: center
`

export const ActivityButton = styled.TouchableWithoutFeedback`
    height: 100%
`

export const ActivityTitle = styled.Text`
    font-size: 20px
    font-weight: bold
    align-self: center
    padding-bottom: 20px
`

export const ActivityText = styled.Text`
    font-size: 13px
    font-weight: bold
`

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`    
    height: 100%
`

export const MapContainer = styled.View`
    flex: 2
`