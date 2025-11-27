import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '../styles/buttonStyles';

const MyButton = ({ title, onPress }) => (
    <TouchableOpacity style={buttonStyles.container} onPress={onPress}>
        <Text style={buttonStyles.text}>{title} (iOS)</Text>
    </TouchableOpacity>
);

export default MyButton;
