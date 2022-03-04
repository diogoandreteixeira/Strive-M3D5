musicDB = [
	{
		name: 'Eminem',
		musicTitle: 'Lose Yourself',
		length: '5:19',
		img: 'https://i1.sndcdn.com/artworks-000391663593-2gkmet-t500x500.jpg',

	},
	{
		name: 'Snoop Dogg',
		musicTitle: "Drop it Like it's Hot",
		length: '5:19',
		img: 'https://resources.tidal.com/images/3e29689c/351e/4832/9c33/45619c5e46dc/750x750.jpg',
	},
	{
		name: 'Alan Walker',
		musicTitle: 'Alone',
		length: '5:19',
		img: 'https://i1.sndcdn.com/artworks-000197801117-grcthv-t500x500.jpg',
	},
	{
		name: 'Ed Sheeran',
		musicTitle: "Bad Habits",
		length: '4:00',
		img: 'https://i1.sndcdn.com/artworks-Cz4IkFOvN7gqVvG2-gUNZeQ-t500x500.jpg',
	},
	{
		name: 'Justin Bieber',
		musicTitle: 'Peaches',
		length: '3:17',
		img: 'https://i1.sndcdn.com/artworks-8roCMva08HswAKeE-te6Ylg-t500x500.jpg',
	},
	{
		name: 'Lewis Capaldi',
		musicTitle: "Someone you loved",
		length: '3:52',
		img: 'https://i1.sndcdn.com/artworks-000677174977-d6v04a-t500x500.jpg',
	},
	{
		name: 'Bebe Rexha',
		musicTitle: "I'm A Mess",
		length: '3:22',
		img: 'https://m.media-amazon.com/images/M/MV5BMDhmZmYxNGEtMTRlMi00ODFiLTgxNzUtNDhiZDRmMTM3MzY2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg',
	},
	{
		name: 'Camila Cabello',
		musicTitle: 'Havana',
		length: '3:39',
		img: 'https://ecsmedia.pl/c/havana-b-iext55962656.jpg',
	},
	{
		name: 'Maroon 5',
		musicTitle: "Memories",
		length: '3:16',
		img: 'https://i1.sndcdn.com/artworks-000627936076-enlce4-t500x500.jpg',
	},
	{
		name: 'Alec Benjamin',
		musicTitle: 'Let me down slowly',
		length: '2:57',
		img: 'https://i1.sndcdn.com/artworks-rkmkivcrKHaxEadq-PWDGZg-t500x500.jpg',

	},
	{
		name: 'Billie Eilish',
		musicTitle: "Ocean Eyes",
		length: '3:16',
		img: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Ocean_Eyes_%28Official_Single_Cover%29_by_Billie_Eilish.png',
	},
	{
		name: 'Camila Cabello, Shawn Mendes',
		musicTitle: 'Señorita',
		length: '3:26',
		img: 'https://i1.sndcdn.com/artworks-000558496737-pem425-t500x500.jpg',
	},
	{
		name: 'Pink Sweats',
		musicTitle: "At my worst",
		length: '3:05',
		img: 'https://i1.sndcdn.com/artworks-dy2MNuVkrFcotrY7-nwiJRw-t500x500.jpg',
	},
	{
		name: 'Alan Walker',
		musicTitle: 'Oh my way',
		length: '3:14',
		img: 'https://i1.sndcdn.com/artworks-000523641915-lo2qzf-t500x500.jpg',
	},
	{
		name: 'Sam Smith, Normani',
		musicTitle: "Dancing with a stranger",
		length: '3:52',
		img: 'https://i1.sndcdn.com/artworks-000652999720-ars5bm-t500x500.jpg',
	},
	{
		name: '24kGoldn',
		musicTitle: "Mood",
		length: '2:31',
		img: 'https://images.genius.com/ca02d764eb2ee3e95605d4aa69e616b0.1000x1000x1.png',
	},
	{
		name: 'Rihanna',
		musicTitle: 'Work',
		length: '7:35',
		img: 'https://i1.sndcdn.com/artworks-000167325637-h7p95t-t500x500.jpg',
	},
	{
		name: 'Doja Cat',
		musicTitle: "Say so",
		length: '3:56',
		img: 'https://i1.sndcdn.com/artworks-zY9gAjzLoSPcaE7X-KAuaYA-t500x500.jpg',
	},
];

