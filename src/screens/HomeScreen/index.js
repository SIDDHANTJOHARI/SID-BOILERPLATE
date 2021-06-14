import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from '../../components/StyledComponents';
import Header from '../../components/Header';
import styles from '../../util/styles';
import { useTheme } from '../../contexts/theme';
export default (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header {...props} />
            <View style={styles.absoluteContainer}>
                <Text>
                    This is Home screen
                </Text>
            </View>
        </SafeAreaView>
    );
}