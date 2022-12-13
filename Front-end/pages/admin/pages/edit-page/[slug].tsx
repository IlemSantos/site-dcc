import { Box, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import Layout from "../../../../components/Layout_Admin";
import api from "../../../../services/api";

const Editor = dynamic(() => import('../../../../components/Editor'), { ssr: false })

export default function Edit({ page }: any) {

  const onSubmit = async (data: any) => {
    await api.put(`/departments/${page.slug}`, {
      ...data,
      status: 'publish',
      type: 'page',
    });
  }

  return (
    <Layout>
      <Box>
        <Heading>Editar Página: {page.title}</Heading>
        <Editor buttonLabel={'Atualizar'} initialValue={page.content} onsubmit={onSubmit} />
      </Box>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const { params } = context

  const res = await api(`/departments/${params.slug}`)
  const page = res.data

  return {
    props: { page },
  }
}