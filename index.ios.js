/**
 * Main component
 */
'use strict';

import React from 'react-native';
import Button from 'react-native-button';
import Utils from './lib/utils';
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

import { connect, Provider } from 'react-redux/native';
import { createStore } from 'redux';


/**
 * State / Reduce
 */

const start = {
  count: 0,
};

const reduce = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};


/**
 * Render
 */

const App = connect(
  ({ count }) => ({ count })
)(
  ({ count, dispatch }) => (
    <View style={styles.appContainer}>

      <View style={styles.appContainer}>
        <Text>
        CLICKED {count} TIME{count === 1 ? '' : 'S'}!
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value={count.toString()}
        />

        <Text>
        Day {Utils.computeDay(count)}
        </Text>
      </View>

      <View style={styles.buttonContainer}>

        <Button
          style={styles.button}
          onPress={() => dispatch({ type: 'INCREMENT_COUNT' })}
        >
        +
        </Button>
      </View>

    </View>
  )
);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 50,
    marginRight: -325
  },
  button: {
    fontSize: 70,
    color: 'green'
  }
});


/**
 * Main
 */

const Main = () => (
  <Provider store={createStore(reduce, start)}>
    {() => <App />}
  </Provider>
);

AppRegistry.registerComponent('memorize_it_rn', () => Main);
