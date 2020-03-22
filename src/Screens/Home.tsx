import React from "react";
import { Text, Content } from "native-base";
import Swiper from 'react-native-swiper'
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { SELECT_TICKET, Ticket } from "../store/ticket/types";
import { RootState } from "../store";

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: '10%'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9DD6EB',
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
  const dispatch = useDispatch()
  const selectedTicket = useSelector((state: RootState) => state.ticket.selectedTicket)
  const onSwipe = (index) => {
    dispatch({ type: SELECT_TICKET, payload: { index, name: slides[index].name, balance: slides[index].balance } })
  }
  const slides: Ticket[] = [
    {
      index: 0,
      name: 'Coin A',
      balance: 5000
    },
    {
      index: 1,
      name: 'Coin B',
      balance: 8000
    },
    {
      index: 2,
      name: 'Coin C',
      balance: 1200
    }
  ]

  return (
    <Content style={{ marginTop: 20 }}>
      <Swiper 
        style={styles.wrapper} 
        showsButtons={false}
        height={200}
        showsPagination={false}
        loop={false}
        removeClippedSubviews={false}
        onIndexChanged={onSwipe}
        index={selectedTicket.index}
      >
        {
          slides.map(slide => {
            return (
              <View style={styles.slide}>
                <Text style={styles.text}>{slide.name}</Text>
                <Text style={styles.text}>${slide.balance}</Text>
              </View>
            )
          })
        }
      </Swiper>
    </Content>
  );
};

export default HomeScreen;
