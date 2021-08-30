/* eslint-disable react-native/no-inline-styles */
import {ConsoleWriter} from 'istanbul-lib-report';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'Visal',
        subject: 'Database',
        Age: 'Age: 25',
        image:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: 2,
        name: 'Jonny',
        subject: 'AI',
        Age: 'Age: 30',
        image:
          'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 3,
        name: 'Harana',
        subject: 'React js',
        Age: 'Age: 20',
        image:
          'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: 4,
        name: 'Vinsey',
        subject: 'React Native',
        Age: 'Age: 22',
        image:
          'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: 5,
        name: 'Sammol',
        subject: 'Management',
        Age: 'Age: 22',
        image:
          'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      },
      {
        id: 6,
        name: 'Jame',
        subject: 'Java',
        Age: 'Age: 25',
        image:
          'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: 7,
        name: 'Wunshchen',
        subject: 'PHP',
        Age: 'Age: 22',
        image:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      {
        id: 8,
        name: 'Alyson',
        subject: 'Data Analysis',
        Age: 'Age: 30',
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      {
        id: 9,
        name: 'Angeline Rice',
        subject: 'Network',
        Age: 'Age: 21',
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      },
      {
        id: 10,
        name: 'Deon Wusch',
        subject: 'PhotoShop',
        Age: 'Age: 25',
        image:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600',
      },
    ],
  };

  onDelete = id => {
    const {data} = this.state;
    let filterArray = data.filter((val, i) => {
      if (val.id !== id) {
        return val;
      }
      alert(id);
    });
    console.log('filter array', filterArray);
    this.setState({data: filterArray});
  };

  renderItems = ({item}) => {
    return (
      <View style={styles.FlatlistStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: item.image}} style={styles.imgStyle} />
          <View style={{marginLeft: 8}}>
            <Text>{item.name}</Text>
            <Text>{item.subject}</Text>
            <Text>{item.Age}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.DeleteStyle}
          onPress={() => this.onDelete(item.id)}>
          <Text style={{color: 'white'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Profiles Information</Text>
        <FlatList
          data={data}
          renderItem={this.renderItems}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  Text: {
    height: 40,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    padding: 10,
    backgroundColor: '#c0cbc0',
  },
  FlatlistStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c0cbc0',
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  DeleteStyle: {
    backgroundColor: '#037272',
    padding: 10,
    borderRadius: 8,
  },
  ViewStyle: {
    backgroundColor: '#037272',
    padding: 10,
    borderRadius: 8,
    width: 60,
    height: 40,
    alignItems: 'center',
  },
});

export default App;
