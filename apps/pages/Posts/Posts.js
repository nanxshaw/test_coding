import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import RestApi from '../../api/RestApi';
import styles from './PostsStyles';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        RestApi.ApiGet('post?limit=10').then((res) => {
            this.setState({
                list: res.data.data
            })
        })
    }

    render() {
        const { list } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={list}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.list_box}>
                            <View style={styles.row}>
                                <Image source={{ uri: item.owner.picture }} resizeMethod='resize' resizeMode='cover' style={styles.img_profile} />
                                <Text style={styles.list_user}>{item.owner.firstName + ' ' + item.owner.lastName}</Text>
                            </View>
                            <Image source={{ uri: item.image }} resizeMethod='resize' resizeMode='cover' style={styles.img} />
                            <Text style={styles.list_text}>{item.text}</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    item.tags.map((key, i) => (
                                        <View key={i} style={styles.btn_tag}>
                                            <Text style={styles.tx_tag}>{key}</Text>
                                        </View>
                                    ))
                                }
                            </ScrollView>
                        </View>
                    )}
                />
            </SafeAreaView>
        );
    }
}

export default Posts;
