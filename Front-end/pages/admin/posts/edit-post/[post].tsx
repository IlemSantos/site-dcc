import { Box, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import Layout from "../../../../components/Layout_Admin";
import api from "../../../../services/api";

const Editor = dynamic(() => import('../../../../components/Editor'), { ssr: false })

export default function Edit({ page }: any) {

  const onSubmit = async (data: any) => {
    await api.put(`/posts/${page.slug}`, {
      ...data,
      status: 'publish',
      type: 'post',
    });
  }

  return (
    <Layout>
      <Box>
        <Heading>Edit post: {page.title}</Heading>
        <Editor buttonLabel={'Atualizar'} initialValue={page.content} onsubmit={onSubmit} />
      </Box>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const { params } = context

  const res = await api(`/posts/${params.post}`)
  const page = res.data

  return {
    props: { page },
  }
}