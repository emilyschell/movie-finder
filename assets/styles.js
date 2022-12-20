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
        fontSize: 50,
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
    footer: {
        alignItems: 'center',
        backgroundColor: colors.bgFooter,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        maxHeight: 100,
        padding: 10,
        width: '100%',
    },
    footerText: {
        color: colors.textColorFooter,
        fontFamily: 'Roboto',
        fontSize: 20,
        flex: 2,
        marginLeft: 25,
    },
});
