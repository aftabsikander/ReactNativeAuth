import React, {Component} from 'react';
import {View} from 'react-native'
import firebase from 'firebase';

import {Header, Button, Spinner} from './components/common'
import LoginForm from './components/LoginForm';

import {
    API_KEY,
    DOMAIN_NAME,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID
} from 'react-native-dotenv'

const screenHeading = {headingTitle: 'Authentication'};

class App extends Component {
    state = {loggedIn: null};

    componentDidMount() {
        firebase.initializeApp({
            apiKey: API_KEY,
            authDomain: DOMAIN_NAME,
            databaseURL: DATABASE_URL,
            projectId: PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGING_SENDER_ID
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    loggedIn: true
                });
            } else {
                this.setState({
                    loggedIn: false
                });
            }
        });
    };

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={styles.loggedOutContainer}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm/>;
            default:
                return (
                    <Spinner spinnerSize='large'/>
                );
        }
    }

    render() {

        return (
            <View>
                <Header{...screenHeading} />
                {this.renderContent()}
            </View>
        );
    }

}

const styles = {
    loggedOutContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        position: 'relative'
    },
};

export default App;