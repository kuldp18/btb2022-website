import React from 'react'
import laptop from '../../require_images/Laptop.png'



const bg={
    
     backgroundColor: "#21192B"
}

export const AboutUs = () => {
    return (
        
        <div style={bg} className="100-vh"> <div class="container-fluid" >
        <div style={{marginTop:'150px',marginLeft: '70px'}}class="h-100 d-inline-block row " >
            <img src={laptop} class="col-sm-4  " alt="..." style={{float:'right',top: 0,color: "#FF5148"}}/><br/> 
            
            <span class="text-white font-weight-bold display-1"
            style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>WE</span><span
            style={{color: "#FF5148",fontFamily: "Arial, Helvetica, sans-serif"}}
            class="font-weight-bold display-1">CODE<span class="text-white display-1">,</span></span><span
            class="text-white font-weight-bold display-1"
            style={{fontFamily: 'Arial, Helvetica, sans-serif' }}>WE</span> <span
            style={{color: "#FF5148",fontFamily: "Arial, Helvetica, sans-serif"}}
            class="font-weight-bold display-1">DESIGN<span class="text-white display-1">,</span></span><br/>
        <span class="text-white font-weight-bold col display-1"
             style={{fontFamily: 'Arial, Helvetica, sans-serif' }}>WE ARE</span> <span
             style={{color: "#FF5148",fontFamily: "Arial, Helvetica, sans-serif"}}
            class="font-weight-bold col display-1">BTB<span class="text-white font-weight-bold display-1">.</span></span><br/>
       <br/>
            <div class="text-white col-lg-6 h4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam eum, ut
            ipsam quasi ea quis repellendus blanditiis at neque incidunt laudantium dolorum sunt obcaecati dolore
            assumenda vitae perspiciatis, voluptatem, maiores in corrupti sit sequi perferendis. Eaque pariatur officia
            natus possimus voluptatibus officiis nulla. Dignissimos adipisci, architecto libero corrupti aliquid
            provident nostrum molestiae voluptas blanditiis. Laudantium fugit ex porro voluptate cumque, natus
            reprehenderit fuga dicta veniam aut voluptates sequi, tempore, vero harum vel numquam ducimus sint facere
            repudiandae aspernatur! Soluta ab recusandae nemo provident tempora magnam aperiam, magni nihil, fuga
            temporibus asperiores ipsam illum eius corporis excepturi ullam, sapiente quod?</div>
            <br/>
            <button type="button" class="btn btn-outline-danger btn-lg col-sm-1 " >Learn More</button>
<br/>
<br/>
<br/>
<br/>
        </div>
</div>


</div>
                            )
}
