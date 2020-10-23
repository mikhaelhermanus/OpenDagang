import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerDash: {
        borderRadius: 10,
        paddingRight: 10,
        paddingTop: 10,
        marginBottom: 10,
        // backgroundColor: 'white',
        width: responsiveWidth(40),
        paddingBottom: 10,
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderWidth: 4, borderColor: Colors.grayTransparant,
        alignItems: 'center'
    },
})
