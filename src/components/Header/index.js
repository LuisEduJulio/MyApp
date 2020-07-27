import React, { Fragment } from 'react';
import { TopNavigation, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';
import { View } from 'react-native';

export const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <View style={Styles.ContainerTitle}>
                <Text style={Styles.Title}>Meu App</Text>
            </View>
        </View>
    );
};

