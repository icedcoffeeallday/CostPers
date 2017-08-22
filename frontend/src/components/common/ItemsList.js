import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Hyperlink } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {Item} from './';
  // If issues with Item, try adding filename back to from path
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

      return (

        <ScrollView>
            <View style={styles.contentcolumns} >
            {this.state.data.map((item) => {
              return(
                <View style={styles.rows}>
                  <Item key={item.id}
                    name={item.name}
                    price={item.price}
                    img_url={item.img_url}
                    star={item.star}
                    user_id={item.user_id}
                    category_id={item.category_id}
                  />
                  <Costper key={item.costper.id}
                        costper = {item.costper.costper}
                        item_id = {item.costper.item_id}
                  />

                </View>
              )})}
          </View>
      </ScrollView>
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
  }

});
export { ItemsList };
