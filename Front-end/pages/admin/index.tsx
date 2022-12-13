import { Box, Stack } from "@chakra-ui/react";

import Layout from "../../components/Layout_Admin";

export default function Admin() {
  return (
    <Layout>
      <Stack direction='column' w='md'>
        <Box>
          Bem-vindo(a) ao CMS!
        </Box>
      </Stack>
    </Layout>
  )
}