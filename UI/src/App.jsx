import React from 'react'
import Section1 from './components/section1/Section1'


const App = () => {

  const user = [
    {
      img: 'https://storage.googleapis.com/web_cms_content/btech_for_working_professional_1754ab9daf/btech_for_working_professional_1754ab9daf.webp',
      tag: 'satisfying',
      intro: ''
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdKgwrAtRRI_fzpnQ2Nu-uYsllNk5E5B_8w&s',
      tag: 'dannned',
      intro: ''
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrV3ZNq8307HixTzaOP-aa3UZNrNOOs4Mcw&s',
      tag: 'underserved',
      intro: ''
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdKgwrAtRRI_fzpnQ2Nu-uYsllNk5E5B_8w&s',
      tag: 'dannned',
      intro: ''
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrV3ZNq8307HixTzaOP-aa3UZNrNOOs4Mcw&s',
      tag: 'underserved',
      intro: ''
    }
  ]
  return (
    <>

      <Section1 user={user}/>
    

    </>
  )
}

export default App
