import { StyleSheet } from 'react-native';

export const colors = {
    bgMain: '#90cea1',
    bgFooter: '#0d253f',
    bgTextInput: '#FFF',
    borderColor: '#000',
    iconColor: '#000',
    textColorDefault: '#0d253f',
    textColorFooter: '#fff',
    textInputPlaceholder: '#aaa',
};

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.bgMain,
        flex: 6,
        justifyContent: 'flex-start',
    },
    header: {
        alignItems: 'center',
        flex: 1,
        paddingTop: 15,
    },
    largeText: {
        color: colors.textColorDefault,
        fontFamily: 'Rubik',
        fontSize: 40,
    },
    headerImage: {
        margin: 0,
        height: 100,
        padding: 0,
        marginBottom: -20,
        width: 100,
    },
    mainSection: {
        flex: 3,
    },
    textInput: {
        backgroundColor: colors.bgTextInput,
        fontFamily: 'Roboto',
        fontSize: 24,
        height: 40,
        paddingLeft: 5,
        width: 275,
    },
    searchBar: {
        backgroundColor: colors.bgTextInput,
        borderRadius: 25,
        borderColor: colors.borderColor,
        borderWidth: 1,
        flexDirection: 'row',
        height: 50,
        marginTop: 10,
        paddingLeft: 10,
        paddingVertical: 5,
        width: 350,
    },
    footer: {
        alignItems: 'center',
        backgroundColor: colors.bgFooter,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        maxHeight: 75,
        padding: 10,
        width: '100%',
    },
    footerText: {
        color: colors.textColorFooter,
        fontFamily: 'Roboto',
        fontSize: 14,
        flex: 2,
        marginLeft: 25,
    },
    movieCard: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        width: 330,
    },
    googleLogo: {
        height: 40,
        width: 40,
    },
    defaultText: {
        color: colors.textColorDefault,
        fontFamily: 'Roboto',
        fontSize: 20,
    },
    dataBlock1: {
        alignItems: 'center',
        flexDirection: 'row',
        justifySelf: 'flex-start',
    },
    dataBlock2: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'RobotoBold',
        maxWidth: 150,
    },
    year: {
        fontFamily: 'RobotoItalic',
    },
    notFoundText: {
        margin: 10,
    },
    rating: {
        color: colors.textColorDefault,
        fontFamily: 'Roboto',
        fontSize: 30,
        margin: 15,
        marginTop: 0,
    },
    ratingLabel: {
        fontFamily: 'RobotoBold',
        fontSize: 16,
    },
    badRating: {
        color: '#f00',
    },
    poster: {
        height: 75,
        margin: 5,
        width: 50,
    },
    modal: {
        backgroundColor: '#fff',
        borderColor: colors.borderColor,
        borderRadius: 10,
        borderWidth: 2,
        maxHeight: 500,
        padding: 10,
        width: 350,
    },
    closeIcon: {
        marginLeft: 290,
    },
    posterLarge: {
        alignSelf: 'center',
        height: 400,
        width: 300,
    },
});
