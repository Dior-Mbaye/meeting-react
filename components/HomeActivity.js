import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


class HomeActivity extends React.Component {
 
   static navigationOptions = {
     title: 'Home',
 headerStyle: {
      backgroundColor: '#03A9F4',
    },
 headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
 
  }; 
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText} >Home Activity</Text>
        <Button
          title="Go to Profile Activity"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to List Meeting Activity"
          onPress={() => this.props.navigation.navigate('ListMeeting')}
        />
        <Button
          title="Go to Save Meeting Activity"
          onPress={() => this.props.navigation.navigate('SaveMeeting')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
 fontWeight: 'bold'
  },
  
});

export default HomeActivity;