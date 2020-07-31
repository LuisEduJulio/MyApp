import React, { useState } from 'react';
import { Layout, Input, CheckBox, Card, Modal, Text } from '@ui-kitten/components';
import { View, TouchableOpacity, Alert, Picker, ActivityIndicator, Image } from 'react-native';
import { FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagemPicker from 'expo-image-picker';
import { Api } from '../../Services/Api';
import { Styles } from './styles';


function ComplaintScreen() {
    const [photo, setPhoto] = useState([]);
    const [verify, setVerify] = useState(false);
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
    const [selected, setSelected] = useState('');
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([
        { id: 1, nome: 'Furto' },
        { id: 2, nome: 'Roubo' }
    ])
    const [email_user, setEmail_user] = useState('luis@teste.com');
    const date = new Date();

    async function takePicture() {
        await ImagemPicker.launchCameraAsync({
            base64: true
        }).then(
            data => {
                setPhoto(data);
                setVerify(true);
                setChecked(true)
            }
        );
    }

    async function handleAdd() {
        setLoading(true)
        const data = JSON.stringify(date).substring(0, 11).toString().replace('"', '');

        if (selected !== '' || photo !== '') {
            console.log(JSON.parse(foto1));
            try {
                await Api.post('/ocorrencias/', {
                    motivo_ocorrencia: selected,
                    email: email_user,
                    imagem: photo,
                });
                setLoading(false);
                setVisible(true);
            } catch (err) {
                console.log('\n' + err);
                setVisible(false);
                setLoading(false)
            }
        } else {
            Alert.alert('Preencha os dados corretamente!');
            setLoading(false)
        }
    }

    function handleModalExit() {
        navigation.reset({
            routes: [{ name: 'HomeScreen' }]
        });
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
                <Text style={Styles.Title}>Cadastro de Ocorrências</Text>
                <Picker
                    style={Styles.Picker}
                    selectedValue={selected}
                    onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}>
                    {list.map((e, i) => (
                        <Picker.Item label={e.nome} value={e.nome} key={i} />
                    ))}
                </Picker>
                <Input
                    style={Styles.Input}
                    status='primary'
                    placeholder='Email'
                    keyboardType='email-address'
                    disabled={true}
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
                        status='basic'
                    />
                    <Text style={Styles.TextCheckbox}>Foto salva!</Text>
                </View>
            }
            {loading && <ActivityIndicator size='large' color='#FFF' />}
            <View style={Styles.containerFooter}>
                <TouchableOpacity
                    style={Styles.ButtonSend}
                    onPress={() => handleAdd()}
                >
                    <FontAwesome name="send" size={24} color="#FFF" />
                    <Text style={Styles.TitleCam}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <Modal
                visible={visible}
                backdropStyle={Styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true} style={Styles.CardModal}>
                    <Text style={Styles.TextModal}>Ocorrência cadastrada com sucesso!</Text>
                    <TouchableOpacity
                        onPress={() => handleModalExit()}
                        style={Styles.ButtonModal}
                    >
                        <Text style={Styles.TextButtonModal}>Sair</Text>
                    </TouchableOpacity>
                </Card>
            </Modal>
        </Layout>
    );
}

export default ComplaintScreen;