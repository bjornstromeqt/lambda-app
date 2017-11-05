
const isRunningLocal = () => {
    return (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
};


const GRAPHQL = {
    DEV: 'http://localhost:9999/graphql',
    PROD: 'https://something.com/graphql'
};


export const GRAPHQL_ENDPOINT = isRunningLocal() ? GRAPHQL.DEV : GRAPHQL.PROD;
