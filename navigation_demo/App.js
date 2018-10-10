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