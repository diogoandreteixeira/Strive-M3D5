

window.onload = () => {
    albums()
};


let container = document.getElementById("container1")


const albums = function() {

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem").then((response) =>  response.json())
    .then ((data) => {console.log(data);
         data.data.forEach( 
             
        
             (object) => {container.innerHTML+=`
             <div class="col-6 col-sm-6 col-md-3 col-lg-2">
             <div class="top-boxes-music">
                <div class="box opacity mx-0 ">
                <a  href="./album.html" > 
                     <img class="box_image" src="${object.album.cover}" alt="soul album">
                     <div class="box_title ml-4">${object.album.title}</div>
                      </a>
                 </div>
             </div>
         </div>
`}
         )
    
    
    
    })

    
}   