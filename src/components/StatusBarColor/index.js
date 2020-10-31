import React from 'react';
import { StatusBar, View, Platform } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const StatusBarColor = ({ backgroundColor, barStyle }) => {
    return (
        <View style={{ marginBottom: STATUSBAR_HEIGHT, backgroundColor: backgroundColor }}>
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle={barStyle}
                translucent
            />
        </View>
    )
}

export { StatusBarColor }