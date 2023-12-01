import {View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";

export default function SignInScreen({ promptAsync }) {
    return (
         <View style={styles.mainView}>


            <Text style={styles.SignInText}>Sign In</Text>
            <View style={styles.horizontalLine}></View>
            <View>
                <Image  
                    style={styles.CourierImage}   
                    source={require('../assets/CourierLogo.png')}
                />
            </View>

            <View style={styles.middle}>
                <Text style={styles.midText}>Save Your Favorite Articles. Share Them With Your Favorite People.</Text>
            </View>


             <View>
                 <TouchableOpacity style={styles.Button}>
                     <Image
                        style={styles.ImageIconStyle}
                        source={require('../assets/googlelogo.png')}
                         
                     />
                     <Text style={styles.ButtonText} onPress={() => promptAsync() }>Sign In With Google</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    SignInText: {
        fontSize: 40,
        marginTop: 90,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    horizontalLine: {
        borderColor: 'black',
        borderWidth: 0.5,
    },
    CourierImage: {
        marginTop: 40,
        height: 70,
        weight: 70,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    middle: {
        alignSelf: 'center',
        margin: 20,
        marginBottom: 50
    },
    midText: {
        marginTop: 50,
        paddingHorizontal: 35,
        fontWeight: 'bold',
        fontSize: 30,
        
    },
    Button: {
        width: '70%',
        color: '#000',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'lightgray',
        flexDirection: "row"
    },
    ImageStyle: {
        width: '40%',
        resizeMode: 'contain',
    },
    ButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 15,
        flex: 8
    },
    ImageIconStyle: {
        resizeMode: "contain",
        width: 40,
        height: 40,
        paddingTop: 50,
        paddingLeft: 20
    }
})