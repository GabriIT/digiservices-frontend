import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { ReactElement } from 'react';

import { FiBriefcase, FiLock, FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack  
      align={'center'}
      textAlign={'center'}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};


export default function FeaturesSection() {
  return (
    <Box p={2}>
      <Stack spacing={3} as={Container} maxW={'8xl'} textAlign={'center'} >
        <Heading fontSize={'5xl'}>How it work</Heading>
        <Text color={'gray.600'} fontSize={'xl'} textAlign={'justify'}>
        In order to ensure that dishonest behavior is penalized, DigiServices makes it possible for service providers to lock an arbitrary amount of tokens inside their proposal in the marketplace and require the same by their client. 
        These act as commitment as well as pledge in case there is a conflict.
       
        </Text>
      </Stack>

      <Box p={10} marginTop="0.5rem">
      <SimpleGrid columns={{ base: 1, md: 4}} spacing={10}>
        <Feature
          icon={<Icon as={FiBriefcase} w={10} h={10} color="gray.500"/>}
          title={'Services'}
          text={
            'It is a NFT with a reference to the contract that can be used to prove contract agreement'
          }
        />
        <Feature
          icon={<Icon as={FiTrendingUp} w={10} h={10} color="green.500" />}
          title={'Reawards'}
          text={
            'They are calculated through an algorithm that collects statistics related to the service or good provided and returns the amount of tokens per hour that will be rewarded.'
          }
        />
        <Feature
          icon={<Icon as={FiTrendingDown} w={10} h={10} color="red.500" />}
          title={'Penalties'}
          text={
            'Parties that refuse to follow the rules pre-defined in the contract will be penalized by losing tokens proportionally to the severity of their misbehavior.'
          }
        />
        <Feature
          icon={<Icon as={FiLock} w={10} h={10} color="blue.500"/>}
          title={'Reliability'}
          text={
            'You can select good service providers by analyzing the trust tokens they have and the contract they proposed.'
          }
        />
        </SimpleGrid>
      </Box>

     
    </Box>
  );
}