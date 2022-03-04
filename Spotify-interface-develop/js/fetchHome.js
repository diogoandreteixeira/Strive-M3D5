

window.onload = () => {
    albums()
    albumPage()
    albumTitles()
};


let container = document.getElementById("container1")
let albumHeader = document.getElementById("album-header")
let albumMusicList = document.getElementById("album-music-list")

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
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    console.log(id);
    
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + id).then((response) =>  response.json())
    .then ((object) => {console.log(object)            
       
            albumHeader.innerHTML+=`
            <div class="col-2">
               <img
                 class="header-album-img"
                 src="${object.cover_medium}"
                 alt="sex pistols album"
               />
             </div>
             <div class="col-10">
               <h6>ALBUM</h6>
               <h2>${object.title}</h2>
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
`
   })
}  

const albumTitles = function() {

    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    console.log(id);
    
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + id).then((response) =>  response.json())
    .then ((object) => {console.log(object);
         object.tracks.data.forEach( 
             
        
    (song) => {albumMusicList.innerHTML+=`
    <div class="row mx-4 album-music-list">
       <div class="col-2 d-flex align-items-center">
         <h5 class="text-muted">1</h5>
         <span class="ml-3">
           <h5 class="music-titles">${song.title}</h5>
           <h6 class="text-muted"><a href="./artist.html?id=${song.artist.id}">${song.artist.name}</a></h6>
         </span>
       </div>
       <div
         class="col-10 d-flex justify-content-end align-items-center"
       >
         <h6 class="text-muted">2:46</h6>
       </div>
       <!-- place  -->
     </div>
`}
)   
    })  
} 

