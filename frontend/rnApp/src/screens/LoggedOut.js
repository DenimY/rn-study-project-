import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LoggedOut';

const airbnbLogo = require('../img/airbnb-logo.png');

export default class LoggedOut extends Component {
    static navigationOptions = ({navigation}) => ({
        // headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Log In"/>,
        headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('TestChat')} location="right" color={colors.white} text="TestChat"/>,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });
    onTestChat: LoggedOut.onTestChat;

    static onFacebookPress() {
        alert('Facebook button pressed');
    }

    static onCreateAccountPress() {
        alert('Create Account button pressed');
    }

    static onMoreOptionsPress() {
        alert('More options button pressed');
    }

    static onTestChat = ({navigation}) => {
        alert('Test!@#')
        navigation.navigate('TestChat');
    };

    render() {
        return (
            <>
                <ScrollView style={styles.wrapper}>
                    <View style={styles.welcomeWrapper}>
                        <Image
                            source={airbnbLogo}
                            style={styles.logo}
                        />
                        <Text style={styles.welcomeText}>
                            Welcome to Airbnb.123
                        </Text>
                        <RoundedButton
                            text="Continue with Facebook"
                            textColor={colors.green01}
                            background={colors.white}
                            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                            handleOnPress={this.onFacebookPress}
                        />

                        <RoundedButton
                            text="Test Chat1"
                            textColor={colors.white}
                            // handleOnPress={LoggedOut.onCreateAccountPress()}
                            handleOnPress={this.onTestChat}
                        />

                        <NavBarButton
                            handleButtonPress={(navigation) => navigation.navigate('testChat')}
                            // location="right"
                            color={colors.white}
                            text="testchat"
                        />


                        <RoundedButton
                            text="Create Account"
                            textColor={colors.white}
                            handleOnPress={this.onCreateAccountPress}
                        />

                        <TouchableHighlight
                            style={styles.moreOptionsButton}
                            onPress={this.onMoreOptionsPress}
                        ><Text style={styles.moreOptionsButtonText}>
                            More options
                        </Text>
                        </TouchableHighlight>
                        <View style={styles.termsAndConditions}><Text style={styles.termsText}>
                            By tapping Continue, Create Account or More
                        </Text>
                            <Text style={styles.termsText}>
                                {' options,'}
                            </Text>
                            <Text style={styles.termsText}>
                                {"I agree to Airbnb's "}
                            </Text>
                            <TouchableHighlight style={styles.linkButton}>
                                <Text style={styles.termsText}>
                                    Terms of Service
                                </Text>
                            </TouchableHighlight>
                            <Text style={styles.termsText}>
                                ,
                            </Text>
                            <TouchableHighlight style={styles.linkButton}>
                                <Text style={styles.termsText}>
                                    Payments Terms of Service
                                </Text>
                            </TouchableHighlight>
                            <Text style={styles.termsText}>
                                ,
                            </Text>
                            <TouchableHighlight style={styles.linkButton}>
                                <Text style={styles.termsText}>
                                    Privacy Policy
                                </Text>
                            </TouchableHighlight>
                            <Text style={styles.termsText}>
                                , and
                            </Text>
                            <TouchableHighlight style={styles.linkButton}>
                                <Text style={styles.termsText}>
                                    Nondiscrimination Policy
                                </Text>
                            </TouchableHighlight>
                            <Text style={styles.termsText}>
                                .
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </>
        );
    }
}