import { VStack } from '@chakra-ui/react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Departamento de Ciência da Computação - UFRR</title>
        <meta name="description" content="Departamento de Ciência da Computação (DCC), vinculado a Universidade Federal de Roraima (UFRR)." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack minHeight="100vh" justify="space-between" spacing={0}>
        <Navbar />
        {children}
        <Footer />
      </VStack>
    </>
  )
}