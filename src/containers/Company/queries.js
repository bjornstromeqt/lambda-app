

import gql from 'graphql-tag';

export const COMPANY_FIELDS = gql`
fragment CompanyFields on Company {
  name
  symbol
  market
  stockPrices(startDate:"2017-07-01", endDate:"2017-08-01") {
    open
    high
    low
    close
    volume
    date
    market
    symbol
  }
}
`;


export const GET_COMPANY = gql`
query ($name: String!) {
 company(name: $name) {
   ...CompanyFields
 }
}
${COMPANY_FIELDS}
`;

