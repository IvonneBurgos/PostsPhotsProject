import { Image, StyleSheet, Text, View } from "react-native"


type PostHeaderType = {
    avatar : string
    username: string
    location: string
}

const PostHeader = (post: PostHeaderType) => {
    const { avatar, username, location} = post
    return (
        <View style={styles.container}>
            <Image
            style={styles.image}
            width={20}
            height={20}
            source={{
            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg',
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
        width: 25, 
        height: 25, 
        borderRadius: 25,
        marginRight: 10, 
    },
    textContainer: {
        justifyContent: 'center', 
    },
    text: {
        fontSize: 10,
    },
});

export default PostHeader