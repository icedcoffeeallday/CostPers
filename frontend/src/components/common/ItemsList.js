import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Hyperlink } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {Item} from './';
import Costper from './Costper';
import ContainerSection from '../ContainerSection';
import LoginForm from '../LoginForm';


class ItemsList extends Component {

  constructor(props) {
    super(props);
    this.state = {starred: [],
                  non_starred: [],
                  user_id: this.props.userId,
                 };
    this.updateItemFunc = this.updateItemFunc.bind(this);
  }

  componentWillMount() {
    var myItem = this;
    axios.get('http://localhost:3000/users/'+this.state.user_id+'/items')
      .then(function(response) {
        console.log(response)
        myItem.setState({starred: response.data.starred, non_starred: response.data.non_starred})
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
        return a.costper.costper - b.costper.costper
      })
      this.setState({ data: newList })
    }

    render() {
      return (
        <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.favoriteStyle}> Favorites </Text>
              <View style={styles.contentcolumns} >
              {this.state.starred.map((item, index) => {
                return(
                  <View style={styles.rows}>
                    <View style={styles.itemInfoContainer}>
                    <Item key={item.id}
                      name={item.name}
                      price={item.price}
                      img_url={item.img_url}
                      star={item.star}
                      user_id={item.user_id}
                      category_id={item.category_id}
                    />

                    <Costper key={item.costper.cpid}
                      costper={item.costper.costper}
                      item_id={item.costper.item_id}
                      updateItem={this.updateItemFunc(index)}
                    />
                  </View>
                  </View>
                )})}
            </View>

            <Text style={styles.favoriteStyle}> Everything Else </Text>
            <View style={styles.contentcolumns} >
            {this.state.non_starred.map((item, index) => {
              return(
                <View style={styles.rows}>
                <View style={styles.itemInfoContainer}>
                  <Item key={item.id}
                    name={item.name}
                    price={item.price}
                    img_url={item.img_url}
                    star={item.star}
                    user_id={item.user_id}
                    category_id={item.category_id}
                  />
                  <Costper key={item.costper.cpid }
                    costper = {item.costper.costper}
                    item_id = {item.costper.item_id}
                    updateItem={this.updateItemFunc(index)}
                  />
                </View>
              </View>
              )})}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerStyle}>
          <TouchableOpacity onPress={() => Actions.addItem({ userId: this.state.user_id })}>
            <View style={styles.footerSubGroup}>
              <Icon size={40} style={{ color: 'white' }} name="add-circle"/>
              <Text style={styles.footerTextStyle}>Add Item</Text>
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
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemInfoContainer: {
    height: 100,
    justifyContent: 'space-around',
    borderColor: '#D3D3D3',
    borderWidth: 0.5,
    paddingTop: 20,
    paddingBottom: 10
  },
  footerStyle: {
    height: 60,
    position: 'relative',
    backgroundColor: '#16795B',
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
    justifyContent: 'center'
  },
  favoriteStyle: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 5,
    color: 'gray'
  }

});
export { ItemsList };
