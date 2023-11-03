//import "react-native-gesture-handler";
import SignInScreen from "./screens/SignInScreen";
import * as React from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from "firebase/auth";
import {auth} from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [userInfo, setUserInfo] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '565230808554-an0tsddpuhjqhsa565c9a6e2a6u1rvot.apps.googleusercontent.com',
    androidClientId: '565230808554-48g7stpt35ee6jl8blfvue359modc1c4.apps.googleusercontent.com',
  });

  const checkLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      console.log("local storage", userData);
      setUserInfo(userData);
    }
    catch(e)
    {
      alert(e.message);
    }
    finally {
      setLoading(false);
    }

  }

  // will save user to firebase cloud
  React.useEffect(() => {
    if (response?.type == 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  
  React.useEffect(() => {
    checkLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
        await AsyncStorage.setItem("@user", JSON.stringify(user));
      }
      else {
        console.log("User is not authenticated");
      }
    });


    return () => unsub();
  }, [])

  if (loading) 
  return <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
    <ActivityIndicator size={"large"}></ActivityIndicator>
  </View>
  //return userInfo ? <Navigation/> : <SignInScreen promptAsync={promptAsync} />;
  return <SignInScreen promptAsync={promptAsync}/>
}
