import React from 'react';
import { SafeAreaView, View, Image, StyleSheet, StatusBar} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CourierLogo from '../components/CourierLogo';
import SideImageButton from '../components/SideImageButton';

const LoginScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={[styles.outerContainer, { paddingTop: insets.top }]}>
            <View style={styles.statusBarBackground} />
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.imageStyle}
                        resizeMode="contain"
                        source={require('./../assets/pcclogo.png')}
                    />
                </View>
                <View style={styles.courierLogoContainer}>
                    <CourierLogo />
                </View>
                    <SideImageButton
                        onClick={() => console.log('Google Logic')}
                        relativeImageSource={require('./../assets/pcclogo.png')} // replace wtih googe logo
                        text={'Continue with Google'}
                        containerStyle={styles.buttonContainer}
                        buttonWidth={290}
                    />
                    <SideImageButton
                        onClick={() => console.log('Lancerpoint Logic')}
                        relativeImageSource={require('./../assets/pcclogo.png')} // replace w/ lancerpoint black logo
                        text={'Continue with LancerPoint'}
                        containerStyle={styles.buttonContainer}
                        buttonWidth={290}

                    />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    statusBarBackground: {
        backgroundColor: 'black',
        height: 25,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
    },

    courierLogoContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        top: 30, // check this one again. why did i put it again? does it make a difference?

    },

    buttonContainer: {

        backgroundColor: '#EBEBEB',
       borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 0,
        marginBottom: 15,
        bottom: 35,

    },

    imageStyle: {
        width: 200,
        height: 200,
        paddingBottom: 400,
    },
});

export default LoginScreen;
