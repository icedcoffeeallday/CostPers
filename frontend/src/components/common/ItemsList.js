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
  static renderRightButton = ({ iconName, userId }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => Actions.addItem({userId: userId})}>
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
    this.updateItemFunc = this.updateItemFunc.bind(this)

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

    updateItemFunc(index){
      var thisItemsList = this

      return function(newCostper) {
        var data = thisItemsList.state.data
        var oldItem = data[index]
        oldItem.costper.costper = newCostper
        data[index] = oldItem
        thisItemsList.setState({ data: data })
        thisItemsList.sortList()
      }
    }

    sortList() {
      var newList = this.state.data.sort(function(a,b) {
        return b.costper.costper - a.costper.costper

      })
      this.setState({ data: newList })
    }

    render() {
      return (
        <View style={styles.container}>
        <ScrollView>
            <View >
            <View style={styles.contentcolumns} >
            {this.state.data.map((item, index) => {
              return(
                <View style={styles.rows}>
                  <View style={styles.itemInfoContainer}>
               
                  <Item key={item.id}
                    name={item.name}
                    price={item.price}
                    img_url={item.img_url}
                    star={item.star}
                    user_id={item.user_id}
                    item_id={item.id}
                    category_id={item.category_id}
                  />
                  <Costper key={item.costper.id}
                        costper = {item.costper.costper}
                        item_id = {item.costper.item_id}
                        updateItem={this.updateItemFunc(index)}
                  />
                  </View>
                </View>
              )})}
          </View>
      </ScrollView>
        <View style={styles.footerStyle}>
          <Text>
            <Icon name="add-circle" size={30} style={{color: 'black'}}/>
          </Text>
        </View>
      </View>

      );
    }
}

const styles = ({
  container: {
    flex: 1,
  },
  footerStyle: {
    height: 56,
    position: 'relative',
    backgroundColor: '#16795B'
  },
  rows: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemInfoContainer: {
    height: 90,
    justifyContent: 'space-around',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    paddingTop: 15
  }
});
export { ItemsList };
