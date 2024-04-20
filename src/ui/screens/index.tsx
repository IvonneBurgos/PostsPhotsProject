import React, { useEffect, useState } from "react";
import PostHeader from "../molecules/postHeader";
import { usePostContext } from "../../data/PostProvider";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { Post } from "../../domain/Post";
import usePost from "../../data/usePost";
import PostActions from "../molecules/postActions";
import PostFooter from "../molecules/postFooter";

const renderPosts = ({ item }: {item:Post})=> {
    return (
        <View style={styles.container} key={item.id}>
            <PostHeader avatar={item.avatar} username={item.name} location={item.location}/>
            <Image
            style={styles.image}
            width= {640}
            height={480}
            resizeMode='cover'
            source={{
            uri: item.image + '?v=' + item.id,
            }} />
            <PostActions likes={item.likes} liked={item.liked} comments={item.comments} saved={item.saved}/>
            <PostFooter name={item.name} description={item.description} createdAt={item.createdAt} />
        </View>
    )
}

const PostScreen = () => {
    const {posts, loading} = usePostContext()
    return (
        <View style={{flex:1}}>
            {!loading && <FlatList data={posts} renderItem={renderPosts} keyExtractor={(item:Post) => item.id} viewabilityConfig={{waitForInteraction: true, viewAreaCoveragePercentThreshold: 50}}/> }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingBottom: 16
    },
    image: {
        width:'100%',
        height: 480, 
    },
});

export default PostScreen