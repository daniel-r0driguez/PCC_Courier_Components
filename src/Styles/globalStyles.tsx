import {StyleSheet} from "react-native";
import {myColors} from "./colors";
import { useFonts } from 'expo-font';

// const [fontsLoaded] = useFonts({
//     'Roboto-Black': require('.assets/fonts/Roboto-Black.ttf'),
//     'Roboto-BlackItalic': require('.assets/fonts/Roboto-BlackItalic.ttf'),
//     'Roboto-Bold': require('.assets/fonts/Roboto-Bold.ttf'),
//     'Roboto-BoldItalic': require('.assets/fonts/Roboto-BoldItalic.ttf'),
//     'Roboto-Light': require('.assets/fonts/Roboto-Light.ttf'),
//     'Roboto-LightItalic': require('.assets/fonts/Roboto-LightItalic.ttf'),
//     'Roboto-Medium': require('.assets/fonts/Roboto-Medium.ttf'),
//     'Roboto-MediumItalic': require('.assets/fonts/Roboto-MediumItalic.ttf'),
//     'Roboto-Regular': require('.assets/fonts/Roboto-Regular.ttf'),
//     'Roboto-Thin': require('.assets/fonts/Roboto-Thin.ttf'),
//     'Roboto-ThinItalic': require('.assets/fonts/Roboto-ThinItalic.ttf'),
// });

export const Styles = StyleSheet.create(


    {
        container:{
            flex: 1,
            flexDirection: 'column',
            padding: 24,
            backgroundColor: myColors.black,

        },

        //unused
        title: {
            marginTop: 30,
            paddingVertical: 8,
            borderWidth: 2,
            borderColor: myColors.black,
            borderRadius: 2,
            backgroundColor: myColors.red,
            color: myColors.white,
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
        },

        button: {
            paddingHorizontal: 30,
            paddingVertical: '7.5%',
            borderRadius: 6,
            backgroundColor: myColors.gray,
            alignSelf: 'flex-end',
            marginHorizontal: '1%',
            marginBottom: 1,
            minWidth: '0%',
            textAlign: 'center',
        },

        //unused
        viewBottom: {
            flex: 1,
            padding: 26,
            justifyContent: 'center',
            marginBottom: 36,
            flexDirection: 'row',
        },

        text: {
            flex: 1,
            color: myColors.white,
            position: 'absolute',
            fontSize: 30,
            fontWeight: 'bold',
            // fontFamily: 'Roboto-Regular'
        },

        pasadenaEvents: {
            alignItems: 'center',
        },

        scrollViewContent: {
            marginTop: 10,
            alignItems: 'center',
        },

        eventItem: {
            marginBottom: 15,
        },

        eventTitle: {
            marginTop: 0,
            paddingVertical: 8,
            paddingHorizontal: 8,
            color: myColors.white,
            textAlign: 'flex-start',
            fontSize: 20,
            // fontFamily: 'Roboto-Bold',
            fontWeight: 'bold',

        },
        eventDate: {
            color: myColors.white,
            fontWeight: 'bold',
            paddingHorizontal: 8,
        },
        eventExcerpt: {
            color: 'white',
            paddingHorizontal:8,
            marginTop: 5,
            marginBottom: 10,
        },

        chosenTitle: {
            color: 'black',
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            paddingBottom: 10,
            paddingTop: 5,
        },

        pickerStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            width: '35%',
            paddingVertical: 8,
            paddingHorizontal: 2,
            borderWidth: 2,
            borderColor: myColors.white,
            borderRadius: 2,
            color: myColors.white,
            marginBottom: 10
        },

        centerContainer: {
            marginTop : 10,
            alignItems: 'center'
        },

        sideContainer:{
            alignItems: 'flex-end',
            
        },

        searchInput: {
            marginBottom: 10,
            borderWidth: 2,
            paddingVertical: 8,
            paddingHorizontal: 8,
            width: '80%',
        },

        excerptBox: {

        },

        eventImage: {
            width: '100%',
            aspectRatio: 16 / 9,
            resizeMode: "cover",
            borderRadius: 15,  // Set the border radius to round the edges
        },

        logo: {
            width: 150, // Adjust the width as needed
            height: 40, // Adjust the height as needed
            resizeMode: 'contain',
            marginBottom: 10,
            marginTop: 30,
            marginRight:120
        },

        topBar: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginBottom: 10,
        },

        sidebarIcon: {
            width: 27,
            height: 9,
            alignItems:'flex-start',
            marginTop: 25,
            marginRight: 90,
            marginBottom: -30
        },

        sidebar: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 200, // Adjust the width as needed
            height: '100%',
            backgroundColor: myColors.white,
            zIndex: 1,
            padding: 16,
        },
        jessieMod: {
            justifyContent: 'center'
        }
    }
)