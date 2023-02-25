import { VStack, Text, HStack } from "native-base";
import 'react-native-gesture-handler';
import { SearchBar } from "../components/SearchBar";


export function Home(){

    return(
        <VStack flex={1} bg="yellow.400" px={10}>
           <SearchBar/>
        </VStack>
    );
}