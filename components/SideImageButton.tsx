import {Text,Pressable, Image, StyleSheet} from 'react-native';

type SideImageButtonProps = {
    onClick: () => void,
    relativeImageSource: string
    text:string
}
const SideImageButton = ({onClick, relativeImageSource, text}: SideImageButtonProps) => {
    return (
        <Pressable style={styles.container} onPress={onClick}>
            <Image style={styles.imageStyle} resizeMode={'contain'} source={relativeImageSource as never}/>
            <Text style={styles.textStyle}>{text}</Text>
        </Pressable>
    );
}

// TODO fix the styles!!!
const styles = StyleSheet.create({
    container:{
        display:"flex",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: '#e8e8e8',
        borderRadius: 25
    },

    imageStyle:{
        width: 70,
        height: 50,
        marginLeft: 50
    },

    textStyle:{
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default SideImageButton;