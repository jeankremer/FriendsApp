import {Button as ButtonNativeBase, IButtonProps, Text} from 'native-base'

type Props = IButtonProps & {
    title: string;
}

export function Button({title, ...rest}: Props){
    return(
        <ButtonNativeBase
            borderRadius={20}
            bgColor="yellow.900"
            w="75%"
            alignSelf="center"
            _pressed={{
                bgColor: 'yellow.600'
                
            }}

            {...rest}
        >
            <Text
                color="white"
                fontSize="md"
                fontWeight="bold"
            >
                {title}
            </Text>
        </ButtonNativeBase>
    );
}