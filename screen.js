import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListMeeting from './list_meeting'

const RootStack = createStackNavigator({
    ListMeeting: {
        screen: ListMeeting
    }
});

const Container = createAppContainer(RootStack);

export default Container;