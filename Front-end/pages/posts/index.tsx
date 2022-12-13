import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

import Layout from '../../components/Layout';
import api from '../../services/api';

export async function getStaticProps() {
  const res = await api('/posts')
  const posts = res.data

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

interface NewsProps {
  posts: {
    slug: string;
    title: string;
    content: {
      type?: string | undefined;
      children: {
        text: string;
      }[];
    }[];
    type?: string | undefined;
    id?: number | undefined;
    status?: string | undefined;
    link?: string | undefined;
    author?: string | undefined;
  }[]
};

export default function News({ posts }: NewsProps) {
  return (
    <Layout>
      <Heading mb={4}>Principais notícias</Heading>
      <Flex flexWrap='wrap' gap={6}>
        {
          posts.map((element, index) => (
            <Stack direction='column' w='md' p={4} bg='white' borderRadius='md' key={index}>
              <Heading as='h4' size='md' mb={2}>{element.title}</Heading>
              <Box my={2}>
                {
                  element.content.map((element, index) => (
                    element.children.map((element, index) => (
                      <Text key={index} mb={2}>{element.text}</Text>
                    ))
                  ))
                }
              </Box>
              <Link href={`/posts/${element.slug}`}>Ver mais</Link>
            </Stack>
          ))
        }
      </Flex>
    </Layout>
  )
}