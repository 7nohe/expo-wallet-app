import React from "react";
import { Content, Text } from "native-base";
import { RootState } from '../store'
import { useSelector } from 'react-redux'

const ShopListScreen = () => {
  const selectedTicket = useSelector((state: RootState) => state.ticket.selectedTicket)
  return (
    <Content>
      <Text>{ selectedTicket.name }の利用可能店舗</Text>
    </Content>
  );
};

export default ShopListScreen;
