import React from "react";
import { View, Text, StyleSheet , Image, TextInput, Button} from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import {reviews, setReviews} from './home';


export default function ReviewPage(){

  const [movieName, setMovieName] = useState('');
  const [rate, setRate] = useState('');
  const [review, setReview] = useState('');

  const addReview = () => {
 
    const newReview = {
      title: movieName,
      rate: parseFloat(rate),
      body: review,
      key: Math.random().toString() 
    };

    setReviews([...reviews, newReview]);

 
    setMovieName('');
    setRate('');
    setReview('');
  };



  return (
    <View style={globalStyles.container}>

<View style={globalStyles.titleBox}>
          <Text style={globalStyles.pageTitle}>Add Review</Text>
          </View>

      <Text style={styles.label}>Movie Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the movie name"
        value={movieName}
        onChangeText={(text) => setMovieName(text)}
     
      />

<Text style={styles.label}>Your Rate:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Rate (out of 5)"
        value={rate}
        onChangeText={(text) => setRate(text)}
        keyboardType="numeric"

     
      />


<Text style={styles.label}>What Is Your Review:</Text>
      <TextInput
        style={styles.input}
        placeholder="What do you think about it?"
        value={review}
        onChangeText={(text) => setReview(text)}
        multiline={true}
        numberOfLines={5}
      />
      
      <Button title="Add Review" color={"red"} onPress={addReview} />
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