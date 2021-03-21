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
    render() {
        return (
            <div style={{background: 'Red'}}>
                <span>test</span>

            </div>
        );
    }

}