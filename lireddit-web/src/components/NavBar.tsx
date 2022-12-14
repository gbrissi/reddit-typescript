import { Box, Button, Flex, Link } from '@chakra-ui/react';
import React from 'react'
import NextLink from 'next/link'
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{fetching: logoutFetching}, logout] = useLogoutMutation();
    const [{data, fetching}] = useMeQuery({
        pause: isServer()
    });
    let body = null
    
    //data is loading
    if (fetching) {
       
    } else if(!data?.me) {
        body = (
            <>
                <NextLink href='/login'>
                    <Link color='black' mr='2'>login</Link>
                </NextLink>
                <NextLink href='/register'>
                    <Link color='black'>register</Link> 
                </NextLink>
            </>
        )
    } else {
        body = (
            <Flex>
                <Box mr={2}>{data.me.username}</Box>
                <Button onClick={() => {
                    logout({})
                }} 
                variant='link'
                isLoading={logoutFetching}
                >
                    logout
                </Button>
            </Flex>
        )
    }

    return (
        <Flex zIndex={1} position='sticky' top={0} bg='tan' p={4}>
            <Box ml={'auto'}>
                {body}
            </Box>
        </Flex>
    );
}

export default NavBar