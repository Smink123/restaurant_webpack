export function intro(infoArea) {

    const restaurantIntro = document.createElement('p');
    restaurantIntro.textContent = 'Introducing Zenko Savor, a place where modern and traditional Japanese cuisine seamlessly merge. Our restaurant\'s minimalist and inviting ambiance sets the stage for reimagined classics prepared with the freshest local ingredients. Each dish is a culinary masterpiece, inviting you to savor the essence of Japan with a contemporary twist. Welcome to Zenko Savor, where a world of flavours awaits.'
    restaurantIntro.classList.add('restaurantIntro');
    infoArea.appendChild(restaurantIntro);
}

