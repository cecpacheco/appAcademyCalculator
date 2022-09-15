import React from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Buttons = ({ operation }) => {
    const numbers = [
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['0', ',', '='],
    ]
    const operations = ['AC', '÷', '×', '-', '+']
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.numbers}>
                <Text style={styles.title}>App Academy Calculator</Text>
                {numbers.map((row, i) => 
                    <View key={i} style={styles.row}>
                        {row.map(char => 
                            <TouchableOpacity
                                key={char}
                                style={styles.buttons}
                                onPress={() => operation(char)}
                            >
                                <Text style={styles.buttonText}>{char}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </SafeAreaView>
            <SafeAreaView style={styles.operations}>
                {operations.map(char => 
                    <TouchableOpacity
                        key={char}
                        style={[
                            styles.buttons,
                            char == 'AC' && styles.buttonClear
                        ]}
                        onPress={() => operation(char)}
                    >
                        <Text style={styles.buttonText}>{char}</Text>
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        padding: 20,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 20,
    },
    numbers: {
        flex: 3,
    },
    operations: {
        flex: 1,
    },
    buttons: {
        flex: 1,
        aspectRatio: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#454545',
        borderRadius: 100,
        overflow: 'hidden',
    },
    buttonClear: {
        backgroundColor: '#f76e19',
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
    }
})

export default Buttons;