import React, {Component} from 'react';
import {View} from 'react-native'
import firebase from 'firebase';

import {Header} from './components/common'
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

    componentDidMount() {
        firebase.initializeApp({
            apiKey: API_KEY,
            authDomain: DOMAIN_NAME,
            databaseURL: DATABASE_URL,
            projectId: PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGING_SENDER_ID
        });
    };

    render() {

        return (
            <View>
                <Header{...screenHeading} />
                <LoginForm/>
            </View>
        );
    }

}

export default App;