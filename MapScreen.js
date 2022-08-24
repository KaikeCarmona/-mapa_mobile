import React, {useState, useEffect} from "react";
import {View,Text, StyleSheet, Dimensions, PermissionsAndroid, Platform, TextInput} from 'react-native'
import MapView from "react-native-maps";
import * as Location from 'expo-location';
// import { TextInput } from "react-native-gesture-handler";

const {width, height} = Dimensions.get('screen')

export default function MapScreen(){

    const [region, setRegion] = useState(null)

    useEffect(()=>{
        (async()=>{
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted'){ 
                console.log('Permissão de acesso negada');
                return;
            }
            const local = await Location.getCurrentPositionAsync({});
            setRegion({
                latitude: local.coords.latitude,
                longitude: local.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
        })();
    }, [])

    return(
        <View style={styles.container}>
            <MapView
            
                style={{flex:1}}
                // style={styles.map}
                initialRegion={region}
                zoomEnabled={true}
                // minZoomLevel={17}
                showsUserLocation={true}
                loadingEnabled={true}
                // mapType = {satellite}
            />
            
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        // alignItems: 'center'
    },

    // map: {
    //     width: Dimensions.get('window').width,
    //     height: Dimensions.get('window').height,
    // }
})
