import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {  
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE'},
    { name: 'EMERALD'},
    { name: 'PETER RIVER'},
    { name: 'AMETHYST'},
    { name: 'WET ASPHALT'},
    { name: 'GREEN SEA'},
    { name: 'NEPHRITIS'},
    { name: 'BELIZE HOLE'},
    { name: 'WISTERIA'},
    { name: 'MIDNIGHT BLUE'},
    { name: 'SUN FLOWER'},
    { name: 'CARROT'},
    { name: 'ALIZARIN'},
    { name: 'CLOUDS'},
    { name: 'CONCRETE'},
    { name: 'ORANGE'},
    { name: 'PUMPKIN'},
    { name: 'POMEGRANATE'},
    { name: 'SILVER'},
    { name: 'ASBESTOS xkasjnxkjasx askxjnaskjxa sxkjasnxkjasx askjxnaksjx asjxnakjsx asxkjansxkjas xakjsxnakjsx askjxakjsxnas xkajsxnkjasnx ' },
  ]);    
  const [active,setActive] = React.useState(0);
  function prev(){
    if(items.length-1 === active){
      return setActive(0)
    }    
    setActive(active+1)      
  }
  function next(){
    if(items.length-1 === active){
      return setActive(0)
    }    
    setActive(active-1)        
  }
  return (
    <View style={[styles.container, {      
      flexDirection: "row"
    }]}>
      <View style={{ flex: .5,justifyContent:'center'}} >
        <Text style={[styles.all,styles.bt]} onPress={prev}>&larr;</Text>
      </View>
      <View style={{ flex: 5,justifyContent:'center'}} >
      <Text style={[styles.all,styles.another]}>{items[active].name}</Text>
      </View>
      <View style={{ flex: .5 ,justifyContent:'center' }} >        
        <Text style={[styles.all,styles.bt]} onPress={active==0 ?()=> setActive(0): next}>&rarr;</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },all:{
    textAlign:'center',
    fontSize:50,

    
  },another:{
    fontSize:20,    
  },
  bt:{
    
  }
});
