import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

import Event from './Event';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          title: '12/10 - 14/10 Seletiva Nacional Aberta',
          place: 'Londrina, Paraná, Brasil',
        },
        {
          id: 2,
          title: '12/11 - 18/11 Campeonato Mundial Militar',
          place: 'Rio de Janeiro, Rio de Janeiro, Brasil',
        },
        {
          id: 3,
          title: '23/11 - 25/11 Copa do Brasil',
          place: 'São José, Santa Catarina, Brasil',
        }
      ]
    }
  }

  _renderItem = ({item}) => (
    <Event
      id={item.id}
      title={item.title}
      place={item.place}
      thumbnail={item.thumbnail}
    />
  );

  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.events}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  }
});
