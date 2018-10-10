# 简介
>React Native Elements also serves as a platform that connects small teams/individuals that needs help developing their RN app with open source contributors that are willing to build complex UI screens & animated interactions for 💰💰💰.


[react-native-elements](https://github.com/react-native-training/react-native-elements)是一个ui工具包，封装了很多我们常用的组件供我们调用。


# 创建项目
```
react-native init elements_ui_demo
cd elements_ui_demo
```

# 安装react-native-elements

```
npm install react-native-elements --save
react-native link
```

如果出现
```
Unable to resolve module `react-native-vector-icons/MaterialIcons` from `/Users/lhr/react-native-demo/elements_ui_demo/node_modules/react-native-elements/src/buttons/Button.js`: Module `react-native-vector-icons/MaterialIcons` does not exist in the Haste module map
```
执行
```
npm install react-native-vector-icons --save
react-native link
```
然后重启项目



修改app.js代码
```js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import { Button } from 'react-native-elements'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button backgroundColor={'#3584F7'} title={'Hello World'} onPress={()=>{
            Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

```
#### 本文[github](https://github.com/zzlhr/react-native-demo/tree/master/elements_ui_demo)

![](https://ws3.sinaimg.cn/large/006tNbRwly1fw39sryyszg308y0hodk1.gif)



