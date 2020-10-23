import React, { Component } from 'react'
import { ScrollView, Text, SafeAreaView, View, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import style from './TopProduct.style';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import HeaderApp from '../../Components/HeaderApp';
import NavigationServices from '../../Services/NavigationServices'
import { Images } from '../../Themes'

class TopProductAll extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderProductList() {
        const Product = [
            {
                ProductName: 'Kursi Kayu',
                ProductDesc: 'Terbuat dari Kayu',
                price: 'Rp. 125.000'
            },
            {
                ProductName: 'Baju',
                ProductDesc: 'Terbuat dari Kayu',
                price: 'Rp. 125.000'
            },
            {
                ProductName: 'Celana',
                ProductDesc: 'Terbuat dari Kayu',
                price: 'Rp. 125.000'
            },
            {
                ProductName: 'Kaos',
                ProductDesc: 'Terbuat dari Kayu',
                price: 'Rp. 125.000'
            },
            {
                ProductName: 'Meja',
                ProductDesc: 'Terbuat dari Kayu',
                price: 'Rp. 125.000'
            },
            {
                ProductName: 'Seterika',
                ProductDesc: 'Terbuat dari Kayu',
                price: 'Rp. 125.000'
            },

        ]

        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <FlatList
                    data={Product}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: 10 }}
                    renderItem={({ item }) => (
                        <View style={style.containerDash}>
                            <Image style={{ height: 125, width: 100 }} source={require('../../Images/top-product1.png')}></Image>
                            <Text>{item.ProductName}</Text>
                            <Text>{item.ProductDesc}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.price}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                />

            </View>
        )
    }

    render() {
        return (
            <View style={style.container}>
                <HeaderApp
                    title={'Top Product'}
                    onPress={() => NavigationServices.navigate('Home')}
                />
                {this.renderProductList()}
            </View>

        )
    }
}

export default TopProductAll