
import './App.css'
import { CurrentUserInfo } from './CurrentUserInfo'
import { CurrentUserLoader } from './CurrentUserLoader'
import { UserLoader } from './UserLoader'
import { ResourceLoader } from './ResourceLoader'
import { DataLoader } from './DataLoader'
import axios from 'axios'


interface URLName {
  urlAPI: string;
}

interface URL  {      
  url: URLName
}

const getServerData = ({url}:URL) => async () => {
  const response = await axios.get(url.urlAPI);
  return response.data
}

const getTestData = async () => {
  return {
    id: '12345',
    name: 'Blah blah',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  };
};


function App() {


  return (
    <>
      <h1>Container Components</h1>
      <p>This is a simple example of a container component that fetches user information and displays it.</p>

    <DataLoader
      getDataFn={getTestData}
      resourceName="user"
    >
      <CurrentUserInfo />
    </DataLoader>

    <p>------------------------------------------------------------------------------------</p>

      <CurrentUserLoader>
        <CurrentUserInfo />
      </CurrentUserLoader>

<p>------------------------------------------------------------------------------------</p>
      <ResourceLoader 
        resourceUrl={`http://localhost:8080/users/1`}
        resourceName='user'>
         <CurrentUserInfo />
      </ResourceLoader>
<p>------------------------------------------------------------------------------------</p>

      <UserLoader userId='1'>
        <CurrentUserInfo />
      </UserLoader>


      <p>------------------------------------------------------------------------------------</p>
    </>

    
  )
}

export default App
