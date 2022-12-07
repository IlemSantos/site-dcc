import { Box } from "@chakra-ui/react";

interface MenuItemProps {
  children: React.ReactNode;
  fontSize?: any;
  onClick?: () => void;
};

export function MenuItem(props: MenuItemProps) {
  const { children, ...rest } = props

  return (
    <Box
      fontSize='xs'
      fontWeight='semibold'
      justifyContent='space-between'
      // px={2}
      py={2}
      pl={6}
      cursor='pointer'
      transition='all 0.2s'
      borderRadius='md'
      // borderWidth='1px'
      _hover={{ bg: 'gray.100' }}
      // _expanded={{ bg: 'blue.400' }}
      // _focus={{ boxShadow: 'outline' }}
      {...rest}
    >
      {children}
    </Box>
  )
}