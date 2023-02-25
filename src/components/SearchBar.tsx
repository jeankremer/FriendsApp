import { VStack, Heading, Input, Divider, Box, Icon  } from 'native-base'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

export function SearchBar(){


    return(
    <VStack mt={10} my="4" space={5} w="100%"  divider={<Box px="2">
            <Divider />
            </Box>}>
    
        <VStack w="100%" space={5} alignSelf="center">
            <Heading fontSize="md" textAlign="center" color="yellow.800">Cerveja Barata</Heading>
            <Input placeholder="Digite a cerveja que procura" placeholderTextColor="black" width="100%" borderColor="yellow.800" borderRadius="20" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="black" as={<MaterialIcons name="search" />} />} />
        </VStack>
    </VStack>
    );
}