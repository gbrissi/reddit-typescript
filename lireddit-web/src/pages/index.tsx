import { Text, Box, Heading, Link, Stack } from "@chakra-ui/react"
import { withUrqlClient } from "next-urql"
import { Layout } from "../components/Layout"
import { usePostsQuery } from "../generated/graphql"
import { createUrqlClient } from "../utils/createUrqlClient"
import NextLink from 'next/link'

const Index = () => { 
  const [{data}] = usePostsQuery({
    variables: {
      limit: 10
    }
  });
  return (
    <Layout>
      <NextLink href='/create-post'>
          <Link>createPost</Link>
      </NextLink>
      <br/>
      {!data ? (
      <div>loading...</div>
      ) : (
        <Stack spacing = {8}>
          {data.posts.map((p) => 
            <Box key={p.id} p={5} shadow="md" borderWidth={1}>
              <Heading fontSize='xl'>{p.title}</Heading>
              <Text mt={4}>{p.textSnippet}</Text>
            </Box>
          )}
        </Stack>
      )}
    </Layout>
  )
}

export default withUrqlClient(createUrqlClient, {ssr: true})(Index)
