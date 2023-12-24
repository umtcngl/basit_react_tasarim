
// https://github.com/umtcngl



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <View style={styles.centeredBox}>
          <Text style={styles.largeText}>Ümitcan</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.lowerHalf}>
        <View style={styles.row}>
          <View style={[styles.box, styles.box1]}></View>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3]}></View>
          <View style={[styles.box, styles.box4]}></View>
          <View style={[styles.box, styles.box5]}></View>
        </View>
        <View style={styles.column}>
          <View style={[styles.box, styles.box6]}></View>
          <View style={[styles.box, styles.box7]}></View>
          <View style={[styles.box, styles.box8]}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperHalf: {
    flex: 1,
    justifyContent: 'center',
  },
  lowerHalf: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  centeredBox: {
    width: 150, 
    height: 150, 
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  largeText: {
    fontSize: 20, 
    fontFamily: 'monospace',
    letterSpacing:9
  },
  divider: {
    borderBottomWidth: 20,
    borderBottomColor: '#ffffff',
    width: '100%',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 25,
  },
  box1: {
    backgroundColor: '#FF6B81', // Daha parlak pembe
  },
  box2: {
    backgroundColor: '#4CAF50', // Daha parlak yeşil
  },
  box3: {
    backgroundColor: '#2196F3', // Daha parlak mavi
  },
  box4: {
    backgroundColor: '#FFC300', // Daha parlak sarı
  },
  box5: {
    backgroundColor: '#9C27B0', // Daha parlak mor
  },
  box6: {
    backgroundColor: '#FF5722', // Daha parlak turuncu
  },
  box7: {
    backgroundColor: '#673AB7', // Daha parlak mürdüm moru
  },
  box8: {
    backgroundColor: '#00BCD4', // Daha parlak deniz yeşili
  },
  

});
