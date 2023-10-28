import './styles.css';
import { intro } from './introPage';
import { menuItems } from './menuPage';
import { contactPage } from './contactPage';

document.addEventListener('DOMContentLoaded', function() {
    const allContent = document.getElementById('content');
    
    //nar bar div
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    allContent.appendChild(navBar);

    //info area div
    const infoArea = document.createElement('div');
    infoArea.classList.add('infoArea');
    allContent.appendChild(infoArea)

    //restaurant heading - inside info area div
    const heading = document.createElement('h1');
    heading.innerHTML = 'ZENKO<br>ZENKO<br>ZENKO<br>ZENKO<br>ZENKO<br>ZENKO<br>ZENKO<br>ZENKO<br>ZENKO<br>ZENKO<br>'; 
    heading.classList.add('restaurantHeading')
    infoArea.appendChild(heading);

    // the data out links contain 
    const linkData = [
        {
            text: 'about',
            showPage: () => intro(infoArea) // by passing the infoArea div as an argument, the intro function will be able to access the div - even if they are in different modules!
        },
        {
            text: 'menu',
            showPage: () => menuItems(infoArea)
        },
        {
            text: 'contact',
            showPage: () => contactPage(infoArea)
        }
    ]

    // adding elements using our linkData array above
    for (let i = 0; i < linkData.length; i++) {
        const linkSpace = document.createElement('div');
        linkSpace.classList.add('linkSpace');
        navBar.appendChild(linkSpace);

        const title = document.createElement('p');
        title.textContent = linkData[i].text;
        title.classList.add('navTitles');
        linkSpace.appendChild(title);

        title.addEventListener('click', function() {
            console.log('yo');
            navLogo.style.display = 'block'
            infoArea.innerHTML = '';
            linkData[i].showPage();
        })
    }
    
    //creating a smaller logo for when the intro logo dissappears (this happens when a link title is clicked)
    const navLogo = document.createElement('p');
    navLogo.textContent = 'ZENKO'
    navLogo.classList.add('navLogo');
    navBar.appendChild(navLogo);
})