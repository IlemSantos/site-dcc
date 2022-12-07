import { Box, HStack } from "@chakra-ui/react";

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
};

export function MenuItem(props: MenuItemProps) {
  const { children, ...rest } = props

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
      {...rest}
    >
      <Box fontSize='xs'>
        {children}
      </Box>
    </HStack>
  )
}