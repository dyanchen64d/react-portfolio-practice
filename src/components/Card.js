import { Heading, HStack, Image, Text, VStack, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      w={'460px'}
      bg="white"
      borderRadius={'lg'}
      alignContent="space-between"
    >
      <Image
        w={'full'}
        src={imageSrc}
        alt={title}
        borderRadius="lg"
        marginBottom={'10px'}
      />
      <Heading
        paddingX={'10px'}
        color={'black'}
        fontSize="md"
        alignSelf={'flex-start'}
      >
        {title}
      </Heading>
      <Text paddingX={'10px'} color={'gray.600'} fontSize="sm">
        {description}
      </Text>
      <Link
        color={'black'}
        fontSize={'sm'}
        alignSelf={'flex-start'}
        paddingLeft={'10px'}
        paddingBottom={'10px'}
      >
        See more
        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 5 }} />
      </Link>
    </VStack>
  );
};

export default Card;
