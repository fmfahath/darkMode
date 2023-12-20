let darkModeIconEl = document.getElementById('darkMode-icon');

darkModeIconEl.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
       darkModeIconEl.src = './images/sun.png';
        // console.log('sun');
    }
    else{
        darkModeIconEl.src = "./images/moon.png";        
        // console.log('moon');
    }
}