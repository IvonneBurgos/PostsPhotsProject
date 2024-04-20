import { Image, StyleSheet, Text, View } from "react-native";
import Images from "../assets";

type PostActionsType = {
    likes: number,
    liked: boolean,
    saved: boolean,
    comments: number
}

const PostActions = (postActions: PostActionsType) => {
    const {likes,liked,saved,comments} = postActions

    return (
        <>
        <View style={styles.container}>
            <View style={styles.left}>
                {liked ? <Image style={[styles.image,{tintColor:'red'}]} source={Images.likeFilled}/>: <Image style={styles.image} source={Images.like}/>}
                <Image style={styles.image} source={Images.comment}/>
                <Image style={styles.image} source={Images.share}/>
            </View>

            <View style={styles.right}>
            {saved ? <Image style={styles.image} source={Images.bookmarkFilled}/>: <Image style={styles.image} source={Images.bookmark}/>}
            </View>
        </View>
        <View style={styles.containerCounters}>
            <Text style={styles.counterText}>{`${comments.toString()} comentarios`}</Text>
            <Text style={styles.counterText}>{`${likes.toString()} me gustas`}</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop:10,
        paddingLeft:10
    },
    containerCounters: {
        flexDirection: 'row', 
        paddingLeft: 10,
    },
    image:{
        marginRight: 8,
    },
    left: {
        flexDirection: 'row',
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    counterText:{
        fontSize: 12,
        paddingRight:8,
        color: 'black'
    }
});

export default PostActions



