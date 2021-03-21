import { createStackNavigator } from 'react-navigation-stack'
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import TestChat from '../screens/TestChat';
// import ForgotPassword from '../screens/ForgotPassword';
// import TurnOnNotifications from '../screens/TurnOnNotifications';
import LoggedInTabNavigator from './LoggedInTabNavigator';

const AppRouteConfigs = createStackNavigator({
    LoggedOut: {screen: LoggedOut},
    LoggedIn: {
        screen: LoggedInTabNavigator,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
    LogIn: {screen: LogIn},
    TestChat: {screen: TestChat},
    // ForgotPassword: {screen: LogIn},
    // TurnOnNotifications: {screen: LogIn},
});

export default AppRouteConfigs;