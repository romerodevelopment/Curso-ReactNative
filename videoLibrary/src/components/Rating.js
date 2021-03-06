import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
    starContaner: {
        marginVertical: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        padding: 5,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#95a5a6',
    },
})

export default class Rating extends Component {
    constructor(props){
        super(props)
        
        Icon.loadFont();
    }

    render() {
        const { star, starCount, ratingPress, starRating, heart, like } = this.props;

        if(star){
            //Metodo map para iterar y traer el componente segun el star count
            const arrayStar = Array
                .from({length: starCount})
                .map((_,index) => (
                    <TouchableOpacity
                        key={`star-${index}`}
                        onPress={() => {ratingPress(++index)}}
                    >
                        <Icon 
                        name="star" 
                        size={30} 
                        color={index < starRating ? '#f1c40f' : '#95a5a6' }/>
                    </TouchableOpacity>
                ))

            return (
                <View style={styles.starContaner}>
                    {arrayStar}
                </View>
            )            
        }

        if(heart){
            return(
                <TouchableOpacity style={styles.heart} onPress={() => ratingPress()}>
                    <Icon name="heart" size={30} color={like ? "#e74c3c" : "#95a5a6"}/>
                </TouchableOpacity>
            )
        }
        return null;

    }
}
