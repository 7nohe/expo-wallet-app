import React from "react";
import { Text, Content } from "native-base";
import Swiper from 'react-native-swiper'
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: '10%'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9DD6EB',
    width: '80%',
    borderRadius: 30,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    width: '80%',
    borderRadius: 30,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: '80%',
    borderRadius: 30,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const HomeScreen = () => {
  return (
    <Content style={{ marginTop: 20 }}>
      <Swiper 
        style={styles.wrapper} 
        showsButtons={false}
        height={200}
        showsPagination={false}
        loop={false}
        removeClippedSubviews={false}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>Coin A</Text>
          <Text style={styles.text}>$5000</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Coin B</Text>
          <Text style={styles.text}>$8000</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Coin C</Text>
          <Text style={styles.text}>$1200</Text>
        </View>
      </Swiper>
    </Content>
  );
};

export default HomeScreen;
