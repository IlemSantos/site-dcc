import { Divider, Stack } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";

import { MenuButton, MenuItem, MenuList, MenuProvider } from "../Menu";

export default function Sidebar() {
  const router = useRouter()

  return (
    <Stack direction='column' minWidth='xs' p={4} gap={0.5} spacing={0} borderRight='1px' borderColor='blackAlpha.300'>
      <MenuProvider>
        <MenuButton fontSize='md' onClick={() => router.push(`/admin`)}>
          Painel
        </MenuButton>
      </MenuProvider>

      <Divider />

      <MenuProvider>
        <MenuButton fontSize='md' rightIcon={MdKeyboardArrowRight}>
          Posts
        </MenuButton>
        <MenuList>
          <MenuItem fontSize='sm' onClick={() => router.push(`/admin/posts`)}>Todas as posts</MenuItem>
          <MenuItem fontSize='sm' onClick={() => router.push(`/admin/posts/new-post`)}>Adicionar novo</MenuItem>
        </MenuList>
      </MenuProvider>

      <Divider />

      <MenuProvider>
        <MenuButton fontSize='md' rightIcon={MdKeyboardArrowRight}>
          Páginas
        </MenuButton>
        <MenuList>
          <MenuItem fontSize='sm' onClick={() => router.push(`/admin/pages`)}>Todas as páginas</MenuItem>
          <MenuItem fontSize='sm' onClick={() => router.push(`/admin/pages/new-page`)}>Adicionar nova</MenuItem>
        </MenuList>
      </MenuProvider>

      <Divider />

      <MenuProvider>
        <MenuButton fontSize='md'>
          Configurações
        </MenuButton>
      </MenuProvider>

      <Divider />
    </Stack>
  )
}