import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { initSentry } from '../utils/sentry'
import { __prod__ } from '../utils/constants'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClientRef = React.useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  initSentry()

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      {__prod__ ? null : <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}

export default MyApp
