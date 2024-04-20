import { StyleSheet, Text, View } from "react-native";
import { formatDistance, subDays } from "date-fns";




type PostFooterType = {
    name: string,
    description: string,
    createdAt: string,
}

const PostFooter = (postFooter: PostFooterType) => {

    const {name,description,createdAt} = postFooter
    const timestamp =  new Date(createdAt);


    const dateFormated = formatDistance(timestamp, Date.now(), {addSuffix: true});

    return (
        <>
        <View style={styles.container}>
            <View style={styles.footerText}>
                <Text style={[styles.text,styles.boldText]}>{`${name}: `}</Text>
                <Text style={styles.text}>{description}</Text>
            </View>
        </View>
        <View style={styles.containerDescription}>
            <Text style={styles.subText}>{dateFormated}</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 10, 
        paddingLeft: 10
    },
    containerDescription: { 
        paddingLeft: 10,
    },
    footerText: {
        flexDirection: 'row',
    },
    boldText:{
        fontWeight:"600",
        color:'black'
    },
    text:{
        fontSize: 12,
    },
    subText:{
        fontSize: 10
    }
});

export default PostFooter