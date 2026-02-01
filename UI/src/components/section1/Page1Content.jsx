
import Lefttext from './Lefttext'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-7 flex justify-between items-center h-[90vh] gap-10'>
      <Lefttext />
      <RightText  user={props.user} />
    </div>
  )
}

export default Page1Content
