import { Stack } from '@chakra-ui/react'
import { BsFillPeopleFill } from "react-icons/bs"
import { FaCode, FaNetworkWired } from 'react-icons/fa'
import { ImLab } from "react-icons/im";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";

import { MenuButton, MenuItem, MenuList, MenuProvider } from '../Menu'

interface NavbarMobileProps {
  isOpen: boolean;
  onClose: () => void;
};

export default function NavbarMobile(props: NavbarMobileProps) {
  const router = useRouter();

  function handleRouter(args: string) {
    router.push(args);
    props.onClose();
  }

  return (
    <Stack direction={'column'}>

      <MenuProvider>
        <MenuButton leftIcon={MdHome} onClick={() => handleRouter('#')}>
          Menu
        </MenuButton>
      </MenuProvider>

      <MenuProvider>
        <MenuButton leftIcon={FaCode} rightIcon={MdKeyboardArrowRight}>
          Departamento
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleRouter('/departamento')}>Apresentação</MenuItem>
          <MenuItem>Chefia e Coordenações</MenuItem>
          <MenuItem>Missão e Valores</MenuItem>
        </MenuList>
      </MenuProvider>

      <MenuProvider>
        <MenuButton leftIcon={HiOutlineAcademicCap} rightIcon={MdKeyboardArrowRight}>
          Ensino
        </MenuButton>
        <MenuList>
          <MenuItem>Bacharelado em Ciência da Computação</MenuItem>
          <MenuItem>Licenciatura em Informática EaD</MenuItem>
        </MenuList>
      </MenuProvider>

      <MenuProvider>
        <MenuButton leftIcon={ImLab} rightIcon={MdKeyboardArrowRight}>
          Pesquisa
        </MenuButton>
        <MenuList>
          <MenuItem>Mestrato Profissional em Computação</MenuItem>
          <MenuItem>TCCs e Artigos</MenuItem>
          <MenuItem>Iniciação Científica</MenuItem>
        </MenuList>
      </MenuProvider>

      <MenuProvider>
        <MenuButton leftIcon={FaNetworkWired} rightIcon={MdKeyboardArrowRight}>
          Extensão
        </MenuButton>
        <MenuList>
          <MenuItem>Projetos</MenuItem>
          <MenuItem>Programas UFRR</MenuItem>
        </MenuList>
      </MenuProvider>

      <MenuProvider>
        <MenuButton leftIcon={BsFillPeopleFill} rightIcon={MdKeyboardArrowRight}>
          Pessoas
        </MenuButton>
        <MenuList>
          <MenuItem>Professores</MenuItem>
          <MenuItem>Alunos</MenuItem>
          <MenuItem>Ex-alunos</MenuItem>
        </MenuList>
      </MenuProvider>
    </Stack >
  )
}
