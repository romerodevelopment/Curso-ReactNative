import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/Button';
import colors from '../config/colors'


const styles = StyleSheet.create({
    container: {
        backgroundColor:  colors.gray,
        flex: 1,
    },
    header: {
        height: 200,
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    }
})

const Menu = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            <Button 
                onPress={()=>{navigation.navigate("Menu")}}
                text="Menu"
            />
            <Button 
                onPress={()=>{navigation.navigate('UseState')}}
                text="useState"
                icon={
                <MaterialCommunityIcons name="home" color={colors.black} size={20}/>}
            />
            <Button 
                onPress={()=>{navigation.navigate('UseCallback')}}
                text="useCallback"
                icon={
                <MaterialIcon name="pets" color={colors.black} size={20}/>}
            />
            <Button 
                onPress={()=>{navigation.navigate('UseMemo')}}
                text="useMemo"
                icon={
                <MaterialCommunityIcons name="gamepad-square" color={colors.black} size={20}/>}
            />

        </View>
    )
}

export default Menu;