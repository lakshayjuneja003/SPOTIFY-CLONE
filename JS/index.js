console.log("hello guys")
let songIndex = 0
let masterPlay=document.getElementById('masterplay');
let myPrograssBar=document.getElementById("myPrograssBar");
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songItem=Array.from(document.getElementsByClassName('songmenu'));
let songs=[
    {songName:"Warriyo-Mortals", filepath:"../songs/1.mp3",coverPath:"../covers/1.jpg"},
    {songName:"Cielo-Huma-Huma", filepath:"../songs/2.mp3",coverPath:"../covers/2.jpg"},
    {songName:"Deaf Kev-INVINCIBLE",filepath:"../songs/3.mp3",coverPath:"../covers/3.jpg"},
    {songName:"Different Heaven-Ehide", filepath:"../songs/4.mp3",coverPath:"../covers/4.jpg"},
    {songName:"Janji-Heros", filepath:"../songs/5.mp3",coverPath:"../covers/5.jpg"},
    {songName:"NCS-Best Of Me", filepath:"../songs/10.mp3",coverPath:"../covers/6.jpg"},
    {songName:"NCS-INVINCIBLE",filepath:"../songs/7.mp3",coverPath:"../covers/7.jpg"},
    {songName:"Warriyo-Mortals", filepath:"../songs/1.mp3",coverPath:"../covers/10.jpg"},
]
let audioElement=new Audio('../songs/1.mp3')
// audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-pause-circle');
gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-pause-circle');
gif.style.opacity=0

    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myPrograssBar.value=progress;
});

myPrograssBar.addEventListener('change',()=>{
    audioElement.currentTime=myPrograssBar.value*audioElement.duration/100;
})
songItem.forEach((element,i)=> {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName('song-name')[0].innerText=songs[i].songName
} 
);
const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.classList.remove('fa-pause-circle')
element.classList.add('fa-circle-play')
});
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id)
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-pause-circle')
    audioElement.currentTime=0
audioElement.src= `../songs/${songIndex}.mp3`;
mastersongname.innerText=songs[songIndex].songName;
audioElement.play();
gif.style.opacity=1
masterPlay.classList.remove('fa-circle-play')
masterPlay.classList.add('fa-pause-circle')
})
});
 document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex=1
    }
    else{
songIndex-=1
    }
    audioElement.currentTime=0
    audioElement.src= `../songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex].songName

    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-pause-circle')
    
 })
 document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex=0
    }
    else{
songIndex+=1
    }
    audioElement.currentTime=0
    audioElement.src= `../songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex].songName
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-pause-circle')
 })
    

 



