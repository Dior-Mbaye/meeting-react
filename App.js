import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeActivity from './components/HomeActivity';
import ProfileActivity from './components/ProfileActivity';
import ListMeeting from './list_meeting';
import SaveMeeting from './save_meeting';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";
import ListItem from './ListItem';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeActivity },
    Profile: { screen: ProfileActivity },
    ListMeeting: { screen: ListMeeting },
    SaveMeeting: { screen: SaveMeeting },
  },
  {
    initialRouteName: 'Home',
  }

);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      newMeetingClock: '',
      newMeetingPlace: '',
      newMeetingSubject: '',
      newMeetingList: '',
      editing: false,
      editingIndex: null,
      notification: null,
      meetings: [
        {
          id: 1, clock: '12h00', place: 'Salle 12', subject: "subject", list: 'mbayedior@gmail.com',
        }
      ],
      loading: true

    };

    this.addMeeting = this.addMeeting.bind(this);
    this.updateMeeting = this.updateMeeting.bind(this);
    this.deleteMeeting = this.deleteMeeting.bind(this);
    this.generateID = this.generateID.bind(this);
    this.handleChangeClock = this.handleChangeClock.bind(this);
    this.handleChangePlace = this.handleChangePlace.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeList = this.handleChangeList.bind(this);
  }



  handleChangeClock(event) {
    this.setState(
      {
        newMeetingClock: event.target.value
      }
    )
  }

  handleChangePlace(event) {
    this.setState(
      {
        newMeetingSubject: event.target.value
      }
    )
  }

  handleChangeList(event) {
    this.setState(
      {
        newMeetingPlace: event.target.value
      }
    )
  }

  handleChangeSubject(event) {
    this.setState(
      {
        newMeetingList: event.target.value
      }
    )
  }

  generateID() {
    const lastMeeting = this.state.meetings[this.state.meetings.length - 1];
    if (lastMeeting) {
      return lastMeeting.id + 1;
    }
    return 1;
  }

  async addMeeting() {
    const newMeeting = {
      clock: this.state.newMeetingClock,
      place: this.state.newMeetingPlace,
      subject: this.state.newMeetingSubject,
      list: this.state.newMeetingList,

      id: this.generateID()
    };
    const meetings = this.state.meetings;
    meetings.push(newMeeting);
    this.setState(
      {
        meetings: meetings,
        newMeetingClock: '',
        newMeetingPlace: '',
        newMeetingSubject: '',
        newMeetingList: ''
      }
    );
  }

  async deleteMeeting(index) {
    const meetings = this.state.meetings;
    delete meetings[index];
    this.setState({ meetings });
  }


  editMeeting(index) {
    const meeting = this.state.meetings[index];
    this.setState(
      {
        editing: true,
        newMeetingClock: meeting.clock,
        newMeetingPlace: meeting.place,
        newMeetingList: meeting.list,
        newMeetingSubject: meeting.subject,
        editingIndex: index
      }
    )

  }

  async updateMeeting() {
    const meeting = this.state.meetings[this.state.editingIndex]
    meeting.clock = this.state.newMeetingClock;
    meeting.subject = this.state.newMeetingSubject;
    meeting.place = this.state.newMeetingPlace;
    meeting.list = this.state.newMeetingList;
    const meetings = this.state.meetings;
    this.setState({
      meetings, editing: false,
      editingIndex: null,
      newMeetingClock: '',
      newMeetingSubject: '',
      newMeetingPlace: '',
      newMeetingList: ''
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText} >Home Activity</Text>
        <Text style={{ fontSize: 18, color: 'blue', margin: 15, textAlign: 'center' }} >Créer un réunion</Text>
        <TextInput
          name="meetingclock"
          placeholder=" Heure"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChange={this.handleChangeClock}
          value={this.state.newMeetingClock}
        />
        <TextInput
          name="place"
          placeholder=" Salle"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
          onChange={this.handleChangeList}
          value={this.state.newMeetingPlace}
        />
        <TextInput
          name="subject"
          placeholder=" Sujet"
          onChange={this.handleChangePlace}
          value={this.state.newMeetingSubject}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
        />
        <TextInput
          name="list"
          placeholder=" Participants"
          onChange={this.handleChangeSubject}
          value={this.state.newMeetingList}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10 }}
        />
        <Button
          title="Enregistrer"
          onPress={this.state.editing ? this.updateMeeting : this.addMeeting}
          style={{ marginTop: 10,backgroundColor:'#2eaf24' }}
        />
        <Text style={{ fontSize: 18, color: 'blue', margin: 15, textAlign: 'center' }}>Liste des réunions</Text>
        {this.state.meetings.map((item, index) => {
          return <ListItem
            key={item.id}
            item={item}
            editProduct={() => { this.editMeeting(index); }}
            deleteProduct={() => { this.deleteMeeting(index); }}
          />
        }
        )}
      </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor:'#2a7dd6',
    borderRadius:7,
    paddingTop:6,
    paddingBottom:6,
    color:'white'
  },
  button: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "gray",
    marginLeft: 5,
    backgroundColor:'#2eaf24'
  },
  buttonText: {
    color: "white",
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 16
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10
  },
  usersListContainer: {
    marginBottom: 25,
    elevation: 4,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 6,
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.1)"
  },
  clock: {
    fontWeight: "bold",
    fontSize: 16
  },
  listItem: {
    fontSize: 16
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  message: {
    color: "red",
    fontSize: 17
  }
})
