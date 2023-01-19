import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    page:{
        flex: 1,
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 10
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    name: {
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '400',
        color: '#6e6969',
    },
    menutitle: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10,
    },
    container: {
        margin: 10,
    },
    button: {
        backgroundColor: '#000',
        marginTop: "auto",
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    }
})