import { Button, Text, View} from "react-native";

export default function Settings() {
    return (
        <View>
            <Button title="Sign Out" onPress={async () => await signOut(auth)}/>
        </View>
    )
}