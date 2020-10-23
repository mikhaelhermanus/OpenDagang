import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {
    responsiveFontSize,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Header, Left, Right, Body, Title, Col } from 'native-base';
import { Colors, Metrics } from '../Themes';

const HeaderApp = ({ onPress, title }) => {
    return (
        <View>
            <Header
                style={{
                    backgroundColor: 'white',
                    shadowOffset: { height: 0, width: 0 },
                    shadowOpacity: 0,
                    borderColor: 'white',
                    elevation: 0,
                }}
            >
                <Left>
                    <TouchableOpacity onPress={onPress}>
                        <Image style={styles.IconArrow} source={require('../Images/icon/left-arrow.png')} />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title style={styles.titleHeader}>{title}</Title>
                </Body>
                <Right />
            </Header>
        </View>
    );
};


const styles = StyleSheet.create({
    titleHeader: {
        color: '#000',
        justifyContent: 'center',
        fontSize: responsiveFontSize(2.33),
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
    },
    IconArrow: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        fontWeight: 'bold',
        color: '#000',
    },
});

export default HeaderApp;