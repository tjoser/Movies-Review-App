import React from "react";
import { View, Text, StyleSheet , Image, TextInput, Button} from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import setReviews from './home';


export default function ReviewPage(){


  return (
    <View style={globalStyles.container}>

<View style={globalStyles.titleBox}>
          <Text style={globalStyles.pageTitle}>Add Review</Text>
          </View>

      <Text style={styles.label}>Movie Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the movie name"
     
      />

<Text style={styles.label}>Your Rate:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the rate"
     
      />


<Text style={styles.label}>What Is Your Review:</Text>
      <TextInput
        style={styles.input}
        placeholder="What do you think about it?"
     
      />
      
      <Button title="Add Review" color={"red"}  />
    </View>
  );



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});