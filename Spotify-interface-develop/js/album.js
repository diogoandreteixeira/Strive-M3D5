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
];



const sidebarMusicList = document.querySelector('.sidebar-music-lists')


const showSidebar = (name, where) => {
	let code = `
	<a class="sidebar-a" href="#">
		<p class="sidebar-p">${name}</p>
	</a>
	`

	where.innerHTML += code
}


// Show sidebar 
for(let i=0; i<=musicDB.length; i++) {
	showSidebar(musicDB[i].name, sidebarMusicList)
}

