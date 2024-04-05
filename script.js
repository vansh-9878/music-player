const container=document.querySelector(".container");
const playbtn=document.querySelector("#play");
const prevbtn=document.querySelector("#prev");
const nextbtn=document.querySelector("#next");
const audio=document.querySelector("#audio"); 
const progress=document.querySelector(".progress");
const progressContainer=document.querySelector(".progress-container");
const title=document.querySelector("#title");
const cover=document.querySelector("#cover");

const songs=["RaataanLambiyan","ApnaBanaLe","Chaleya","Pasoori"];
let  songIndex=1;

loadSong(songs[songIndex]);

function loadSong(song){
    title.innerText=song;
    audio.src=`songs/${song}.mp3`;
    cover.src=`images/${song}.jpg`;
}
function playSong(){
    container.classList.add('play');
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play()
}

function pauseSong(){
    container.classList.remove('play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause()
}

function nextSong(){
    songIndex++;
    if(songIndex > (songs.length)-1){
        songIndex=0; 
    }
    loadSong(songs[songIndex]);
    playSong();
}

function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex=(songs.length)-1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e){
    // const {duration,currentTime}=e.srcElement;
    // const progessPercent=(currentTime/duration)*100;
    // progress.style.width=`${progessPercent}%`;
    const dur=audio.duration;
    const time=audio.currentTime;
    progress.style.width=`${(time/dur)*100}%`
}

function setProgress(e){
    const width=this.clientWidth;
    const clickX=e.offsetX;
    const duration =audio.duration;

    audio.currentTime=(clickX/width)*duration;

}

playbtn.addEventListener('click',()=>{
    const isPlaying=container.classList.contains('play');
    if (isPlaying){
        pauseSong();
    }else{
        playSong();
    }
})


prevbtn.addEventListener('click',()=>{
    prevSong();
})

nextbtn.addEventListener('click',()=>{
    nextSong();
})

audio.addEventListener('timeupdate',()=>{
    updateProgress();
})

progressContainer.addEventListener('click', setProgress);


audio.addEventListener('ended',nextSong);




//something different
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd7de62f97fmshafa901d8a15ecd6p140157jsnb75d14cc3f6a',
// 		'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
// 	}
// };

// async function getSong(){
//     try{
//     const response= await fetch("https://youtube-music-api3.p.rapidapi.com/music/info?id=0yEuqc6LtoE",options);
    
//     const data=response.json();
//     console.log(data);
//     }
//     catch{
//         console.log("Next Time");
//     }
// }


