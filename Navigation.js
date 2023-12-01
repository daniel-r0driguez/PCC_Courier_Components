import {NavigationContainer} from "@react-navigation/native"
import SignInScreen from "./screens/SignInScreen"
import Settings from "./screens/Settings"

export default function Navigation() {
    return (
        <NavigationContainer>
            <SignInScreen/>
            <Settings/>
        </NavigationContainer>
    )
}