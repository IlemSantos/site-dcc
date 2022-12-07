import { Box, HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface MenuButtonProps {
  children: React.ReactNode;
  leftIcon?: IconType | undefined;
  rightIcon?: IconType | undefined;
  isOpen?: boolean | undefined;
  onClick: () => void;
};

export function MenuButton({ children, leftIcon, rightIcon, isOpen, onClick }: MenuButtonProps) {
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
      onClick={onClick}
    >
      <Box>
        {leftIcon ? <Icon as={leftIcon} mx='2' boxSize='3' _groupHover={{ color: "brand.200", }} /> : <></>}
        {children}
      </Box>
      <Box>
        {rightIcon ? <Icon as={rightIcon} transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"} /> : <></>}
      </Box>
    </HStack>
  )
}

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void | undefined;
};

export function MenuItem({ children, onClick }: MenuItemProps) {
  return (
    <HStack
      py={2}
      pl={10}
      cursor="pointer"
      color="inherit"
      _hover={{
        bg: "gray.100",
        color: "gray.900",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      onClick={onClick}
    >
      <Box>
        {children}
      </Box>
    </HStack>
  )
}