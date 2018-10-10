# 安装React Navigation
```shell
npm install --save navigation_demo
```

# 修改入口文件代码
修改app.js代码
```js
import {
    createStackNavigator,
} from 'react-navigation';
import Home from "./pages/Home";
import HelloWorld from "./pages/HelloWorld";

const App = createStackNavigator({
    Home: { screen: Home },
    HelloWorld: { screen: HelloWorld },
});

export default App;
```


# 创建home和helloworld页
- 1.创建文件夹pages
- 2.创建HelloWorld.js和Home.js

#### home.js
```js
import React, { Component } from 'react';
import { Button,Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


export default class Home extends Component {
    // 控制标题内容
    static navigationOptions = {
        title: 'Home',
    };

    goHelloWorld = () => {
        this.props.navigation.navigate('HelloWorld');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button title="Go to HelloWorld page!" onPress={()=>{this.goHelloWorld()}}/>
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

#### HelloWorld.js
```js

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


export default class HelloWorld extends Component {
    // 控制标题内容
    static navigationOptions = {
        title: 'HelloWorld',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Hello World!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
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

![](https://ws1.sinaimg.cn/large/006tNbRwly1fw37qo0kkkj30j40mggno.jpg)




# 本项目github地址 [navigation_demo](https://github.com/zzlhr/react-native-demo/tree/master/navigation_demo)


