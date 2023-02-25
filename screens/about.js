import React from "react";
import { View, Text, StyleSheet , Image} from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";


export default function AboutPage(){




  
    return (
        <View style={globalStyles.container}>
              <View style={globalStyles.titleBox}>
          <Text style={globalStyles.pageTitle}>Optima: About Us</Text>
          </View>


          <View style={styles.imageContainer}>
            <Image source={require('../assets/optimalogo.png')} style={styles.image} />
          </View>

          
          <Text style={styles.text}>
            We are a team of developers who love to create amazing mobile apps with React Native. Our mission is to provide the best possible user experience to our customers, and we strive to achieve this goal with every app we build.
          </Text>
          <Text style={styles.text}>
            If you have any questions or feedback, please don't hesitate to contact us at ahmed.tarek.said@optima.com.
          </Text>

          


        </View>
      );
    ;

}


const styles = StyleSheet.create({
   
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
    },
    image: {
      width: 300,
      resizeMode: 'contain',
    },
    imageContainer:{
      justifyContent: 'center',
      alignItems: 'center'
    }
  });