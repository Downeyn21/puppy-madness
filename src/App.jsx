import { useState } from 'react'
import { puppyList } from './data'

import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)

  const [featPupId, setFeatPupId] = useState(null)

  // function selectPup(puppy) {
    //   console.log(this.id)
    // }
    
    let featuredPup = puppies.find((pup)=> pup.id === featPupId)
    // console.log("featurePup Func => ", featuredPup)
    
  console.log("console.log ->",puppies)
  return (
    <div>
      {featPupId && 
        <div className ="selectedPuppy">
          <p className="selectedName">The selected puppy => {featuredPup.name}</p>
          <p className="selectedAge">Age => {featuredPup.age}</p>
          <p className="selectedEmail">Email => {featuredPup.email}</p>
          <div>
        {featPupId && <button onClick={() => {setFeatPupId(null)}}>Clear</button>}
          </div>
        </div>}
      
      {
        puppies.map((puppy) => {
          return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id} className="puppySelector">{puppy.name}</p>
        })
      }
      {/* {featPupId && <p>The selected puppy id => {featPupId}</p>}  */}
    </div>
  )
}

export default App
