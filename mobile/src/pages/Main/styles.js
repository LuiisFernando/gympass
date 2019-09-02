import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1
    padding: 30px 0
`

export const Form = styled.View`
    flex-direction: row
    padding-bottom: 20px
    border-bottom-width: 1px
    border-color: #eee
    padding: 30px 20px
    
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999'
})`
    flex: 1
    height: 40px
    background: #eee
    border-radius: 4px
    padding: 0 15px
    border: 1px solid #eee
`

export const SubmitButton = styled(RectButton)`
    justify-content: center
    align-items: center
    background: #E37144
    border-radius: 4px
    margin-left: 10px
    padding: 0 10px
`


export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
    
    
    height: 100%
    
`

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    clor: '#999'
})`
    margin: 30px 0
`

export const Gym = styled.TouchableWithoutFeedback`
  
`

export const GymContainer = styled.View`
    
    height: 90px
    padding-left: 20px
    border-bottom-width: 1px
    border-color: #eee
    flex-direction: row
    align-items: center
`

export const Avatar = styled.Image`
    width: 64px
    height: 64px
    border-radius: 32px
    background: #eee
`

export const Title = styled.Text`
    font-size: 15px
    color: #333
    font-weight: bold
    margin-top: 15px
    margin-left: 10px
`

export const Rating = styled.View`
    justify-content: center
    align-items: center
`

export const RatingStar = styled.View`
    flex-direction: row
`

export const RatingText = styled.Text`
    font-size: 35px
    font-weight: bold
`

export const Col1 = styled.View`
    width: 20%
`

export const Col2 = styled.View`
    width: 50%
`

export const Col3 = styled.View`
    flex-direction: column
    width: 30%
`