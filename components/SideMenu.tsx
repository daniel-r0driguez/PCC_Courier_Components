import React from 'react';
import {View, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, Pressable} from "react-native";
import {useSideMenu, useSideMenuUpdate} from "../context/SideMenuContext";

type SideMenuProps = {
    children: React.ReactNode;
}

type SideMenuChildProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
const SideMenu = ({children}: SideMenuProps) => {
    const show = useSideMenu();
    const toggleShow = useSideMenuUpdate();
    return (
        <View style={styles.container}>
            <Pressable onPress={toggleShow} style={styles.sideMenuBtn}/>
            {show && <View>{children}</View>}
        </View>
    );
}

const SideMenuHeader = ({children, style}: SideMenuChildProps) => {
    const toggleShow = useSideMenuUpdate();
    return (
        <View style={style}>
            {children}
            <TouchableOpacity style={styles.sideMenuBtn} onPress={toggleShow}/>
        </View>
    );
}

const SideMenuBody = ({children, style}: SideMenuChildProps) => {
    return (
        <View style={style}>
            {children}
        </View>
    );
}

const SideMenuFooter = ({children, style}: SideMenuChildProps) => {
    return (
        <View style={style}>
            {children}
        </View>
    );
}

SideMenu.Header = SideMenuHeader;
SideMenu.Body = SideMenuBody;
SideMenu.Footer = SideMenuFooter;

// TODO work on the styles to make it look like an actual side menu.
const styles = StyleSheet.create({
    container:{
        position: "absolute",
        top: 0,
        zIndex: 1,
        // transform: [{translateX: 100}],
        display: "flex",
        width: '70%',
        height: 1000,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: 'green',
        justifyContent: "space-between"
    },

    sideMenuBtn:{
        height:100,
        width:100,
        backgroundColor: 'red'
    },

    sideMenuBackground:{
        flexDirection: 'row',
        backgroundColor: 'blue'
    }
})

export default SideMenu;