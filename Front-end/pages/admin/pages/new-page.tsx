import { Box, Heading } from "@chakra-ui/react";
import { Descendant } from "slate";
import dynamic from "next/dynamic";

import Layout from "../../../components/Layout_Admin";
import api from "../../../services/api";

const Editor = dynamic(() => import('../../../components/Editor'), { ssr: false })

export function NewPage() {

  const onSubmit = async (data: any) => {
    await api.post('/departments', {
      ...data,
      status: 'publish',
      type: 'page',
    });
  }

  return (
    <Layout>
      <Box>
        <Heading>Nova Página</Heading>
        <Editor buttonLabel={'Adicionar'} initialValue={initialValue} onsubmit={onSubmit} />
      </Box>
    </Layout>
  )
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: '' },
    ],
  },
]

export default NewPage