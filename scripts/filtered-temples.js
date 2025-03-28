const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    //Duplicated 3 existing temples data object
    {
        templeName: "Utah, Manti",
        location: "Utah, Manti, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Utah, Payson",
        location: "Utah, Payson, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Guam Yigo",
        location: "Guam, Yigo",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const templeContainer = document.getElementById('filteredTempleContainer');
    const navLinks = document.querySelectorAll('nav a');
    
    // Function to display temples based on filter
    function displayTemples(filter) {
        // Clear existing content
        templeContainer.innerHTML = '';
        
        let filteredTemples = [];
        
        switch(filter) {
            case 'old':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year < 1900;
                });
                break;
            case 'new':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year > 2000;
                });
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples; // Show all for 'home'
        }
        
        // Create and display temple cards
        filteredTemples.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'temple-card';
            
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = temple.imageUrl;
            img.alt = `Picture of ${temple.templeName} Temple`;
            if (temples.indexOf(temple) !== 0) {
                img.loading = 'lazy';
            }
            figure.appendChild(img);
            
            const figcaption = document.createElement('figcaption');
            figcaption.textContent = `${temple.templeName} Temple`;
            figure.appendChild(figcaption);
            
            const details = document.createElement('div');
            details.className = 'temple-details';
            
            details.innerHTML = `
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            `;
            
            card.appendChild(figure);
            card.appendChild(details);
            templeContainer.appendChild(card);
        });
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.textContent.toLowerCase();
            document.querySelector('main h1').textContent = filter.charAt(0).toUpperCase() + filter.slice(1);
            displayTemples(filter);
        });
    });
    
    // Initial display (show all temples)
    displayTemples('home');
});