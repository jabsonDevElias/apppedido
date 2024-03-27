import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


CarregarProdutos = async () => {
  try {
      const response = await axios.post('http://10.0.2.2:3003/produtos');
      return response.data;
  } catch(err) {
      // TODO
      console.error(err); 
  }
};

export default function App() {

  const [produtos,setProdutos] = React.useState(CarregarProdutos());


  return (
    <View style={styles.container}>
      {produtos._j.map(item => <View style={{backgroundColor:"red",marginTop:10,padding:10}}><Text key={item.id}>{item.prod_tx_nome}</Text></View>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
