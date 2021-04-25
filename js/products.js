'use strict';

let uriProducts = "./api/products.json";

let sectionProducts = document.querySelector('.products__body');

async function loadData (uri){
    let data = await fetch(uri)
                        .then(response => response.json())
                        .then(response => response.data);
    return data;
};

function addCta (index){
    let articleCta = document.createElement('article');
        articleCta.setAttribute('class', 'body__cta');

    let imgCta = document.createElement('img');
    
    if(index == 4){
    imgCta.setAttribute('src', `./resources/cta/cta1.jpg`);
    articleCta.append(imgCta);
    sectionProducts.append(articleCta);
    };
    if(index == 7){
    imgCta.setAttribute('src', './resources/cta/cta2.jpg');
    articleCta.append(imgCta);
    sectionProducts.append(articleCta);
    };

   
    
}

async function drawDataSlide(uri){
    let dataArray = await loadData(uri);
    console.log(dataArray);

    for(let i=0; i< dataArray.length; i++){

        if(i == 4 || i == 7){
            addCta(i);
            console.log('hola')
        }
        
        let articleProducts = document.createElement('article');
        articleProducts.setAttribute('class', 'body__element');
        
        let imgProducts = document.createElement('img');
        imgProducts.setAttribute('src',`${dataArray[i].image}`);

        let h3Products = document.createElement('h3');
        h3Products.textContent = `${dataArray[i].name}`;

        let pProducts = document.createElement('p');
        pProducts.textContent = `${dataArray[i].price}`

        let btnProducts = document.createElement('btn');
        btnProducts.setAttribute('class', 'buy-buttom')
        btnProducts.textContent = `${dataArray[i].button_text}`;
        console.log(dataArray[i]);

        articleProducts.append(imgProducts, h3Products, pProducts, btnProducts);

        sectionProducts.append(articleProducts);
    }
}
drawDataSlide(uriProducts);