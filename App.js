import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, Alert } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      label: 'Device List'
    };
  }
  
  GetSectionListItem=(item)=>{
    { this.setState({ label: item }); }
  } 
  render() {
    return (
      <View style={styles.container}>
      <Text style={{ justifyContent: 'center', textAlign: 'center', fontSize: 22 }}>{this.state.label}</Text>
        <SectionList
          sections= {[
            {deviceBrand: 'Samsung', data: ['Samsung Galaxy S8 Edge', 'Samsung Note3', 'Samsung Galaxy']},
            {deviceBrand: 'MI', data: ['XIAOMI MI 10', 'MI note 8 pro']},
            {deviceBrand: 'Apple', data: ['iPhone 11 Pro', 'iPhone8', 'iphone9']},
            {deviceBrand: 'OnePlus', data: ['OnePlus8', 'OnePlus11', 'OnePlus12']},
            {deviceBrand: 'Huawei', data: ['HUAWE MATE 30 PRO 5G', 'huawei p10']},
          ]}
          renderItem={({item}) => <Text style={styles.item} onPress={this.GetSectionListItem.bind(this, item)}>
          {item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.deviceBrand}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
   container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: '#B0B0B0',
  },
  item: {
    padding: 10,
    fontSize: 16,
    height: 44,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
});

