
import { SplitScreen } from './LayoutComponents/Split_screen_components'
import {SplitScreenImprovent} from './LayoutComponents/Split_screen_components_Improvement'

import {RegularList} from './LayoutComponents/RegularList'
import {LargePersonListItem} from './LayoutComponents/LargePersonListItem'
import {SmallPersonListItem} from './LayoutComponents/SmallPersonListItem'

interface MessageProps {
  message: string;
}

// Example components for the SplitScreenImprovent
const LeftHandComponent = ({ message }: MessageProps) => {
  return (
    <h1 style={{ background: 'black', color: 'white' }}>{message}</h1>
  );
};
// Example components for the SplitScreenImprovent
const RightHandComponent = ({ message }: MessageProps) => {
  return (
    <h1 style={{ background: 'white' }}>{message}</h1>
  );
};


const Left = () => {
  return (
    <h1 style={{ background: 'black',color: 'white'}}>black</h1>
  )
}


const Right = () => {
  return (
    <h1 style={{ background: 'white'}}>White</h1>
  )
}

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];



function App() {

  return (
    <>

      <SplitScreen 
        left={Left}
        right={Right}
      />

      <SplitScreenImprovent leftWeight={1} rightWeight={1}>
        <LeftHandComponent message="LEFT!!" />
        <RightHandComponent message="RIGHT!!" />
      </SplitScreenImprovent>


      <RegularList 
      items={people}
      resourceName="person"
      itemComponent={LargePersonListItem}
      />

      
      <RegularList 
      items={people}
      resourceName="person"
      itemComponent={SmallPersonListItem}
      />

      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargePersonListItem}
      />
      

   

    </>
  )
}

export default App
