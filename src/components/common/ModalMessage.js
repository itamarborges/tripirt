import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const ModalMessage = ({ title, content, visible, onAccept, textBtn }) => {
  const { containerStyle, titleTextStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
      <CardSection style={cardSectionStyle}>
        <Text style={titleTextStyle}>
          {title}
        </Text>
      </CardSection>

      <CardSection style={cardSectionStyle}>
        <Text style={textStyle}>
          {content}
        </Text>
      </CardSection>

      <CardSection>
        <Button onPress={onAccept}>{textBtn}</Button>
      </CardSection>

      </View>
    </Modal>
  );
};


const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  titleTextStyle: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 40,
    fontWeight: 'bold'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center'
  }
};

export { ModalMessage };
