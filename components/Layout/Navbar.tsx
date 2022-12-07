import { Box, Flex, HStack, Button, useDisclosure, IconButton, Menu, MenuButton, MenuList, MenuItem, Drawer, DrawerOverlay, DrawerContent, Image, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { FiMenu } from "react-icons/fi"
import { useRouter } from "next/router"
import Link from "next/link"
import useSWR from "swr"
import axios from "axios"

import NavbarMobile from "./NavbarMobile"

interface Departament {
  id?: string | undefined;
  title: string;
};

const fetcher = (...args) => axios(...args).then(res => res.data)

export default function Navbar() {
  const { data, error } = useSWR<Departament[], Error>('http://localhost:4000/departments', fetcher)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  return (
    <Box as="header" w="full" bg="gray.50" py={4} shadow="md">

      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <Box w={"40"}>
              <Link href="/" onClick={onClose}>
                <Image src="/images/logos/logo-dcc-01.png" alt="Logo do DCC" />
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <NavbarMobile onClose={onClose} isOpen={isOpen} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex alignItems="center" justifyContent="space-between" mx="auto" w={{ base: "100%", sm: "80%" }}>

        <Box w="40">
          <Link href="/">
            <Image src="/images/logos/logo-dcc-01.png" alt="Logo do DCC" />
          </Link>
        </Box>

        <HStack>
          <HStack color="brand.600" display={{ base: "none", md: "inline-flex" }}>

            {/* <Menu>
              <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                DCC
              </MenuButton>
              <MenuList fontSize="md">
                <MenuItem onClick={() => router.push("/departamento/apresentação")}>
                  Apresentação
                </MenuItem>
                <MenuItem>Chefia e Coordenações</MenuItem>
                <MenuItem>Missão e Valores</MenuItem>
              </MenuList>
            </Menu> */}

            <Menu>
              <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                Departamento
              </MenuButton>
              <MenuList fontSize="md">
                {
                  data?.map((department, index) => (
                    <MenuItem key={index} onClick={() => router.push(`/departamento/${department.id}`)}>{department.title}</MenuItem>
                  ))
                }
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                Ensino
              </MenuButton>
              <MenuList fontSize="md">
                <MenuItem>Bacharelado em Ciência da Computação</MenuItem>
                <MenuItem>Licenciatura em Informática</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                Pesquisa
              </MenuButton>
              <MenuList fontSize="md">
                <MenuItem>Mestrato Profissional em Computação</MenuItem>
                <MenuItem>TCCs e Artigos</MenuItem>
                <MenuItem>Iniciação Científica</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                Extensão
              </MenuButton>
              <MenuList fontSize="md">
                <MenuItem>Projetos</MenuItem>
                <MenuItem>Programas UFRR</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                Pessoas
              </MenuButton>
              <MenuList fontSize="md">
                <MenuItem>Professores</MenuItem>
                <MenuItem>Alunos</MenuItem>
                <MenuItem>Ex-alunos</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              aria-label="Menu"
              size="lg"
              icon={<FiMenu />}
              onClick={onOpen}
            />
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
