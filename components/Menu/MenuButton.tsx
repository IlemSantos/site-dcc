import { Box, HStack, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { IconType } from "react-icons";
import MenuContext from "./MenuContext";

interface MenuButtonProps {
  children: React.ReactNode;
  leftIcon?: IconType | undefined;
  rightIcon?: IconType | undefined;
  onClick?: () => void;
};

export function MenuButton(props: MenuButtonProps) {
  const { isOpen, onToggle } = useContext(MenuContext)

  const { children, leftIcon, rightIcon, ...rest } = props

  return (
    <HStack
      py={2}
      justifyContent='space-between'
      cursor="pointer"
      color="inherit"
      _hover={{
        bg: "gray.100",
        color: "gray.900",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      onClick={onToggle}
      {...rest}
    >
      <Box fontSize='sm'>
        {leftIcon ? <Icon as={leftIcon} mx='2' boxSize='3' _groupHover={{ color: "brand.200", }} /> : <></>}
        {children}
      </Box>
      <Box>
        {rightIcon ? <Icon as={rightIcon} transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"} /> : <></>}
      </Box>
    </HStack>
  )
}