const recentlySection = document.querySelector('.main-page-large-box') 
const showsToTry = document.querySelector('.shows-to-try')
const topBoxes = document.querySelector('.top-boxes')
const sidebarMusicList = document.querySelector('.sidebar-music-lists')
const artistMusicList = document.querySelector('.artist-page-music-list')
const albumMusicList = document.querySelector('.album-music-list')


const showCard = (name, musicTitle, img, where) => {
	let card = `
	<div class="col-6 col-sm-6 col-md-3 col-lg-2">
	<div class="large-boxes">
		<div class="large-boxes_box">
			<img class="box-img" src="${img}" alt="soul album">
			<div class="large-boxes_box-title">${name}</div>
			<div class="large-boxes_box-title-description">${musicTitle}</div>
		</div>
	</div>
</div>
	
	`

where.innerHTML += card;
}


const showTopCard = (name, img, where)  => {
	let card = `
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 top-boxes-music">

	<div class="box opacity mx-0 ">
		<div class="box_image">
			<img src="${img}"
				alt="Miles Davis album" />
		</div>
		<div class="box_title ml-4">${name}</div>
   	</div>

	</div>
	`

	where.innerHTML += card;
}

const showSidebar = (name, where) => {
	let code = `
	<a class="sidebar-a" href="#">
		<p class="sidebar-p">${name}</p>
	</a>
	`

	where.innerHTML += code
}

const showArtistMusicList = (musicTitle, img, length, where, index) => {
	let code = `
		<div class="row no-gutters mt-4 artist-music">
			<div class="col-1">
				${index}
			</div>
			<div class="col-5 d-flex align-items-center">
				<img class="music-photo" src="${img}" alt="" srcset="">
				<h6 class="music-title">${musicTitle}</h6>
			</div>
			<div class="col-4">
				<h6 class="watched-num">1,345,432</h6>
			</div>
			<div class="col-2">
				<h6 class="music-length">${length}</h6>
			</div>
		</div>
`

where.innerHTML += code
}

const showAlbumMusicList = (index, musicTitle, name, length, where) => {
	let code = `
	<div class="col-2 d-flex align-items-center">
		<h5 class="text-muted">${index}</h5>
		<span class="ml-3">
	  		<h5 class="music-titles">${musicTitle}</h5>
	  		<h6 class="text-muted">${name}</h6>
		</span>
  	</div>
  	<div class="col-10 d-flex justify-content-end align-items-center">
		<h6 class="text-muted">${length}</h6>
  	</div>
	`
	where.innerHTML += code
}

// Show cards recently
for(let i=0; i<=5; i++) {

	// Checking if it is exist 
	if( recentlySection  !== null && recentlySection !== undefined) {
		showCard(musicDB[i].name, musicDB[i].musicTitle, musicDB[i].img, recentlySection)
	}
}
// Show cards try
for(let i=6; i<=11; i++) {
	// Checking if it is exist 
	if( showsToTry  !== null && showsToTry !== undefined) {
	showCard(musicDB[i].name, musicDB[i].musicTitle, musicDB[i].img, showsToTry)
	}
}

// Show Top Card 
for(let i=10; i<=17; i++) {

	// Checking if it is exist 
	if( topBoxes  !== null && topBoxes !== undefined) {
	showTopCard(musicDB[i].name, musicDB[i].img, topBoxes)
	}
}

// Show musics all
for(let i=0; i<=musicDB.length; i++) {
	
	let db = musicDB[i] 

	// Checking if it is exist 
	if( sidebarMusicList  !== null && sidebarMusicList !== undefined) {
	showSidebar(musicDB[i].name, sidebarMusicList)
	}

	if( artistMusicList !== null && artistMusicList !== undefined) {
		showArtistMusicList(db.musicTitle, db.img, db.length, artistMusicList, i+2)
	}

	if( albumMusicList !== null && albumMusicList !== undefined) {
		showAlbumMusicList(i+2, db.musicTitle, db.name, db.length, albumMusicList )
	}
}
