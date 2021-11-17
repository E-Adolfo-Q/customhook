import React from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { CustomButton } from '../components/Buttons';
import { useOperaciones } from '../hooks/useOperaciones';

const HomeScreen = () => {

    const { setNumber1, setNumber2, sumar, restar, multiplicar } = useOperaciones()

    return (
        <SafeAreaView>
            <TextInput
                keyboardType={'number-pad'}
                onChangeText={setNumber1}
                style={styles.inputText}
                placeholder="Ingrese el número 1"
            />
            <TextInput
                keyboardType={'number-pad'}
                onChangeText={setNumber2}
                style={styles.inputText}
                placeholder="Ingrese el número 2"
            />
            <CustomButton color="green" textColor="#f1f1f1" onPress={sumar} text="Sumar" />
            <CustomButton color="blue" textColor="#f1f1f1" onPress={restar} text="Restar" />
            <CustomButton color="red" textColor="#f1f1f1" onPress={multiplicar} text="Multiplicacion" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputText: {
        marginVertical: 15,
        width: '90%',
        height: 35,
        marginHorizontal: 20,
        borderColor: 'black',
        borderWidth: 3,
    }
})

export default HomeScreen
