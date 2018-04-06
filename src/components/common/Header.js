import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

//Make a component


class Header extends Component {
    headerRender() {
        const {headingTitle, subHeadingTitle} = this.props;
        const {textStyle, viewStyle, textSubHeadingStyle} = styles;
        if (!subHeadingTitle) {
            console.log('only header is rendering');
            return (
                <View style={viewStyle}>
                    <Text style={textStyle}>{headingTitle}</Text>
                </View>
            );
        } else {
            console.log('both header and sub heading is rendering');
            return (
                <View style={viewStyle}>
                    <Text style={textStyle}>{headingTitle}</Text>
                    <Text style={textSubHeadingStyle}>{subHeadingTitle}</Text>
                </View>
            );
        }
    }

    render() {
        console.log(this.props);
        return (
            <View>
                {this.headerRender(this.props)}
            </View>
        );
    }


}

const styles = {
    viewStyle: {
        backgroundColor: '#4286f4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        ...Platform.select({
            ios: {
                paddingTop: 20,
                shadowOpacity: 0.2
            },
            android: {
                elevation: 6
            }
        }),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    },
    textSubHeadingStyle: {
        fontSize: 10
    }
};

// Make the component available to other parts of the app
export {Header};


