import Nav from './Nav'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  console.log(props);
  
  return (
    <div className="h-screen w-full text-black p-4">
     <Nav />
     <Page1Content user={props.user} />
    </div>
  )
}

export default Section1
