import {Text, View, Pressable, StyleProp, ViewStyle} from 'react-native'
import React, {useState} from "react";

type DropDownMenuProps = {
    btnText: string;
    children: React.ReactNode;
}

type DropDownMenuItemProps = {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}
const DropDownMenu = ({btnText, children}: DropDownMenuProps) => {

    const [showItems, setShowItems] = useState<boolean>(false);

    const toggleShowItems = () => {
        setShowItems((prevShowItems) => !prevShowItems);
    }

    return (
        <View>
            <Pressable onPress={toggleShowItems}>
                <Text>{btnText}</Text>
            </Pressable>
            {showItems && <View>{children}</View>}
        </View>
    )
}

const DropDownMenuItem = ({style, children}: DropDownMenuItemProps) => {
    return (
        <View style={style}>
            {children}
        </View>
    )
}

DropDownMenu.Item = DropDownMenuItem;

export default DropDownMenu;