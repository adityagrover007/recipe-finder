// Nav Sticky

const mainnav = document.querySelector('.mainnav');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 2) {
        mainnav.classList.add('sticky');
    } else {
        mainnav.classList.remove('sticky');
    }
});

// slider header

const posts = [
    {
        title: "Browny Cookies",
        description: "Rich chocolate brownie cookies with fudgy centers and crackly tops - perfect for chocolate lovers!",
        link: "https://example.com/slide1",
        backgroundImage: "img/cookies-7.jpg",
        label: "cookies"
    },
    {
        title: "Caramel Cookies",
        description: "Buttery cookies stuffed with gooey caramel centers - a sweet and salty treat that melts in your mouth.",
        link: "https://example.com/slide2",
        backgroundImage: "img/cookies-6.jpg",
        label: "cookies"
    },
    {
        title: "Healthy Steak",
        description: "Juicy grilled steak with a homemade herb rub - a protein-packed meal that's both delicious and nutritious.",
        link: "https://example.com/slide3",
        backgroundImage: "img/grill.jpg",
        label: "cookies" // You might want to change this label to "meat" or "main dish"
    },
    {
        title: "Cheese Pizza",
        description: "Classic homemade pizza with stretchy mozzarella, tangy tomato sauce, and a perfectly crispy crust.",
        link: "https://example.com/slide3",
        backgroundImage: "img/cheesepizza.jpg",
        
        label: "pizza"
    },
    {
        title: "Oat Cookies",
        description: "Chewy oatmeal cookies packed with wholesome oats, cinnamon, and your choice of raisins or chocolate chips.",
        link: "https://example.com/slide3",
        backgroundImage: "img/breakfast.jpg",
       
        label: "cookies"
    }
];

let currentSlide = 0;


function showSlide(slideIndex) {
    const slide = posts[slideIndex];
    document.querySelector('.headertitle').textContent = slide.title;
    document.querySelector('.headerpera').textContent = slide.description;
    document.querySelector('.headerbtn').href = slide.link;
    document.querySelector('.headerimg').style.backgroundImage = `url(${slide.backgroundImage})`;
}

// Initial slide
showSlide(currentSlide);


// header posts change slider
const headerPosts = document.querySelector('.headercards');


const headerPostsCards = () => {

    const updateSlider = () => {
        headerPosts.innerHTML = ''; // Clear existing content   
        for (let i = currentSlide; i < currentSlide + 6; i++) {
            const post = posts[i % posts.length];
            const postElement = document.createElement('a');
            postElement.classList.add('headercard');
            postElement.classList.add('flex');
            postElement.href = `${post.link}`;
            postElement.innerHTML = `
               <img src="${post.backgroundImage}" alt="">
               <div class="hcardinfo">
                   <span>${post.label}</span>
                   <h3>${post.title}</h3>
               </div>
           `;
            headerPosts.appendChild(postElement);
        }
    };

    // left right scroll
    const leftBtn = document.getElementById('sleft');
    const rightBtn = document.getElementById('sright');

    leftBtn.addEventListener('click', function () {
        currentSlide = (currentSlide - 6 + posts.length) % posts.length;
        updateSlider();
        showSlide(currentSlide);
    });

    rightBtn.addEventListener('click', function () {
        currentSlide = (currentSlide + 6) % posts.length;
        updateSlider();
        showSlide(currentSlide);
    });

    // Initialize the slider
    updateSlider();
};

headerPostsCards();


function nextSlide() {
    currentSlide = (currentSlide + 1) % posts.length;
    showSlide(currentSlide);
    headerPostsCards(currentSlide);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);




// searchinput js
const searchon = document.querySelector('#searchopen');
const searchoff = document.querySelector('#removesearch');
const searchinput = document.querySelector('.searchinput');

searchinput.style.display = "none";

searchon.addEventListener('click', () => {
    if (searchinput.style.display === 'none') {
        searchinput.style.display = 'flex'
    } else {
        searchinput.style.display = 'none'
    }
})

searchoff.addEventListener('click', () => {
    if (searchinput.style.display === 'flex') {
        searchinput.style.display = 'none'
    } else {
        searchinput.style.display = 'flex'
    }
});


// dark mode javaScript


const darkmode = document.querySelector('#checkbox');
let body = document.body;
const logoImage = document.querySelector('.logo img');
const logoImage2 = document.querySelector('.titleicon img');

// Check if there is a stored dark mode preference in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set the initial state based on the stored preference
if (isDarkMode) {
    body.classList.add('dark');
    darkmode.checked = true;
    logoImage.src = 'img/favicon.png';
    logoImage2.src = 'img/favicon.png';
} else {
    logoImage.src = 'img/logo.png';
    logoImage2.src = 'img/logo.png';
}

darkmode.addEventListener('change', () => {
    if (darkmode.checked) {
        body.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
        logoImage.src = 'img/favicon.png';
        logoImage2.src = 'img/favicon.png';
    } else {
        body.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
        logoImage.src = 'img/logo.png';
        logoImage2.src = 'img/logo.png';
    }
});



// navonoff js

const navdiv = document.querySelector('.navonoff');
const navtoggle = document.querySelector('#checkbox2');
const navlist = document.querySelector('.navlist');

navtoggle.addEventListener('change', ()=>{
    if (navtoggle.checked) {
        navlist.style.right = '-150px'
    } else {
        navlist.style.right = '-400px'
    }
})