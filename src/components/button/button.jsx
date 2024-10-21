import { Alert, Text, TouchableOpacity, TouchableOpacityComponent } from "react-native";

function Button(props) {
    function TestClick(){
        Alert.alert("Click in button.")
    }
    return  <TouchableOpacity onPress={TestClick}>
            <Text style={{
                color: 'green',
                fontSize: 16
            }}>{props.text}</Text>
    </TouchableOpacity>
   
}

export default Button;