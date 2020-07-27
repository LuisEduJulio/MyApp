import React, { useState } from 'react';
import { Layout, Input, CheckBox, Text } from '@ui-kitten/components';
import { View, TouchableOpacity, Alert, Picker } from 'react-native';
import { FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagemPicker from 'expo-image-picker';
import { Api } from '../../Services/Api';
import { Styles } from './styles';


function ComplaintScreen() {
    const [photo, setPhoto] = useState('');
    const [verify, setVerify] = useState(false);
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
    const [selected, setSelected] = useState('')
    const [list, setList] = useState([
        { id: 1, nome: 'Monitor sem imagem' },
        { id: 2, nome: 'Cabo de rede com defeito' },
        { id: 3, nome: 'Mouse com defeito' },
        { id: 4, nome: 'Faltando internet' },
    ])
    const [email_user, setEmail_user] = useState('');
    const date = new Date();

    async function takePicture() {
        const result = await ImagemPicker.launchCameraAsync();
        console.log(JSON.stringify(result.base64));
        if (!result.cancelled) {
            setPhoto(result.base64);
            setVerify(true)
        } else {
            setPhoto('');
            setVerify(false)
        }
    }

    function handleAdd() {
        const motivo_ocorrencia = selected;
        const email = email_user;
        const imagem = photo;
        const data_de_envio = JSON.stringify(date).substring(0, 11);

        if (email !== '' || motivo_ocorrencia !== '' || imagem !== '' || data_de_envio !== '') {
            Api.post('/' + email, {
                data_de_envio,
                motivo_ocorrencia,
                email,
                imagem
            })
            navigation.reset({
                routes: [{ name: 'HomeScreen' }]
            })

        } else {
            Alert.alert('Preencha os dados corretamente!');
        }
    }

    return (
        <Layout style={Styles.container} level='4'>
            <View style={Styles.containerInput}>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.reset({
                            routes: [{ name: 'HomeScreen' }]
                        })}
                        style={Styles.topContainer}
                    >
                        <Ionicons name="md-arrow-round-back" size={24} color="#FFF" style={Styles.Icon} />
                    </TouchableOpacity>
                </View>
                <Text style={Styles.Title}>Cadastro de Denuncias</Text>
                <Picker
                    style={Styles.Picker}
                    selectedValue={selected}
                    onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}>
                    {list.map((e, i) => (
                        <Picker.Item label={e.nome} value={e.id} key={i} />
                    ))}
                </Picker>
                <Input
                    style={Styles.Input}
                    status='primary'
                    placeholder='Email'
                    keyboardType='email-address'
                    value={email_user}
                    onChangeText={e => setEmail_user(e)}
                />
                <TouchableOpacity
                    style={Styles.ButtonCam}
                    onPress={() => takePicture()}
                >
                    <FontAwesome5 name="camera" size={24} color="#FFF" />
                    <Text style={Styles.TitleCam}>Câmera</Text>
                </TouchableOpacity>
            </View>
            {verify &&
                <View style={Styles.containerCheckbox}>
                    <CheckBox
                        checked={checked}
                        disabled={true}
                        style={Styles.Check}
                    />
                    <Text style={Styles.TextCheckbox}>Foto salva!</Text>
                </View>
            }
            <View style={Styles.containerFooter}>
                <TouchableOpacity
                    style={Styles.ButtonSend}
                    onPress={() => handleAdd()}
                >
                    <FontAwesome name="send" size={24} color="#FFF" />
                    <Text style={Styles.TitleCam}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    );
}

export default ComplaintScreen;