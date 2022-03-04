

window.onload = () => {
    albums()
    albumPage()
};


let container = document.getElementById("container1")
let albumHeader = document.getElementById("album-header")

const albums = function() {

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem").then((response) =>  response.json())
    .then ((data) => {console.log(data);
         data.data.forEach( 
             
        
             (object) => {container.innerHTML+=`
             <div class="col-12 col-sm-6 col-md-4 col-lg-3 top-boxes-music">
             <div class="box opacity mx-0">
                <a  href="./album.html?id=${object.album.id}" > 
                     <div class="box_image">
                     <img src="${object.album.cover}" alt="album">
                     </div>
                     <div class="box_title ml-4">${object.album.title}</div>
                    </a>
             </div>
         </div>
`}
         )
    
    
    
    })

    
}   

const albumPage = function() {

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem").then((response) =>  response.json())
    .then ((data) => {console.log(data);
        data.data.forEach( 
            
       
            (object) => {albumHeader.innerHTML+=`
            <div class="col-2">
               <img
                 class="header-album-img"
                 src="${object.album.cover}"
                 alt="sex pistols album"
               />
             </div>
             <div class="col-10">
               <h6>ALBUM</h6>
               <h2>${object.album.title}</h2>
               <div>
                 <div class="album-logo">
                   <div class="album-logo-int">
                     <img
                       src="https://sketchok.com/images/articles/01-cartoons/042-bojack/03/10.jpg"
                       alt="bojack"
                     />
                     <span><b>Sex Pistols -</b></span
                     ><span class="text-muted">
                       2018 * 22 songs, 1h 15min</span
                     >
                   </div>
                 </div>
               </div>
             </div>
`}
        )
   
   
   
   })

    
}   
