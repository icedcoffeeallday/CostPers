import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {Item} from './';
import Costper from './Costper';
import ContainerSection from '../ContainerSection';
import LoginForm from '../LoginForm';


class ItemsList extends Component {
  static renderRightButton = ({ iconName }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => Actions.addItem()}>
          <Icon size={20} style={{ color: 'black' }} name={iconName} />
        </TouchableOpacity>
      </View>
    );
  }

  // const addItemIcon=(<Icon name="add-circle" size={30} color="FFFFFF"/>)

  constructor(props) {
    super(props);
    this.state = { data: [],
                   name: '',
                   price: '',
                   img_url: '',
                   star: '',
                   user_id: this.props.userId,
                   category_id: ''
                 };
  }

  componentWillMount() {
    var myItem = this;
    axios.get('http://localhost:3000/users/'+this.state.user_id+'/items')
      .then(function(response) {
        myItem.setState({data: response.data})
      })
      .catch(function(error) {
        console.log(error)
      });
    }

    render() {
      console.log('***************');
      console.log('Props are:' + this.state.user_id);
      return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.contentcolumns} >
            {this.state.data.map((item) => {
              return(
                <View style={styles.rows}>
                  <Item key={item.item.id}
                    name={item.item.name}
                    price={item.item.price}
                    img_url={item.item.img_url}
                    star={item.item.star}
                    user_id={item.item.user_id}
                    category_id={item.item.category_id}
                  />
                  <Costper key={item.costper.id}
                        costper = {item.costper.costper}
                        item_id = {item.costper.item_id}
                  />
                </View>
              )})}
          </View>
      </ScrollView>
        <View style={styles.footerStyle}>
            <TouchableOpacity onPress={() => null}>
              <View style={styles.footerSubGroup}>
                <Icon size={40} style={{ color: 'white' }} name="home" />
                <Text style={styles.footerTextStyle}>Home</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => Actions.addItem()}>
              <View style={styles.footerSubGroup}>
                <Icon size={42} style={{ color: 'white' }} name="add-circle"/>
                <Text style={styles.footerTextStyle}>Add Item</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => null}>
              <View style={styles.footerSubGroup}>
                <Icon size={40} style={{ color: 'white' }} name="exit-to-app" />
                <Text style={styles.footerTextStyle}>Log Out</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
      );
    }
}

const styles = ({
  container: {
    flex: 1,
  },
  rows: {
    flexDirection: 'row'
  },
  contentcolumns: {
    flex: 1,
    flexDirection: 'column'
  },
  footerStyle: {
    height: 60,
    position: 'relative',
    backgroundColor: "#16795B",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footerTextStyle: {
    color: 'white',
    fontSize: 13
  },
  footerSubGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }


});


export { ItemsList };
