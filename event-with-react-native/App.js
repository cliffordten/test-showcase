import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';
import colors from "./app/color.styles";
import Events from './app/screens/events.screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={colors.backgroundDark}/>
      <View style={styles.container}>
        <SafeAreaView>
          <Events/>
          <TouchableOpacity style={styles.floatingBtnWrapper} onPress={() => {}}>
            <Icon name="comment" size={40} style={styles.floatingImage} color="#000"/>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor: colors.backgroundDark,
    paddingBottom: 30,
  },
  container: {
    backgroundColor: colors.backgroundDark,
  },
  floatingBtnWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 15,
    backgroundColor: colors.primaryColor,
    borderRadius: 100/2
  },
  floatingImage: {
    flex: 1,
    padding: 15

  }
});
