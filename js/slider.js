'use strict';

let uriSlides = "http://localhost/proyectos/neoshop/api/slides.json";

let ulSlide = document.querySelector('.slider__list');

async function loadData (uri){
    let data = await fetch(uri)
                        .then(response => response.json())
                        .then(response => response.data)
    return data;
};

async function drawDataSlide(uri){
    let dataArray = await loadData(uri);

    for(let i=0; i< dataArray.length; i++){
        let slideElement = document.createElement('li');
        slideElement.setAttribute('class', 'list__element');

        let slideElementImg = document.createElement('img');
        slideElementImg.setAttribute('class', 'element__img');
        slideElementImg.setAttribute('src',  `./${dataArray[i].bg_image}`);

        slideElement.append(slideElementImg);
        ulSlide.append(slideElement);
    }
}
drawDataSlide(uriSlides);