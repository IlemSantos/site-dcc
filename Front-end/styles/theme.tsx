import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: 'gray.600',
        bg: "url('/images/bg-block-gray.png') #FFF",
      },
      // styles for the `a`
      a: {
        color: 'cyan.600',
        // _hover: {
        //   textDecoration: 'underline',
        // },
      },
    },
  },
})

export default theme