import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';
import CardList from '../../components/CardList';

function HomeScreen() {
  const navigation = useNavigation();

  function handleNewComplaint() {
    navigation.reset({
      routes: [{ name: 'ComplaintScreen' }]
    });
  }
  return (
    <Layout style={Styles.container} level='4'>
      <Text style={Styles.Title}>Seja bem vindo!</Text>
      <View style={Styles.Card}>
        <FontAwesome5 name="clipboard-list" size={24} color="#970E3E" />
        <Text style={Styles.TextCard}>Lista de ocorrências</Text>
      </View>
      <ScrollView>
        <CardList />
      </ScrollView>
      <View style={Styles.containerFooter}>
        <TouchableOpacity
          onPress={() => handleNewComplaint()}
        >
          <Ionicons name='ios-add-circle' size={60} color='#970E3E' style={Styles.Icon} />
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

export default HomeScreen;