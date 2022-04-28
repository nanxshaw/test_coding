import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './HomeStyles';
import { Camera } from 'react-native-vision-camera';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = async () => {
        const newCameraPermission = await Camera.requestCameraPermission()
        const newMicrophonePermission = await Camera.requestMicrophonePermission()
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Posts')} activeOpacity={.7} style={styles.btn_camera}>
                        <Text style={styles.tx_btn}>Request Fake Rest API</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Camera')} activeOpacity={.7} style={styles.btn_camera}>
                        <Text style={styles.tx_btn}>Open Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Region')} activeOpacity={.7} style={styles.btn_camera}>
                        <Text style={styles.tx_btn}>Region</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
