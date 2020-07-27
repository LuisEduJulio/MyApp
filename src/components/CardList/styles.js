import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 20
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        height: 60,
        width: 380,
        borderRadius: 5
    },
    Title:{
        fontSize: 15,
        fontWeight: 'bold'
    }
});