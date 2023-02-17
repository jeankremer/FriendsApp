import { VStack, Input, Stack, Icon, Pressable, Heading  } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../components/Button';
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';



export function SignUp(){

    const { navigate } = useNavigation()

    const [show, setShow] = useState();


    return(
        <VStack 
            flex={1}
            bgColor="success.900"
            px={10}
            justifyContent="center"
        >


            <Heading
                mb={5}
                textAlign="center"
                color="success.100"
            >
                Açucar Refinado
            </Heading>

            <Stack space={4} w="100%" alignItems="center" mb={5}>
                
                <Input
                    borderRadius={20}
                    borderColor="success.300"
                    
                    w={{    
                        base: "75%",
                        md: "25%"
                    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="black" />} placeholder="Name" placeholderTextColor="white" fontSize="sm" 
                />
                
                <Input 
                borderColor="success.300"
                borderRadius={20}
                w={{
                    base: "75%",
                    md: "25%",
                }} 
                InputLeftElement={<Icon as={<Entypo name="key" size={15} color="black"/>} ml={2} color="black"/>}
                type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)} borderColor="success.300">
                        <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="black" />
                    </Pressable>} 
                        placeholder="Password" 
                        placeholderTextColor="white" 
                        fontSize="sm"       
                    />
            </Stack>

            <Button
                title="Logar"
                onPress={() => navigate('Home')}  
            />

        </VStack>
    );
}