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
        Age: '21',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8gYefjK45EqzPI4eHBNAuDmnitPJP617Ng&usqp=CAU',
      },
      {
        id: 2,
        name: 'Vibol',
        subject: 'AI',
        Age: '21',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8gYefjK45EqzPI4eHBNAuDmnitPJP617Ng&usqp=CAU',
      },
      {
        id: 3,
        name: 'Srey Nich',
        subject: 'React js',
        Age: '20',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8gYefjK45EqzPI4eHBNAuDmnitPJP617Ng&usqp=CAU',
      },
      {
        id: 4,
        name: 'Dara',
        subject: 'React Native',
        Age: '20',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8gYefjK45EqzPI4eHBNAuDmnitPJP617Ng&usqp=CAU',
      },
      {
        id: 5,
        name: 'Chhay Lang',
        subject: 'Management',
        Age: '22',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8gYefjK45EqzPI4eHBNAuDmnitPJP617Ng&usqp=CAU',
      },
      {
        id: 6,
        name: 'bottra',
        subject: 'AI',
        Age: '22',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8gYefjK45EqzPI4eHBNAuDmnitPJP617Ng&usqp=CAU',
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
          style={styles.btnStyle}
          onPress={() => this.onDelete(item.id)}>
          <Text style={{color: 'white'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {data} = this.state;
    return (
      <View style={styles.cntainer}>
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
    padding: 24,
  },
  FlatlistStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c0cbc0',
    marginBottom: 16,
    padding: 8,
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  btnStyle: {
    backgroundColor: '#037272',
    padding: 10,
    borderRadius: 8,
  },
});

export default App;
