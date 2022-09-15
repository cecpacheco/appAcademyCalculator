import React from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

const Display = ({ state, result }) => (
    <View style={styles.container}>
        <SafeAreaView style={styles.safe}>
            <Text
                style={styles.display}
                adjustsFontSizeToFit
                numberOfLines={1}
            >
                {state}
            </Text>
            { result !== '' &&
                <Text
                    style={styles.result}
                    adjustsFontSizeToFit
                    numberOfLines={1}
                >{result}</Text>
            }
        </SafeAreaView>
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 24,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        overflow: 'hidden',
    },
    safe: {
        flex: 1,
        justifyContent: 'space-around',
    },
    display: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: "#111",
        fontSize: 40,
    },
    result: {
        textAlign: 'right',
        color: "#111",
        fontSize: 30,
    },
})

export default Display;