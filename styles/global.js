import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create(
    {
        container:{
            flex: 1,
            padding: 20,
        },
        pageTitle:{
            fontSize: 20,
            color: "white",
            textAlign: 'center',
            fontWeight: "bold",
            padding:15,
        },
        titleBox:{
            backgroundColor: 'orange',
             borderWidth: 2,
             marginBottom:10,
             borderStyle:"dashed",
             borderColor:"red",
             


        }
        ,
        paragraph:{
            marginVertical:8,
            lineHeight: 20,
            
        }

    }
)