import { NativeBaseProvider } from 'native-base'

import { SignUp } from "./src/Screens/SignUp";
import { Routes } from './routes';




export default function App() {
  return (
    <NativeBaseProvider>
      <Routes/>
    </NativeBaseProvider>
  );
}


