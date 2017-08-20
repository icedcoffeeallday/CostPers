import React from 'react';
import { Text, View } from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Footer = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <BottomNavigation
      labelColor="white"
      rippleColor="white"
      style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0}}
      // onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
      >
        <Tab
          barBackgroundColor="#16795B"
          label="Home"
          icon={<Icon size={24} color="white" name="home" />}
        />
        <Tab
          barBackgroundColor="#16795B"
          label="Add An Item"
          icon={<Icon size={24} color="white" name="add-circle" />}
        />
        <Tab
          barBackgroundColor="#16795B"
          label="Logout"
          icon={<Icon size={24} color="white" name="exit-to-app" />}
        />
    </BottomNavigation>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingBottom: 15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // elevation: 2,
    position: 'relative'
  },
    textStyle: {
      fontSize: 20,
      color: '#00241B'
    }
};

export { Footer };
