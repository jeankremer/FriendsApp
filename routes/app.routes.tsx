import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { SignUp } from "../src/Screens/SignUp";
import { Home } from "../src/Screens/Home";




export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SignUp" component={SignUp} />
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}