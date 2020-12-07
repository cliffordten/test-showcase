import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from "../color.styles";

const Event = ({date, title, time, loc}) => {
    const dateArray = date.split(' ')
    return (
        <View style={styles.eventContainer}>
            <View style={styles.titleWrapper}>
                <Text style={[styles.eventTitle, styles.date]}>{parseInt(dateArray[0].substring(0, 2))} {dateArray[1]}</Text>
                <Text style={styles.eventTitle}>{title}</Text>
            </View>
            <View >
                <View style={styles.timeWrapper}>
                    <Text  style={[styles.eventTitle, styles.eventTime]}>{time}</Text>
                </View>
                <View style={styles.locWrapper}>
                    <Text style={styles.eventLoc}>{loc}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.locWrapper} onPress={() => {}}>
                    <Text style={styles.buttonTxt}>+ Event Details</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

Event.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    loc: PropTypes.string.isRequired 
}

const styles = StyleSheet.create({

    eventContainer: {
      paddingHorizontal: 15,
      borderBottomColor: colors.borderColor,
      paddingTop: 40,
      paddingBottom: 30,
      borderBottomWidth: 1.5,
    },

    titleWrapper: {
      borderBottomWidth: 1.5,
      borderBottomColor: colors.borderColor,
      paddingBottom: 15,
    },

    eventTitle: {
        fontSize: 22,
        color: colors.appColor,
        paddingBottom: 5,
    },
    
    date: {
        fontWeight: "bold",
        textTransform: "uppercase",
      fontSize: 24,
    },

    timeWrapper: {
        alignItems: "flex-start",
    },

    eventTime: {
        borderBottomWidth: 1.5,
        borderBottomColor: colors.borderColor,
        paddingBottom: 15,
      },

    locWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
    },

    eventLoc: {
        color: colors.desColor,
        fontSize: 18
    },

    buttonTxt: {
        color: colors.primaryColor,
        backgroundColor: "transparent",
        textTransform: "capitalize",
        fontSize: 18,
        borderColor: "red"
      },
   
  
  });

export default Event
