window.onload = () => {
    songs()
};


const container = document.getElementById("list")

const nameContainer = document.getElementById("nameContainer")




function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    return [
      h,
      m > 9 ? m : (h ? '0' + m : m || '0'),
      s > 9 ? s : '0' + s
    ].filter(Boolean).join(':');
  }
  

// const param = new URLSearchParams(window.location.search)
// console.log( param)
// const id = param.get("id")

const songs = function() {

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem").then((response) =>  response.json())
    .then ((data) => {console.log(data);
         data.data.forEach( 
             
             
            
             (object) => {container.innerHTML+=`
             <div class="row no-gutters">
                    <div class="col-1">
                      <i class="fa-brands fa-spotify"></i>
                    </div>
                    <div class="col-5 d-flex align-items-center">
                     <a href="./album.html?id=${object.album.id}"> <img
                        class="music-photo"
                        src="${object.album.cover_small}"
                        alt=""
                        srcset=""
                      /></a>
                      <h6 class="music-title">${object.title_short}</h6>
                    </div>
                    <div class="col-4">
                      <h6 class="watched-num">${object.rank}</h6>
                    </div>
                    <div class="col-2">
                      <h6 class="music-length">${ formatTime(object.duration)}</h6>
                    </div>
                  </div>
                `},

             data.data.forEach(

            (object) => {nameContainer.innerHTML=`

                        <img class="mr-1" src="${object.artist.picture_xl}"/>
                            Verified artist
                            <h1 class="header-text">${object.artist.name} </h1>
                        <p>37,120,733 monthly listeners</p>
                
                
                `})










         )
    
    
    
    })

    
}   
