import { FC } from 'react'
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center,
    Link,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import headshot from '../../media/headshot.png'

const About: FC = () => {
    return (
        <Element name='aboutme'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]} mb={[20, 10]}>
                <VStack spacing={0}>
                    <Image
                            borderRadius='full'
                            boxSize='150px'
                            src={headshot}
                            border={`1px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                            mb = {4}
                        />
                    <Fade>
                        <Heading as='h2'>About me</Heading>
                    </Fade>
                    
                    <Stack
                        position='relative'
                        alignItems='center'
                        direction={['column', 'row']}
                        textAlign={{ base: 'left', sm: 'justify', lg: 'left' }}
                    >
                        
                        <VStack spacing={4} p={[10, 4]} pl={[10, 50]}>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    {/* <Center p={4}>👋🏼</Center> */}
                                    <Text textAlign="center">
                                        Hi! I'm Parth, a <b>Computer Science</b> and
                                        <b> Mathematics</b> Student at <b>Stanford University</b>. 
                                        I was born in Ontario, Canada, but moved to Calgary 
                                        at a young age. I'm passionate about a wide variety of topics, 
                                        including software engineering, AI research, and quantitative 
                                        finance. I always love meeting new people, so feel free to 
                                        reach out!
                                        {/* Hi, I'm Parth and I'm a final year co-op
                                        student at the{' '}
                                        <b>University of Toronto</b> with a
                                        passion for <b>Software Engineering</b>. */}
                                    </Text>
                                </Flex>
                            </Fade>
                            {/* <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                        I'm pursuing an HBSc with a{' '}
                                        <b>
                                            Specialist in Computer Science (ASIP
                                            co-op)
                                        </b>{' '}
                                        and <b>Major in Cognitive Science</b>,
                                        graduating class of 2026.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                        I have interned as a <b>Software Developer at theScore</b>, as well as a{' '}
                                        <b>
                                            Software Engineering Intern at
                                            NerveX
                                        </b>{' '}
                                        working in full-stack development. I also have experience as a developer at various student organizations, including <b>UofT Blueprint, UTMIST,</b> and <b>UofT AI</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                        I'm experienced in full-stack web
                                        development - particularly with{' '}
                                        <b>Typescript</b> and <b>Python</b>.{' '}
                                        <b>ReactJS/NextJS</b> is my frontend framework
                                        of choice and I've worked in backend
                                        with{' '}
                                        <b>NodeJS, .NET Core, Java,</b> and <b>Python</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🧠</Center>
                                    <Text>
                                        In addition to Software Engineering, I
                                        am also interested in the confluence of
                                        artificial intelligence and cognitive
                                        science, as well as photography! Check
                                        out my&nbsp;
                                        <Link
                                            href='https://photo.jasonfyw.com'
                                            isExternal
                                            fontWeight={'semibold'}
                                            borderBottom={
                                                '2px solid rgb(154, 228, 217)'
                                            }
                                            transition={'0.2s'}
                                            _hover={{
                                                textDecor: 'none',
                                                opacity: 0.9,
                                            }}
                                        >
                                            photography portfolio to learn more
                                            about my creative work.
                                        </Link>
                                    </Text>
                                </Flex>
                            </Fade> */}
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default About
