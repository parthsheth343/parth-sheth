import React from 'react'
import {
    Text,
    Flex,
    Heading,
    Spacer,
    Stack,
    List,
    ListItem,
} from '@chakra-ui/react'
import Card from '../generics/Card'

interface AwardCardProps {
    title: string
    organization: string
    date: string
    description: string | string[]
}

const AwardCard = (props: AwardCardProps) => {
    return (
        <Card>
            <Stack
                direction={'column'}
                spacing={4}
                align={'flex-start'}
                textAlign={{ base: 'center', md: 'left' }}
            >
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    w={'full'}
                    gap={{ base: 1, md: 4 }}
                >
                    <Stack>
                        <Heading as='h3' size='md'>
                            {props.title}
                        </Heading>
                        <Heading as='h4' size='sm' color={'blue.200'}>
                            {props.organization}
                        </Heading>
                    </Stack>
                    <Spacer />
                    <Stack textAlign={{ base: 'center', md: 'right' }}>
                        <Heading as='h5' size={'xs'} pt={[2, 0]}>
                            {props.date}
                        </Heading>
                    </Stack>
                </Flex>
                {Array.isArray(props.description) ? (
                    <List spacing={2} size='sm' color='gray.500'>
                        {props.description.map((item, index) => (
                            <ListItem key={index}>
                                • {item}
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Text size='sm' color='gray.500'>
                        {props.description}
                    </Text>
                )}
            </Stack>
        </Card>
    )
}

export default AwardCard