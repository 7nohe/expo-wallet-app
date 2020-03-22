import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Footer,
  FooterTab,
  Button,
  Body,
  Icon
} from "native-base";
import { TabNavigation } from "./types/TabNavigation";
import { Drawer } from "native-base";
import Account from "./pages/Account";

interface IProps {
  children: React.ReactNode;
  navigation: TabNavigation;
}

const Layout = (props: IProps) => {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const navigate = name => {
    if (name === currentScreen) return;
    setCurrentScreen(name);
    props.navigation.reset({ index: 0, routes: [{ name }] });
  };

  let drawer;

  return (
    <Container>
      <Drawer
        side="right"
        ref={ref => {
          drawer = ref;
        }}
        content={<Account />}
      >
        <Header>
          <Body>
            <Title>My Pay</Title>
          </Body>
        </Header>
        {props.children}
        <Footer>
          <FooterTab>
            <Button
              onPress={() => navigate("Home")}
              active={currentScreen === "Home"}
            >
              <Icon name="home" />
            </Button>
            <Button
              onPress={() => navigate("ShopList")}
              active={currentScreen === "ShopList"}
            >
              <Icon type="Entypo" name="shop" />
            </Button>
            <Button
              onPress={() => navigate("NotificationList")}
              active={currentScreen === "NotificationList"}
            >
              <Icon type="AntDesign" name="bells" />
            </Button>
            <Button onPress={() => drawer._root.open()}>
              <Icon type="MaterialCommunityIcons" name="account" />
            </Button>
          </FooterTab>
        </Footer>
      </Drawer>
    </Container>
  );
};

export default Layout;
