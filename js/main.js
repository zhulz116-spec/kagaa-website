const mega=document.getElementById('mega');
const collectionBtn=document.getElementById('collectionBtn');
const search=document.getElementById('search');
const searchBtn=document.getElementById('searchBtn');
const closeSearch=document.getElementById('closeSearch');
const mobileMenu=document.getElementById('mobileMenu');
function setMega(v){mega.classList.toggle('open',v)}
collectionBtn.addEventListener('click',()=>setMega(!mega.classList.contains('open')));
document.addEventListener('click',e=>{if(mega.classList.contains('open')&&!mega.contains(e.target)&&!collectionBtn.contains(e.target))setMega(false)});
searchBtn.addEventListener('click',()=>{search.classList.add('open');search.querySelector('input').focus()});
closeSearch.addEventListener('click',()=>search.classList.remove('open'));
mobileMenu.addEventListener('click',()=>setMega(!mega.classList.contains('open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){setMega(false);search.classList.remove('open')}});
document.getElementById('year').textContent=new Date().getFullYear();
