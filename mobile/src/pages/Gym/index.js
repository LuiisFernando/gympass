import React, { Component, useState, useEffect } from 'react'

import { 
    Information
} from './styles'

export default class Gym extends Component {

    componentDidMount() {
        const id = this.props.navigation.getParam('gym')

        console.log(id)
    }

    render() {
        return (
            <Information />
        )
    }
}

Gym.navigationOptions = {
    title: 'Academia'
}