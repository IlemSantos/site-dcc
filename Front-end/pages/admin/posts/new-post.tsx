import { Box, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import Layout from "../../../components/Layout_Admin";
import api from "../../../services/api";

const Editor = dynamic(() => import('../../../components/Editor'), { ssr: false })

export function NewPost() {

  const onSubmit = async (data: any) => {
    await api.post('/posts', {
      ...data,
      status: 'publish',
      type: 'post',
    });
  }

  return (
    <Layout>
      <Box>
        <Heading>New Post</Heading>
        <Editor buttonLabel={'Create'} initialValue={initialValue} onsubmit={onSubmit} />
      </Box>
    </Layout>
  )
}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: '' },
    ],
  },
]

export default NewPost