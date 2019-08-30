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

export const SubmitButtonText = styled.Text`
    color: #fff
    font-size: 20px
`

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
    margin-top: 20px
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
    margin: 0 20px 30px
    
    flex-direction: row
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
    margin-left: 15px
`

export const Rating = styled.Text`
    font-size: 10px
    font-weight: bold
    color: #000
    margin-left: 15px
`

export const GymButton = styled(RectButton)`
    background: #E37144
    width: 100px
    border-radius: 4px
    justify-content: center
    align-items: center
    height: 36px
`

export const GymButtonText = styled.Text`
    color: #fff
`

export const Col1 = styled.View`
`

export const Col2 = styled.View`
    
`