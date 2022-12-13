import { Box, HStack, Image, Stack, Text, VStack, Icon, Heading } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box as="footer" width="full" bg="gray.100">
      <Stack direction={['column', 'column', 'row']} justify="center" p={4} gap={6}>
        <HStack justify="center" gap={4}>
          <Image
            alt="Logo do DCC"
            src="/images/logos/logo-dcc-03.png"
            boxSize="16"
          />
          <Image
            alt="Logo da UFRR"
            src="/images/logos/logo_ufrr.png"
            boxSize="16"
          />
        </HStack>

        <Stack direction={['column', 'column', 'row']} justify="center" gap={4}>
          <VStack alignItems="start" spacing={0}>
            <Heading fontSize="md">Institucional</Heading>
            <Link href="#"><Text fontSize="sm">Site UFRR</Text></Link>
            <Link href="#"><Text fontSize="sm">Site CCT</Text></Link>
            <Link href="#"><Text fontSize="sm">Site NEAD</Text></Link>
          </VStack>
          <VStack alignItems="start" spacing={0}>
            <Heading fontSize="md">Documentos</Heading>
            <Link href="#"><Text fontSize="sm">Calendário UFRR</Text></Link>
            <Link href="#"><Text fontSize="sm">Editais</Text></Link>
            <Link href="#"><Text fontSize="sm">Regimento do DCC</Text></Link>
          </VStack>
          <VStack alignItems="start" spacing={0}>
            <Heading fontSize="md">Contato</Heading>
            <Link href="#"><Text fontSize="sm">Email</Text></Link>
            <Link href="#"><Text fontSize="sm">WhatsApp</Text></Link>
          </VStack>
        </Stack>
      </Stack>

      <VStack pb={4} spacing={0}>
        <Heading fontSize="md">Endereço</Heading>
        <Text fontSize="sm">UFRR, Campus Paricarana, CCT</Text>
        <Text fontSize="sm">Av. Capitão Ene Garcez, 2413 - Bairro Aeroporto. </Text>
        <Text fontSize="sm">Boa Vista - Roraima RR. 69304-000</Text>
      </VStack>

      <VStack py={4} bg="gray.800" color="white">
        <HStack gap={2}>
          <Link href="https://www.facebook.com/dccufrr">
            <Icon
              h="20px"
              w="20px"
              as={FaFacebookF}
            />
          </Link>

          <Link href="https://www.instagram.com/dcc.ufrr/">
            <Icon
              h="20px"
              w="20px"
              as={FaInstagram}
            />
          </Link>

          <Link href="https://www.linkedin.com/company/ciencia-da-computacao-ufrr/">
            <Icon
              h="20px"
              w="20px"
              as={FaLinkedinIn}
            />
          </Link>
        </HStack>

        <Text fontSize="sm">&copy; DCC - UFRR</Text>
      </VStack>
    </Box>
  )
}
