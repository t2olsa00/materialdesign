import { TextInput, Button } from "react-native-paper"
import MainAppbar from "../components/MainAppbar"
import { StyleSheet,View,Text } from 'react-native'
import React, { useState } from 'react'

export default function Login() {
    const [formData, setFormData] = useState({username: '',password: ''});
    const [showError, setShowError] = useState(false)

    const validateAndSubmit = () => {
        setShowError(true);
        if (formData.username.length > 0 && formData.password.length >= 8) {
            console.log('Form submitted with data:', formData);
            setFormData({ username: '', password: '' });
            setShowError(false);
        }
    }

    return(
        <>
        <MainAppbar title="Login"/>
        <View style={StyleSheet.container}>
            <TextInput
            value={formData.username}
            label="Username"
            style={styles.input_field}
            onChangeText={text => setFormData({...formData,username: text})}
            error={formData.username.length === 0 && showError}
            />
            {formData.username.length === 0 && showError && (
            <Text style={styles.errorText}>Username is required</Text>    
            )}

            <TextInput
            value={formData.password}
            label="Password"
            style={styles.input_field}
            keyboardType='visible-password'
            onChangeText={text => setFormData({...formData,password: text})}
            error={formData.password.length < 8 && showError}
            />
            {formData.password.length < 8 && showError && (
            <Text style={styles.errorText}>Password must be at least 8 characters</Text>
            )}

            <Button
            mode="contained"
            style={styles.button}
            onPress={validateAndSubmit}
            >
            Submit
            </Button>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    input_field: {
        backgroundColor: '#fcfcfc',
        margin: (16,8,0,8)
    },
    button: {
        margin: (16,8,0,8)
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
      },
});