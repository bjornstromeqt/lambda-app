import ApolloClient, { createNetworkInterface } from 'apollo-client';

import { GRAPHQL_ENDPOINT } from './config';

const customNetworkInterface = createNetworkInterface({ uri: GRAPHQL_ENDPOINT });


const client = new ApolloClient({
    networkInterface: customNetworkInterface
});

export default client;
