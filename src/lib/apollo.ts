import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";


export const client =  new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pya2a12vs001w7gvvr37jc/master',
    cache: new InMemoryCache(),
});