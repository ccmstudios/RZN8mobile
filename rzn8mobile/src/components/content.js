import React from 'react' 
import ReactPlayer from 'react-player'

const Content = props =>{
    return(
        <div id='contentcontainer'>
<img src = {props.img} />
<h3>{props.title}</h3>
<p>{props.description}</p>
        <div id ='contentbuttons'>
            
        <button>
<a href=''>Preview</a> 

        </button>
        <button>
<a href =''>Purchase</a> 

        </button>
        <button>
<a href=''>Share</a> 

        </button>
        <button>
<a href =''>Start/Resume</a>

        </button>
        </div>

     </div>

    )
}

export default Content;