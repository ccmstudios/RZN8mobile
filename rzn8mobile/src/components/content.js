import React from 'react' 

const Content = props =>{
    return(
        <div id='contentcontainer'>
<img src = {props.img}  alt = ''/>
<h3>{props.title}</h3>
<p>{props.description}</p>
        <div id ='contentbuttons'>
            
        <button>
<a href='www.instagram.com/urfavoriteauthor'>Preview</a> 

        </button>
        <button>
<a href ='www.instagram.com/urfavoriteauthor'>Purchase</a> 

        </button>
        <button>
<a href='www.instagram.com/urfavoriteauthor'>Share</a> 

        </button>
        <button>
<a href ='www.instagram.com/urfavoriteauthor'>Start/Resume</a>

        </button>
        </div>

     </div>

    )
}

export default Content;