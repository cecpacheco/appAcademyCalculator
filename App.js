import React, { useState } from 'react';
import type {Node} from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Display from './src/components/Display';
import Buttons from './src/components/Buttons';

const App: () => Node = () => {

    const [display, setDisplay] = useState('');
    const [result, setResult] = useState('');

    handleOperation = operation => {
        if (operation === 'AC') {
            setDisplay('')
            setResult('')
        }
        else if(operation === '=') {
            setDisplay(result)
            setResult('')
        }
        else {
            const calc = display + operation
            let resultCalc = result
            try {
                let calcOperation = calc.split('×').join('*')
                calcOperation = calcOperation.split('÷').join('/')
                calcOperation = calcOperation.split(',').join('.')
                resultCalc = new String(eval(calcOperation)).toString()
            }catch(e) {
                console.log(e)
            }
            setDisplay(calc)
            setResult(resultCalc)
        }
    }
    
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Display state={display} result={result} />
                <Buttons operation={this.handleOperation} />
            </View>
        );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#666',
    },
});

export default App;