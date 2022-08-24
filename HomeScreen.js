import { StyleSheet, Text, View, TouchableOpacity} from "react-native";


function HomeScreen({navigation}){
    return(
        
        <View style={styles.container}>


                <TouchableOpacity style={styles.buttonHome} onPress={() => navigation.navigate("MapScreen")}>
                    <Text style={{fontSize: 14, color: "white", textAlign: 'center'}}>Ir para o Maps</Text>
                </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonHome: {
        alignItems: "center",
        justifyContent: "center",
        width: 115,
        height: 45,
        borderRadius: 15,
        backgroundColor: '#590232',
        marginTop: 100,
        cursor: 'pointer',
    },
})

export default HomeScreen;