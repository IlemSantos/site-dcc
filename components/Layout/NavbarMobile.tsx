import { Collapse, Flex, useDisclosure } from '@chakra-ui/react'
import { BsFillPeopleFill } from "react-icons/bs"
import { FaCode, FaNetworkWired } from 'react-icons/fa'
import { ImLab } from "react-icons/im";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";

import { MenuButton, MenuItem } from './NavMenu';

interface NavbarMobileProps {
  isOpen: boolean;
  onClose: () => void;
};

export default function NavbarMobile(props: NavbarMobileProps) {
  const router = useRouter();

  const dcc = useDisclosure();
  const ensino = useDisclosure();
  const pesquisa = useDisclosure();
  const extensao = useDisclosure();
  const pessoas = useDisclosure();

  function handleRouter(args: string) {
    router.push(args);
    props.onClose();
  }

  return (
    <Flex direction='column' fontSize="sm">

      <MenuButton leftIcon={MdHome} onClick={() => handleRouter('/')}>
        Home
      </MenuButton>

      <MenuButton leftIcon={FaCode} rightIcon={MdKeyboardArrowRight} onClick={dcc.onToggle}>
        Departamento
      </MenuButton>
      <Collapse in={dcc.isOpen}>
        <MenuItem>
          Apresentação
        </MenuItem>
        <MenuItem>
          Chefia e Coordenações
        </MenuItem>
        <MenuItem>
          Missão e Valores
        </MenuItem>
      </Collapse>

      <MenuButton leftIcon={HiOutlineAcademicCap} rightIcon={MdKeyboardArrowRight} onClick={ensino.onToggle}>
        Ensino
      </MenuButton>
      <Collapse in={ensino.isOpen}>
        <MenuItem>
          Bacharelado em Ciência da Computação
        </MenuItem>
        <MenuItem>
          Licenciatura em Informática EaD
        </MenuItem>
      </Collapse>

      <MenuButton leftIcon={ImLab} rightIcon={MdKeyboardArrowRight} onClick={pesquisa.onToggle}>
        Pesquisa
      </MenuButton>
      <Collapse in={pesquisa.isOpen}>
        <MenuItem>
          Mestrato Profissional em Computação
        </MenuItem>
        <MenuItem>
          TCCs e Artigos
        </MenuItem>
        <MenuItem>
          Iniciação Científica
        </MenuItem>
      </Collapse>

      <MenuButton leftIcon={FaNetworkWired} rightIcon={MdKeyboardArrowRight} onClick={extensao.onToggle}>
        Extensão
      </MenuButton>
      <Collapse in={extensao.isOpen}>
        <MenuItem>
          Projetos
        </MenuItem>
        <MenuItem>
          Programas UFRR
        </MenuItem>
      </Collapse>

      <MenuButton leftIcon={BsFillPeopleFill} rightIcon={MdKeyboardArrowRight} onClick={pessoas.onToggle}>
        Pessoas
      </MenuButton>
      <Collapse in={pessoas.isOpen}>
        <MenuItem>
          Professores
        </MenuItem>
        <MenuItem>
          Alunos
        </MenuItem>
        <MenuItem>
          Ex-alunos
        </MenuItem>
      </Collapse>

    </Flex>
  )
}
