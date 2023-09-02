import react from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props){
    //const { firstname ="Lattanzi", lastname="Luciano"} = props;
    const { firstname, lastname} = props;
    
    
    return <Text>Hola {firstname} {lastname} </Text>;
} 

// Saludar.defaultProps = {
//     firstname: "Lattanzi",
//     lastname: "Luciano"
// }

Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string
}