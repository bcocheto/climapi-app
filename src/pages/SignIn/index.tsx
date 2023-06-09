import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {useAuth} from "../../contexts/auth";

import {styles} from "./style";
import {COLORS_ENUM} from "../../common/ColorsEnum";
import Logo from "../../components/Logo";
import {usernameValidator, passwordValidator} from '../../common/utils/utils';
import * as Animatable from "react-native-animatable";

const SignIn: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const {signIn} = useAuth();

    async function handleSignIn() {
        const usernameError = usernameValidator(username);
        const passwordError = passwordValidator(password);

        if (usernameError || passwordError) {
            setUsernameError(usernameError);
            setPasswordError(passwordError);
            return;
        } else {
            signIn(username, password);
        }
    }

    return (
        <View style={styles.container}>
            <Logo/>
            <Animatable.Text
                animation="slideInLeft"
                duration={3000}
                style={styles.animatableText}
            >
                <Text>Welcome back ;)</Text>
            </Animatable.Text>

            <TextInput style={styles.input}
                       selectionColor={COLORS_ENUM.primary_text}
                       underlineColorAndroid="transparent"
                       placeholder="Digite seu username"
                       onChangeText={text => setUsername(text)} value={username}/>
            {usernameError.length > 0 &&
                <Text style={styles.error}>{usernameError}</Text>
            }
            <TextInput style={styles.input}
                       selectionColor={COLORS_ENUM.primary_text}
                       underlineColorAndroid="transparent"
                       placeholder="Digite sua senha"
                       onChangeText={text => setPassword(text)} value={password}/>
            {passwordError.length > 0 &&
                <Text style={styles.error}>{passwordError}</Text>
            }
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            <View style={styles.forgotPassword}>
                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPasswordScreen')}
                </TouchableOpacity>>*/}
                <Text style={styles.label}>Forgot your password?</Text>
            </View>
        </View>
    );
};

export default SignIn;