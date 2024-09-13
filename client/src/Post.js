import  Image1  from './meetmate.png'
import Image2 from './cipher.png'
import Image3 from './cybrix.png'
export default function Post(){


    return(
        <>
        
    <div className = "post">
      {/* 1 */}

      <div className='image'>
      <img src = {Image1} alt = "Random"></img>
      </div>

      <div className = "content">

      <h2>MeetMate</h2>
      <p className='info'>
      <a className='author'>Zaid Shaikh</a>
      <time>12-09-2024 18:31</time>
      </p>
      <p className='summary'>An AI tool for fast audio and transcript summarization using React.js, Flask, and NLP tech. Simplify meetings with concise summaries.</p>
      
      </div>
      
    </div>




    <div className = "post">
      {/* 1 */}

      <div className='image'>
      <img src = {Image2} alt = "Random"></img>
      </div>

      <div className = "content">

      <h2>Cipherscape</h2>
      <p className='info'>
      <a className='author'>Zaid Shaikh</a>
      <time>13-09-2024 17:49</time>
      </p>
      <p className='summary'>A text-based puzzle adventure game built with React.js, MongoDB, and JavaScript. Solve challenging ciphers and explore mysterious narratives.</p>
      
      </div>
      
    </div>



    <div className = "post">
      {/* 1 */}

      <div className='image'>
      <img src = {Image3} alt = "Random"></img>
      </div>

      <div className = "content">

      <h2>Cybrix</h2>
      <p className='info'>
      <a className='author'>Zaid Shaikh</a>
      <time>13-09-2024 16:41</time>
      </p>
      <p className='summary'>A web app for real-time vulnerability scanning and reporting, built with React.js and Flask. It helps secure systems with actionable insights.</p>
      
      </div>
      
    </div>



        </>
    )
}