import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import CourierLogo from "../components/CourierLogo";
import SideImageButton from "../components/SideImageButton";

const LoginScreen = () => {
    console.log('LoginScreenRender');
    return (
        <SafeAreaView style={styles.outerContainter}>
            <View style={styles.container}>
                <Image style={styles.imageStyle} resizeMode={"contain"} source={require('./../assets/pcclogo.png')}/>
                <CourierLogo/>
                <SideImageButton onClick={() => console.log('Google Logic')}
                                 relativeImageSource={require('./../assets/pcclogo.png')}
                                 text={'Continue with Google'}/>
                <SideImageButton onClick={() => console.log('Lancerpoint Logic')}
                                 relativeImageSource={require('./../assets/pcclogo.png')}
                                 text={'Continue with LancerPoint'}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    outerContainter:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    imageStyle: {
        width: 170,
        height: 120,
        paddingBottom: 0
    }
});

export default LoginScreen;