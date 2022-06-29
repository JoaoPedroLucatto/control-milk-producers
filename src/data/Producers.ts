import { gql, useQuery } from "@apollo/client";

const GET_PRODUCER_LIST = gql`
query MyQuery {
    producers(orderBy: identifier_ASC, stage: PUBLISHED) {
      id
      identifier
      localization
      name
      telephone
      active
    }
  }
`
interface ProducersList{
    id: string;
    active: boolean;
    identifier: number;
    localization: string;
    name: string;
    telephone: string;
}

const {data} =  useQuery<{producers: ProducersList[]}>(GET_PRODUCER_LIST)
console.log(data)


export default data 