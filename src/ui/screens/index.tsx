import React, { useEffect, useState } from "react";
import PostHeader from "../molecules/postHeader";
import { usePostContext } from "../../data/PostProvider";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { Post } from "../../domain/Post";
import usePost from "../../data/usePost";

const renderPosts = ({ item }: {item:Post})=> {
    
    return (
        <>
            <PostHeader avatar={item.avatar} username={item.name} location={item.location}></PostHeader>
            <Image
                style={styles.image}
                width= {640}
                height={480}
                resizeMode='cover'
                source={{
                uri: item.image,
            }} />
            
        </>
    )
}

const PostScreen = () => {
    const {posts , loading} = usePost()

    return (

        <View style={{flex:1}}>
            {!loading && <FlatList data={posts} renderItem={renderPosts} keyExtractor={(item:Post) => item.id}/>}
        </View>
        
    )
    
}

const styles = StyleSheet.create({

    image: {
        width:'100%',
        height: 480, 

    },
});

export default PostScreen