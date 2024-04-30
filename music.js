const Music = document.createElement("div");
const audio = document.createElement("audio");

const Songs= [
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3" },
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3" },
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" },
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3" },

  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg" },
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg" },
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg" },
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_shoot.wav" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion%2001.wav" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion_02.wav" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3" },
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/extralife.ogg" },
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatpellet.ogg" },
  { song: "", link: "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatedible.ogg" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Crumble%20Sound.mp3" },
  { song: "", link: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Zombie.mp3" },
  { song: "", link: "https://rpg.hamsterrepublic.com/wiki-images/7/72/Metal_Hit.ogg" },
  { song: "", link: "https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg" },
  { song: "", link: "https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg" },
  // { song: "", link: "" },
 ];

for (let i = 0; i < Songs.length; i++) {

  const SongName = Songs[i].song;
  const SongLink = Songs[i].link;
  const divElement = document.createElement("div");
  const Songlink = document.createElement("audio");

  divElement.textContent = SongName;
  divElement.className = "MusicList";
  Songlink.src = SongLink;
  Songlink.controls = true;
  divElement.appendChild(Songlink);
  Music.appendChild(divElement);
}

  audio.src = "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3";
  audio.controls = true;
  document.body.appendChild(Music);
  Music.appendChild(audio);

var list = document.getElementsByTagName('li');
  function markSelection() {
    if (this.style.fontWeight !== 'bold') {
        this.style.fontWeight = 'bold';
    } else {
        this.style.fontWeight = 'normal';
    }
  }

list.forEach(function (item) {
    item.onclick = markSelection;
  });
