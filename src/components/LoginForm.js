import React, {Component} from 'react';
import firebase from 'firebase';
import {Button, Card, CardSection, Input} from "./common";
import {Text, StyleSheet} from "react-native";

class LoginForm extends Component {
    state = {email: '', password: '', error: ''};

    validateUserLogin() {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch((error) => {
                        console.log(error);
                        this.setState({error: 'Authentication Failed.'});
                    });
            });
        ;
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Email'}
                        value={this.state.email}
                        autoCorrect={false}
                        secureTextEntry={false}
                        placeholder={'user@gmail.com'}
                        onChangeText={enteredEmail => this.setState({email: enteredEmail})}
                    >
                    </Input>
                </CardSection>

                <CardSection>
                    <Input
                        label={'Password'}
                        placeholder={'password'}
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={enteredPassword => this.setState({password: enteredPassword})}
                    >
                    </Input>
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.validateUserLogin.bind(this)}>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});
export default LoginForm;
