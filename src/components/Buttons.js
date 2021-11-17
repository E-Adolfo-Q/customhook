import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function CustomButton({ text, onPress, color, textColor }) {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: color
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    ...styles.buttonText,
                    color: textColor,
                    fontWeight: 'bold'
                }}
            >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        marginVertical: 15,
        width: '90%'
    },

    buttonText: {
        textAlign: 'center'
    }
});


