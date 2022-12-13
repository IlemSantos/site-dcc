import { Stack } from '@chakra-ui/react';

import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Stack direction='row' minHeight="100vh" bg='white' spacing={0}>
      <Sidebar />
      <Stack direction='column' w='full' px={12} py={6} spacing={0}>
        {children}
      </Stack>
    </Stack>
  )
}