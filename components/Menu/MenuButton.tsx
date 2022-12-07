import { useContext } from "react";
import { Box, HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

import MenuContext from "./MenuContext";

interface MenuButtonProps {
  children: React.ReactNode;
  leftIcon?: IconType | undefined;
  fontSize?: any;
  rightIcon?: IconType | undefined;
  onClick?: () => void;
};

export function MenuButton(props: MenuButtonProps) {
  const { isOpen, onToggle } = useContext(MenuContext)

  const { children, leftIcon, rightIcon, ...rest } = props

  return (
    <HStack
      fontSize='sm'
      fontWeight='semibold'
      justifyContent='space-between'
      px={2}
      py={2}
      cursor='pointer'
      transition='all 0.2s'
      borderRadius='md'
      // borderWidth='1px'
      _hover={{ bg: 'gray.100' }}
      // _expanded={{ bg: 'blue.400' }}
      // _focus={{ boxShadow: 'outline' }}
      onClick={onToggle}
      {...rest}
    >
      <HStack spacing={0}>
        {leftIcon ? <Icon as={leftIcon} me='2' boxSize='4' _groupHover={{ color: "brand.200", }} /> : <></>}
        <Box>
          {children}
        </Box>
      </HStack>
      {rightIcon ? <Icon as={rightIcon} transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"} /> : <></>}
    </HStack>
  )
}
