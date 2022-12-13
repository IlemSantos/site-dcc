import { Heading, Text } from "@chakra-ui/react";

import Layout from "../../components/Layout";
import api from "../../services/api";

export async function getStaticPaths() {
  const res = await api('/posts')
  const posts = res.data

  const paths = posts.map((element: any) => ({
    params: { slug: element.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context: any) {
  const { params } = context

  const res = await api(`/posts/${params.slug}`)
  const post = res.data

  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}

interface PostProps {
  post: {
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
  }
};

export default function Post({ post }: PostProps) {
  const { title, content, author, ...rest } = post;

  return (
    <Layout>
      <Heading as='h3' size='lg' mb={4}>{title}</Heading>
      {
        content.map((element, index) => (
          element.children.map((element, index) => (
            <Text key={index} mb={2}>{element.text}</Text>
          ))
        ))
      }
      <Text textAlign='end'>Author: {author}</Text>
    </Layout>
  )
}

