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
                {liked ? <Image source={Images.likeFilled}/>: <Image source={Images.like}/>}
                <Image source={Images.comment}/>
                <Image source={Images.share}/>
            </View>

            <View style={styles.right}>
            {saved ? <Image source={Images.bookmarkFilled}/>: <Image source={Images.bookmark}/>}
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
        padding: 10, 
    },
    containerCounters: {
        flexDirection: 'row', 
        paddingLeft: 10,
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
        paddingRight:8
    }
});

export default PostActions



