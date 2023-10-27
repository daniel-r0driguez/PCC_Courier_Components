import {SafeAreaView, View, Text, Pressable, StyleSheet} from 'react-native';
import SideMenu from "../components/SideMenu";
import {SideMenuProvider, useSideMenu, useSideMenuUpdate} from "../context/SideMenuContext";
import CourierLogo from "../components/CourierLogo";
import DropDownMenu from "../components/DropDownMenu";

const HomeScreen = () => {
    console.log('HomeScreen render');

    // TODO figure out how to format the Side Menu element blocks.
    // TODO need to make the TabBar to navigate between pages.
    return (
        <SideMenuProvider>
            <SafeAreaView>
                {/* This is the header that contains the side menu and Courier logo */}
                <View>
                    <SideMenu>
                        <SideMenu.Header>
                            <CourierLogo/>
                        </SideMenu.Header>
                        <SideMenu.Body>
                            <DropDownMenu btnText={"hello"}>
                                <DropDownMenu.Item style={{backgroundColor:'blue'}}>
                                    <Text>One</Text>
                                    <Text>Two</Text>
                                    <Text>Three</Text>
                                </DropDownMenu.Item>
                            </DropDownMenu>
                            <DropDownMenu btnText={"hello2"}>
                                <DropDownMenu.Item>
                                    <Text>Four</Text>
                                    <Text>Five</Text>
                                    <Text>Six</Text>
                                </DropDownMenu.Item>
                            </DropDownMenu>
                        </SideMenu.Body>
                    </SideMenu>

                    <CourierLogo/>
                </View>

                {/* This is where the Feed would go */}
                <View>
                    <Text> BODY CONTENT </Text>
                </View>

                {/* TODO Need <TabBar> for the bottom of the home page screen */}
            </SafeAreaView>
        </SideMenuProvider>
    );
}

const styles = StyleSheet.create({
    sideMenuButton: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    },

    sideHeader: {
        backgroundColor:'purple'
    }
})
export default HomeScreen;