//header Event
const header_menu_li = document.querySelectorAll('.header_bottom_menu>a>li');
const big_submenu = document.querySelectorAll('.big_submenu');

for(let i = 0; i < header_menu_li.length; i++){
    header_menu_li[i].addEventListener('mouseover', () =>{
        if(i == 0){big_submenu[i].style.height = '229px';} else if(i == 1){big_submenu[i].style.height = '310px';}
        else if(i == 2){big_submenu[i].style.height = '94px';} else if(i == 3){big_submenu[i].style.height = '202px';}
        else if(i == 4){big_submenu[i].style.height = '202px';} else if(i == 5){big_submenu[i].style.height = '148px';}
        else{{big_submenu[i].style.height = '175px';}}

        big_submenu[i].style.padding = '20px 0px'; big_submenu[i].style.transition = '0.5s';
        header_menu_li[i].style.color = 'green'; header_menu_li[i].style.background = 'rgb(41, 41, 41)';

        for(let j = 0; j < header_menu_li.length; j++){
            if(i == j){continue;}
            big_submenu[j].style.height = '0px'; big_submenu[j].style.padding = '0px';
            big_submenu[j].style.transition = '0s'; header_menu_li[j].style.color = 'black';
            header_menu_li[j].style.background = 'rgb(235, 235, 235)';
        }
    });
}

for(let i = 0; i < header_menu_li.length; i++){
    big_submenu[i].addEventListener('mouseleave', ()=>{
        big_submenu[i].style.height = '0px'; big_submenu[i].style.padding = '0px';
        header_menu_li[i].style.color = 'black'; header_menu_li[i].style.background = 'rgb(235, 235, 235)';
    });
}

const header_top_menu = document.querySelector('.header_top_menu');
header_top_menu.addEventListener('mouseover', ()=>{
    for(let i = 0; i < big_submenu.length; i++){
        big_submenu[i].style.height = '0px'; big_submenu[i].style.padding = '0px';
        big_submenu[i].style.transition = '0.5s';
        header_menu_li[i].style.color = 'black'; header_menu_li[i].style.background = 'rgb(235, 235, 235)';
    }
});

//section Event
const section_img = document.querySelectorAll('.section_img');
var count = 0; var interval = setInterval(function(){section_img[count].style.opacity = '1'; count++;},500); //메인 이미지 나오게 하기

const text_1 = document.querySelector('.text_1'); const text_2 = document.querySelector('.text_2');
window.addEventListener('scroll', ()=>{
    const scroll_height = document.documentElement.scrollTop;
    if(scroll_height >= 300){
        text_1.style.left = '220px';
        text_2.style.left = '0px';
    }
    else{
        text_1.style.left = '-250px';
        text_2.style.left = '-500px';
    }
});



