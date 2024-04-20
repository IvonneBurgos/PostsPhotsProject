import { Image, StyleSheet, Text, View } from "react-native"

type PostHeaderType = {
    avatar : string
    username: string
    location: string
}

const PostHeader = (postHeader: PostHeaderType) => {
    const { avatar, username, location} = postHeader

    return (
        <View style={styles.container}>
            <Image
            style={styles.image}
            width={20}
            height={20}
            source={{
            uri: avatar,
            }} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{username}</Text>
                <Text style={styles.text}>{location}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 10, 
    },
    image: {
        width: 20, 
        height: 20, 
        borderRadius: 20,
    },
    textContainer: {
        justifyContent: 'center', 
    },
    text: {
        fontSize: 10,
    },
});

export default PostHeader