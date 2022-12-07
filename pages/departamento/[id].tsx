import { Heading, HStack, Text, VStack } from "@chakra-ui/react"
import axios from "axios"
import Link from "next/link"
import useSWR from "swr"
import Layout from "../../components/Layout"

export async function getStaticPaths() {
  const res = await axios('http://localhost:4000/departments')
  const departments = res.data

  const paths = departments.map((department: any) => ({
    params: { id: department.id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context: any) {
  const { params } = context

  const res = await axios(`http://localhost:4000/departments/${params.id}`)
  const page = res.data

  return {
    props: {
      page,
    }, // will be passed to the page component as props
  }
}

interface DepartamentoProps {
  page: {
    id?: string | undefined;
    title: string;
    author?: string | undefined;
    body: string[];
    date: Date;
  };
};

interface Departament {
  id?: string | undefined;
  title: string;
};

const fetcher = (...args) => axios(...args).then(res => res.data)

export default function Departamento({ page }: DepartamentoProps) {
  const { data, error } = useSWR<Departament[], Error>('http://localhost:4000/departments', fetcher)

  return (
    <Layout>
      <HStack px={10}>
        <VStack w={'md'}>
          <ul>
            {
              data?.map((department, index) => (
                <li key={index}><Link href={`/departamento/${department.id}`}>{department.title}</Link></li>
              ))
            }
          </ul>
        </VStack>

        <VStack w={'full'}>
          <Heading>{page.title}</Heading>
          {/* <Text>{page.body}</Text> */}
          {
            page.body.map((element, index) => (
              <Text key={index}>{element}</Text>
            ))
          }
        </VStack>
      </HStack>
    </Layout>
  )
}

