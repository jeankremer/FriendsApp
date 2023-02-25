import { NativeBaseProvider } from 'native-base'
import 'react-native-gesture-handler';

import { SignUp } from "./src/Screens/SignUp";
import { Routes } from './routes';




export default function App() {
  return (
    <NativeBaseProvider>
      <Routes/>
    </NativeBaseProvider>
  );
}


