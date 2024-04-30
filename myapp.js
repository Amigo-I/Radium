const Header = document.createElement('div');

  const Block_1 = document.createElement('div');
    const ToggleMenu = document.createElement('div');
    const ToggleBar = document.createElement('i');
    const Logo = document.createElement('div');
    const LogoImg = document.createElement('img');
    
  const Block_2 = document.createElement('div');
    const Search = document.createElement('div');
    const SearchInput = document.createElement('input');
    const SearchIcon = document.createElement('i');
    const MicroDiv = document.createElement('div');
    const MicroPhone = document.createElement('i');

  const Block_3 = document.createElement('div');
    const Add = document.createElement('i');
    const Notifications = document.createElement('i');
    const SpanNotic = document.createElement('span');
    const MyProfile = document.createElement('i');

Header.className= "Header";
  Block_1.className= "Block_1";
    ToggleMenu.className= "ToggleMenu";
    ToggleBar.className= "fa-light fa-bars";
    Logo.className= "Logo";
    LogoImg.className= "LogoImg";
    LogoImg.src= "../Media/images/Bg.png";

  Block_2.className= "Block_2";
    Search.className= "Search";
    SearchInput.className= "SearchInput";
    SearchInput.placeholder= "Search....";
    SearchInput.type= "text";
    SearchIcon.className= "fa-light fa-search";
    MicroDiv.className= "MicroDiv";
    MicroPhone.className= "fa-solid fa-microphone";

  Block_3.className= "Block_3";
    Add.className= "fa-light fa-add";
    Notifications.className= "fa-light fa-bell";
    SpanNotic.className= "SpanNotic";
    MyProfile.className= "fa-solid fa-user";

ToggleMenu.onclick = function (){
    if(ToggleBar.classList.contains("fa-bars")){
      ToggleMenu.style.background = "red";
      ToggleMenu.style.color = "white";
      ToggleBar.classList.replace("fa-bars", "fa-times");
    }
    else{
      ToggleBar.classList.replace("fa-times", "fa-bars"); 
      ToggleMenu.style.background = "black";
      ToggleMenu.style.color = "white";
    }
}


document.body.appendChild(Header);

Header.appendChild(Block_1);
  Block_1.appendChild(ToggleMenu);
    ToggleMenu.appendChild(ToggleBar);
  Block_1.appendChild(Logo);
  Block_1.appendChild(LogoImg);
Header.appendChild(Block_2);
  Block_2.appendChild(Search);
  Search.appendChild(SearchInput);
  Search.appendChild(SearchIcon);
  Block_2.appendChild(MicroDiv);
  MicroDiv.appendChild(MicroPhone);
Header.appendChild(Block_3);
  Block_3.appendChild(Add);
  Block_3.appendChild(Notifications);
  Notifications.appendChild(SpanNotic);
  Block_3.appendChild(MyProfile);

const NavBar = document.createElement('div');
const NavExplore = document.createElement('div');
const Explore = document.createElement('i');
const NavSlider = document.createElement('div');
const More = document.createElement('div');
const more = document.createElement('i');

      NavBar.className= "NavBar";
      NavExplore.className= "NavExplore";
      Explore.className= "fa-solid fa-compass";
      NavSlider.className= "NavSlider";
      More.className= "More";
      // more.textContent= "MORE";
      more.className= "more fa fa-angle-down";

const HyperLinks= [
  { name: "Wynk music", link: "https://wynk.in/music/package/new-telugu-songs/" },
  { name: "Music", link: "https://www.pagalworld.com.sb/" },
  { name: "Sounds", link: "https://simpleguics2pygame.readthedocs.io/en/latest/_static/links/snd_links.html" },
  { name: "Editing Tools", link: "https://123apps.com/#google_vignette" },
  { name: "Live code Editor", link: "content://com.google.android.apps.docs.storage.legacy/enc%3Dencoded%3DKOiqrYz61GOlQUJEzu2rXhk3aCp4hkNvzj2YyzYzerMo0OBaNqMGnxcAhDE6itlW2huD" },
  { name: "link one", link: "https://drive.recmail.net/" },
  { name: "Scan", link: "https://lens.google.com/search?p=AbrfA8pIcgFwp2rqYRT5MWjj_tgJIyOeivP8bWNJoW79A_uGkE9bAxoNrW8gbJTgrGPzyJz--GA6JVgKX8JKOvAm1Ks6CpB5GatoZTHsQA%3D%3D&plm=ChAIDxIMCJPpxLEGENCU6LUDChAIGRIMCJPpxLEGEOD2i7YDChAIGhIMCJPpxLEGEPCslLYD" },
  { name: "Unsplash", link: "https://unsplash.com/" },
  { name: "Y2 meta", link: "https://www.y2meta.cyou/" },
  { name: "I Bomma", link: "https://ww5.ibomma.cx/telugu-movies/" },
  { name: "google icons", link: "https://fonts.google.com/icons" },
  { name: "Go movies", link: "https://moviesgogo.org/release/2022/?_gl=1*q55tdv*_ga*MTc4MzE5MzY1My4xNjcyODEwOTM1*_ga_XTWK7VK7PY*MTY3MjgxMDkzNS4xLjAuMTY3MjgxMDkzOS4wLjAuMA..&_ga=2.16182641.634615046.1672810936-1783193653.1672810935" },
  { name: "w3 schools", link: "https://www.w3schools.com/html/default.asp" },
  { name: "COC layout", link: "https://clashofclans-layouts.com/plans/" },
  { name: "Hyper files", link: "https://filepursuit.com/" },
  { name: "Poki Games", link: "https://poki.com/en/g/drive-mad#" },
  { name: "Chrome web store", link: "https://chrome.google.com/webstore/category/extensions" },
  // { name: "", link: "" },
 ];

for (let i = 0; i < HyperLinks.length; i++) {

  const TabName = HyperLinks[i].name;
  const TabLink = HyperLinks[i].link;
  const divElement = document.createElement("div");
  const divA = document.createElement("a");

  divElement.textContent = TabName;
  divElement.className = "Tabs";
  divA.href = TabLink;
  divA.appendChild(divElement);
  NavSlider.appendChild(divA);
}

document.body.appendChild(NavBar);
NavBar.appendChild(NavExplore);
NavExplore.appendChild(Explore);
NavBar.appendChild(NavSlider);
NavBar.appendChild(More);
More.appendChild(more);
