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
            width={30}
            height={30}
            source={{
            uri: 'https://picsum.photos/30/30',
            }}
            onError={(error) => console.log(error.nativeEvent)} />
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
        width: 30, 
        height: 30, 
        borderRadius: 30,
        marginRight: 8
    },
    textContainer: {
        justifyContent: 'center', 
    },
    text: {
        fontSize: 12,
    },
});

export default PostHeader