import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function HomePage(){
    const [reviews, setReviews] = useState([
        {title:"Shutter island", rate: 5, body:"Shutter Island is a cinematic masterpiece that delves deep into the psychological complexities of the human mind. From the mesmerizing cinematography to the haunting soundtrack, every element of this film is meticulously crafted to transport the viewer to a world of mystery and intrigue.        ", key:"1"},
        {title:"Manchester by the sea", rate: 4.5, body:"Manchester by the Sea is a cinematic masterpiece, a true tour de force of melodrama and existential ennui. With its gritty New England setting and unflinching portrayal of grief, this film is a veritable feast for the senses. Casey Affleck's brooding performance as a haunted handyman is nothing short of breathtaking, while the understated yet evocative soundtrack adds an extra layer of emotional depth", key:"2"},
        {title:"7. Koğuştaki Mucize", rate: 4, body:"Koğuştaki Mucize is a cinematic masterpiece that will leave you questioning the very fabric of your being. The artistry of the director is evident in every frame, and the performances of the actors will leave you breathless. It is a poignant meditation on the human condition, and a triumphant celebration of the indomitable spirit of the human soul. This film will move you, it will challenge you, and it will leave you forever changed. In short, 7. Koğuştaki Mucize is a work of sublime genius that simply must be seen to be believed.", key:"3"},
        
    ])


    const deleteReview = (key) => {
        setReviews(prevReviews => prevReviews.filter(review => review.key !== key));
      }

return(
    <View style={globalStyles.container} >
        <View style={globalStyles.titleBox}>
        <Text style={globalStyles.pageTitle}>Your Past Reviews</Text>

        </View>

    <FlatList
    data={reviews}
    renderItem = {({item}) =>(
        <View style= {styles.movieBox}>
            <View style={{ flexDirection: 'row' }}>
            <Ionicons name="videocam" size={30} color="red" />
            <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
            
            

            <View style={{ flexDirection: 'row' , marginBottom:5,  justifyContent: 'center',
    alignItems: 'center'}}>
            <Ionicons name="ios-star" size={20} color="yellow" />
            <Text style={{ paddingTop:5, paddingLeft:5, paddingRight:5 }} >Your Rate: {item.rate} out of 5</Text>
            <Ionicons name="ios-star" size={20} color="yellow" />
            </View>


            <Text>{item.body}</Text>
<View>
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 10 , backgroundColor:"yellow", padding:7}} onPress={() => deleteReview(item.key)}>
        <Text style={{ color: 'red', fontWeight:'bold' }}>Delete</Text>
      </TouchableOpacity>
      </View>


        </View>
    )}
      />  
  </View>
)

}


const styles = StyleSheet.create({
    movieBox:{
    backgroundColor: 'pink',
    borderWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom:10,
    padding:10,
    },
    movieTitle:{
            fontWeight:"bold",
            paddingBottom:5,
            fontSize:19,
            paddingTop: 5,
            paddingHorizontal:5,
    }
})
