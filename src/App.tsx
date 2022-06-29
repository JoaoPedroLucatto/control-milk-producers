import { gql, useQuery } from '@apollo/client'
import { printIntrospectionSchema } from 'graphql';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';

/* import Layout from './components/Layout'; */
import Menu from './components/Menu';

const GET_PRODUCERS_QUERY = gql`
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

interface producer{
  id: string;
  active: boolean;
  identifier: number;
  localization: string;
  name: string;
  telephone: string;
}


function App() {
  return (
    <div className='flex h-screen'>
      <BrowserRouter>
        <Header/>
        <Content/>
      </BrowserRouter>
      {/* {data?.producers.map(producer => {
        return (
                <li  key={producer.id}>{producer.name} - {producer.telephone}</li>
          )
      })} */}
    </div>
  )
}

export default App
