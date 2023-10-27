import {StyleSheet, View, Text} from "react-native";

const CourierLogo = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.courierText}>COURIER</Text>
            <Text style={styles.yearText}>EST. 1915</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 10,
    },

    courierText: {
        margin: 0,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 50,
        fontWeight: "bold"
    },

    yearText: {
        margin: 0,
        paddingBottom: 10
    }
});

export default CourierLogo;