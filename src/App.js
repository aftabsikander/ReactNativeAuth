import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {Header} from './components/common'

const screenHeading = {headingTitle: 'Authentication'};

//headingTitle: 'Authentication',

class App extends Component {
    render() {

        return (
            <View>
                <Header{...screenHeading} />
                <Text>An App!</Text>
            </View>
        );
    }

}

export default App;