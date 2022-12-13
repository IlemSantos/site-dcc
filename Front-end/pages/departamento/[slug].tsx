import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"
import useSWR from "swr"

import Layout from "../../components/Layout"
import api from "../../services/api"
import fetcher from "../../services/fetcher"

export async function getStaticPaths() {
  const res = await api('/departments')
  const departments = res.data

  const paths = departments.map((department: any) => ({
    params: { slug: department.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context: any) {
  const { params } = context

  const res = await api(`/departments/${params.slug}`)
  const page = res.data

  return {
    props: {
      page,
    },
    revalidate: 10,
  }
}

interface PageProps {
  page: {
    slug: string;
    title: string;
    content: {
      type?: string | undefined;
      children: {
        text?: string | undefined;
      }[];
    }[];
    type?: string | undefined;
    id?: number | undefined;
    status?: string | undefined;
    link?: string | undefined;
    author?: string | undefined;
  }
}

interface DepartamentoProps {
  slug: string;
  title: string;
  content: {
    type?: string | undefined;
    children: {
      text?: string | undefined;
    }[];
  }[];
  type?: string | undefined;
  id?: number | undefined;
  status?: string | undefined;
  link?: string | undefined;
  author?: string | undefined;
};

export default function Page({ page }: PageProps) {
  const { data, error } = useSWR<DepartamentoProps[], Error>('/departments', fetcher)

  return (
    <Layout>
      <Stack direction='row'>
        <VStack justifyContent='center' w='md'>
          <ul>
            {
              data?.map((element, index) => (
                <li key={index}><Link href={`/departamento/${element.slug}`}>{element.title}</Link></li>
              ))
            }
          </ul>
        </VStack>

        <Box>
          <Heading as='h2' size='xl' textAlign='center' mb={6}>{page.title}</Heading>
          {
            page.content.map((element, index) => (
              element.children.map((element, index) => (
                <Text key={index} mb={2}>{element.text}</Text>
              ))
            ))
          }
        </Box>
      </Stack>
    </Layout>
  )
}
