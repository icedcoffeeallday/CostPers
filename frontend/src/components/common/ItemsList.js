import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


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
        console.log(response.data)
        myItem.setState({data: response.data})


      })
      .catch(function(error) {
        console.log(error)
      })
    }


    render() {
      return (
        <View>
          {this.state.data.map((data) => {
              console.log(data.name)
            return (<Text>{data.name}</Text>)
            })}

        </View>
      );
    }
}

const styles = ({
  container: {
    flex: 1,
  },
});
export { ItemsList };
