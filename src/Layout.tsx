import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Icon
} from "native-base";

interface IProps {
  children: React.ReactNode;
}

const Layout = (props: IProps) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>My Pay</Title>
        </Body>
      </Header>
      <Content>{props.children}</Content>
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="home" />
          </Button>
          <Button>
            <Icon type="Entypo" name="shop"/>
          </Button>
          <Button>
            <Icon type="AntDesign" name="bells" />
          </Button>
          <Button>
            <Icon type="MaterialCommunityIcons" name="account" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Layout;
