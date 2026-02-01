import { Bookmark } from 'lucide-react';

const Card = (elem) => {
  console.log(elem.name);
  return (
    <div>
       <div className="card">

          <div className="top">
            <img src={elem.logo} alt="ffe" />
            <button>Save <Bookmark size={12} /></button>
          </div>

          <div className="center">
            <h2>{elem.name} <span >{elem.date}</span></h2>
            <h3>{elem.post}</h3>
            <div className="tags">
              <h4>{elem.tag1}</h4>
              <h4>{elem.tag2}</h4>
            </div>
          </div>

          <div className="bottom">
            <div>
              <h3>&{elem.pay}/hr</h3>
              <p>{elem.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
    </div>
  )
}

export default Card
