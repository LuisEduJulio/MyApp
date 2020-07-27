import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000000'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerInput: {
        marginTop: 20,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
    },
    containerFooter: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    Title: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        marginTop: 30
    },
    TitleCam: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    ButtonCam: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#970E3E',
        height: 50,
        borderRadius: 5
    },
    ButtonSend: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#970E3E',
        height: 50,
        width: 200,
        borderRadius: 5,
        padding: 10,
    },
    Input: {
        marginBottom: 10,
    },
    containerCheckbox: {
        color: '#FFF',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10
    },
    TextCheckbox: {
        color: '#FFF',
        marginLeft: 10
    },
    Check: {
        backgroundColor: '#FFF',
        color: '#970E3E'
    },
    Picker:{
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 5
    }
});
