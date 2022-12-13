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
  }
}

interface DepartamentoProps {
  page: {
    title: string;
    slug?: string | undefined;
    author?: string | undefined;
    body: string[];
  };
};

interface Departament {
  title: string;
  slug?: string | undefined;
};

export default function Page({ page }: DepartamentoProps) {
  const { data, error } = useSWR<Departament[], Error>('/departments', fetcher)

  return (
    <Layout>
      <Stack direction='row'>
        <VStack justifyContent='center' w='md'>
          <ul>
            {
              data?.map((department, index) => (
                <li key={index}><Link href={`/departamento/${department.slug}`}>{department.title}</Link></li>
              ))
            }
          </ul>
        </VStack>

        <Box>
          <Heading as='h2' size='xl' textAlign='center' mb={6}>{page.title}</Heading>
          {
            page.body.map((element, index) => (
              <Text key={index}>{element}</Text>
            ))
          }
        </Box>
      </Stack>
    </Layout>
  )
}

