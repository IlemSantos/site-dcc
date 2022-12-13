import { Box, Button, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout_Admin";
import api from "../../../services/api";

interface PostsProps {
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
    updatedAt: any;
  }[]
};

export default function Posts({ posts }: PostsProps) {
  const router = useRouter()

  return (
    <Layout>
      <Box>
        <Heading mb={6}>Notícias</Heading>

        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Título</Th>
                <Th>Autor</Th>
                <Th>Status</Th>
                <Th>Update</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                posts.map((element, index) => (
                  <Tr key={index}>
                    <Td>{element.title}</Td>
                    <Td>{element.author}</Td>
                    <Td>{element.status}</Td>
                    <Td>{element.updatedAt}</Td>
                    <Td><Button colorScheme='blue' size='sm' px={4} onClick={() => router.push(`./posts/edit-post/${element.slug}`)}>Edit</Button></Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await api('/posts')
  const posts = res.data

  return {
    props: { posts },
  }
}