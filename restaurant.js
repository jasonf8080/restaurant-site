
const image = document.querySelector('.featured-img');
const price = document.querySelector('.featured-price');
const info = document.querySelector('.featured-info h4');

let currentSpecial = 0;





const images = [
    {
        img: 'https://images.themodernproper.com/billowy-turkey/production/posts/2020/Instant-Pot-Chicken-Marinara-with-Polenta-12.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1611333160&s=773d30edb218bcc43f22105bbe9d8230',
        price: '$16.99',
        info: 'Chicken Marinara',
    },

    {
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F52%2F2016%2F12%2F07%2Fdrunken-steaks-with-peppery-oven-fries-102132972-1.jpg',
        price: '$18.99',
        info: 'Steak & Potatoes',
    },

    {
        img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F0eb929bc2c007ebf6009316a327b1e37587045a4',
        price: '$17.99',
        info: 'Creamy Tomato Pasta',
    },
];

console.log(images);

setInterval(function(){
    const special = images[currentSpecial];
    image.src = special.img;
    price.textContent = special.price;
    info.textContent = special.info;

    currentSpecial++;

    if(currentSpecial > images.length -1){
        currentSpecial = 0;
    }
}, 3000)



