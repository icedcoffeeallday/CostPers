import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Item from './item';
import Costper from './Costper';
import ContainerSection from '../ContainerSection';


class ItemsList extends Component {
  constructor(){
    super()
    this.state = {data: [],
                  name: "",
                  price: "",
                  img_url: "",
                  star: "",
                  user_id: "",
                  category_id: ""
                  }
  }

  componentWillMount() {
    var myItem = this
    axios.get('http://localhost:3000/items')
      .then(function(response) {

        myItem.setState({data: response.data})
      })
      .catch(function(error) {
        console.log(error)
      })
    }


    render() {
      return (
        <ScrollView>
          <ContainerSection>

            <View style={styles.contentcolumns} >

            {this.state.data.map((item) => {
              return(
                <Item key={item.id}
                  name={item.name}
                  price={item.price}
                  img_url={item.img_url}
                  star={item.star}
                  user_id={item.user_id}
                  category_id={item.category_id}
                />
              )})}
          </View>
          </ContainerSection>
      </ScrollView>
      );
    }
}

const styles = ({
  container: {
    flex: 1,
  },

  contentcolumns: {
    flex: 1,
    flexDirection: 'column'
  }

});
export { ItemsList };
