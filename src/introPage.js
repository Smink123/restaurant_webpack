export function intro(infoArea) {

    const aboutTitle = document.createElement("p");
    aboutTitle.textContent = "ABOUT US";
    aboutTitle.classList.add("pageTitle");
  infoArea.appendChild(aboutTitle);

  const aboutArea = document.createElement('div')
  aboutArea.classList.add('aboutArea');
  infoArea.appendChild(aboutArea);

    const restaurantIntro = document.createElement('p');
    restaurantIntro.textContent = 'Introducing Zenko Savor, a place where modern and traditional Japanese cuisine seamlessly merge. Our restaurant\'s minimalist and inviting ambiance sets the stage for reimagined classics prepared with the freshest local ingredients. Each dish is a culinary masterpiece, inviting you to savor the essence of Japan with a contemporary twist. Welcome to Zenko Savor, where a world of flavours awaits.'
    restaurantIntro.classList.add('restaurantIntro');
    aboutArea.appendChild(restaurantIntro);

    const openingTimesDiv = document.createElement('div')
    openingTimesDiv.classList.add('openingTimesDiv');
    aboutArea.appendChild(openingTimesDiv);

    const openingTimes = {
        Monday: '12pm - 10pm',
        Tuesday: '12pm - 10pm',
        Wednesday: '12pm - 10pm',
        Thursday: '12pm - 10pm',
        Friday: '12pm - 12am',
        Saturday: '12pm - 12am',
        Sunday: '12pm - 10pm'
    }

    const openingHeader = document.createElement('p');
    openingHeader.textContent = 'opening hours:';
    openingTimesDiv.appendChild(openingHeader)

    for (const key in openingTimes) {
        const value = openingTimes[key];
        const day = document.createElement('p');
        day.textContent = `${key}: ${value}`;
        openingTimesDiv.appendChild(day);
    }

    console.log(openingTimes.Monday)
}