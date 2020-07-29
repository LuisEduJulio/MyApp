import React, { useEffect, useState, Fragment } from 'react';
import { Layout } from '@ui-kitten/components';
import { View, Text, Image } from 'react-native';
import { Api } from '../../Services/Api';
import { Styles } from './styles';

function CardList() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function requestList() {
            const response = await Api.get('ocorrencias');
            
            if (response !== null) {
                setData(response.data.dados);
            } else {
                setData([]);
            }
        }
        requestList();
    }, [])

    return (
        <View style={Styles.container}>
            {data.map((Items) =>
                <Layout style={Styles.card} level='4'>
                    <View>
                        <Image 
                            source={{ uri: `data:image/jpg;base64,${Items.imagem}` }}
                            style={Styles.Image}
                        />
                    </View>
                    <View>
                        <Text style={Styles.Title}>Email: {Items.email}</Text>
                        <Text style={Styles.Title}>Motivo: {Items.motivo_ocorrencia}</Text>
                    </View>
                </Layout>
            )}
        </View>
    );
}

export default CardList;