import { ApolloProvider } from "@apollo/client"
import client from "apollo-client"

import "@/styles/globals.css"

export default function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}
