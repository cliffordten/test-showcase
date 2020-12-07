import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import colors from "./app/color.styles";
import Events from './app/screens/events.screen';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={colors.backgroundDark}/>
      <View style={styles.container}>
        <SafeAreaView>
          <Events/>
        </SafeAreaView>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor: colors.backgroundDark
  },
  container: {
    backgroundColor: colors.backgroundDark,
  },

});
