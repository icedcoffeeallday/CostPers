import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { Item } from './';
  // If issues with Item, try adding filename back to from path
import Costper from './Costper';
import ContainerSection from '../ContainerSection';
import LoginForm from '../LoginForm';


class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [],
                   name: '',
                   price: '',
                   img_url: '',
                   star: '',
                   user_id: '',
                   category_id: ''
                 };
  }

  componentWillMount() {
    var myItem = this;
    axios.get('http://localhost:3000/items')
      .then(function(response) {
        myItem.setState({data: response.data})
      })
      .catch(function(error) {
        console.log(error)
      });
    }

    render() {
      console.log('***************');
      console.log('Props are:' + this.props.userId);
      return (

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
