import { Text, Box, Heading, Link, Stack, Flex, Button } from "@chakra-ui/react"
import { withUrqlClient } from "next-urql"
import { Layout } from "../components/Layout"
import { usePostsQuery } from "../generated/graphql"
import { createUrqlClient } from "../utils/createUrqlClient"
import NextLink from 'next/link'

const Index = () => { 
  const [{data, fetching}] = usePostsQuery({
    variables: {
      limit: 10
    }
  });

  if(!fetching && !data) {
    return <div>your query failed</div>
  }

  return (
    <Layout>
      <Flex align='center'>
        <Heading>LiReddit</Heading>
        <NextLink href='/create-post'>
            <Link ml='auto'>createPost</Link>
        </NextLink>
      </Flex>
      <br/>
      {fetching && !data ? (
        <div>loading...</div>
      ) : (
        <Stack spacing = {8}>
          {data!.posts.map((p) => 
            <Box key={p.id} p={5} shadow="md" borderWidth={1}>
              <Heading fontSize='xl'>{p.title}</Heading>
              <Text mt={4}>{p.textSnippet}</Text>
            </Box>
          )}
        </Stack>
      )}
      {data ? (<Flex>
        <Button isLoading={fetching} m='auto' my={8}>load more</Button>
      </Flex>) : null}
    </Layout>
  )
}

export default withUrqlClient(createUrqlClient, {ssr: true})(Index)
