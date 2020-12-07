import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from "../color.styles";
import Event from '../components/event.component';
import data from "../data/event.json";

const Events = () => {

  const [events, setEvents] = useState(data)
  return (
    <View>
      <ScrollView style={styles.scrolView}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Events</Text>
        </View>
        <View style={styles.eventContainer}>
            {
              events.map(({id, ...data}) => (
                  <Event key={id} {...data}/>
              ))
            }
        </View>
      </ScrollView>
      
    </View>
  );
} 

const styles = StyleSheet.create({
  scrolView : {
    paddingTop: 30,
    paddingBottom: 30,
  },
  eventContainer: {
    paddingHorizontal: 20,
  },
  titleWrapper: {
    alignItems: 'center',
  },
  title: {
    color: colors.titleColor,
    backgroundColor: colors.titleBackground,
    padding: 5,
    textTransform: "uppercase",
    fontSize: 18,
    letterSpacing: 6

  },

});
export default Events;