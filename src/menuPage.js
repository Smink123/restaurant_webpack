import salmonMaki from "./salmon_maki.jpg";
import kakiage from "./battered_Kakiage.jpg";
import dynamiteRoll from "./dynamite_roll.jpg";
import matchaBrownie from "./matcha_brownie.jpg";
import figPancakes from "./japanese_fig_pancakes.jpg";
import yuzuGinger from "./yuzu_sour.jpg";
import sobaNoodles from "./seasame_noodles.jpg";
import ebiSalad from "./ebi_salad.jpg";
import sushiMoriawase from "./sushi_moriawase.jpg";
import caliCrabRoll from "./cali_crab_roll.jpg";
import chirashiSushi from "./chirashi_Sushi.jpg";
import sakuraBrew from "./sakura_brew.jpg";
import matchaCocktail from "./matcha_cocktail.jpg";
import yuzuSour from "./yuzu_sour.jpg";

export function menuItems(infoArea) {
  function menuListItem(
    type,
    title,
    description,
    price,
    suitability,
    imageSource,
    imageName
  ) {
    return {
      type,
      title,
      description,
      price,
      suitability,
      imageSource,
      imageName,
    };
  }

  const item1 = menuListItem(
    "Dessert",
    "Matcha Brownie",
    "A decadent fusion of rich chocolate and the earthy allure of Japanese matcha, delivering an unforgettable balance of sweet and bitter flavours in every bite.",
    "£6.50",
    "Vegetarian",
    "src/matcha_brownie.jpg",
    matchaBrownie
  );
  const item2 = menuListItem(
    "Dessert",
    "Japanese Fig Pancakes",
    "Light, airy pancakes adorned with succulent Japanese figs, a delightful fusion of East and West. Served with a delicate maple syrup.",
    "£7.50",
    "Vegetarian",
    "src/japanese_fig_pancakes.jpg",
    figPancakes
  );
  const item3 = menuListItem(
    "Dessert",
    "Japanese Yuzu Fruit and Ginger Ice Cream",
    "The perfect blend of zesty Japanese yuzu and the warm embrace of ginger in our signature ice cream.",
    "£7.50",
    "Vegetarian",
    "src/ginger_yuzu_icecream.jpg",
    yuzuGinger
  );
  const item4 = menuListItem(
    "Main",
    "Sesame Soba Noodles",
    "Delight in the combination of tender soba noodles, bathed in a luscious sesame tahini sauce with a hint of ginger. A vegan masterpiece that delivers both flavor and heartiness.",
    "£7.99",
    "Vegan",
    "src/seasame_noodles.jpg",
    sobaNoodles
  );
  const item5 = menuListItem(
    "Main",
    "Ebi Salad",
    "Succulent shrimp nestled on a bed of crisp greens, harmonizing with a delicate Japanese-inspired dressing. A refreshing blend of flavors and textures.",
    "£12.99",
    null,
    "src/ebi_salad.jpg",
    ebiSalad
  );
  const item6 = menuListItem(
    "Main",
    "Sushi Moriawase",
    "An exquisite selection of chef's choice sushi and sashimi, carefully curated to showcase the freshest and most delightful flavors of the ocean. A shared platter for those seeking a diverse sushi experience.",
    "£39.50",
    null,
    "src/sushi_moriawase.jpg",
    sushiMoriawase
  );
  const item7 = menuListItem(
    "Main",
    "Crab California Roll",
    "A classic fusion of imitation crab, creamy avocado, and crisp cucumber expertly rolled into a delightful sushi experience, finished with toasted sesame seeds.",
    "£10.99",
    null,
    "src/cali_crab_roll.jpg",
    caliCrabRoll
  );
  const item8 = menuListItem(
    "Main",
    "Chirashi Sushi",
    " An artful harmony of assorted fresh, sliced seafood atop seasoned sushi rice, garnished with pickled vegetables, seaweed, and roe. A stunning celebration of ocean flavors.",
    "£14.50",
    null,
    "src/chirashi_Sushi.jpg",
    chirashiSushi
  );
  const item9 = menuListItem(
    "Starter",
    "Dynamite Roll",
    "Our Dynamite Roll features a delectable combination of avocado, cucumber, and tempura sweet potato rolled inside, and it's crowned with a luscious whipped cream sauce.",
    "£8.50",
    "Vegetarian",
    "src/dynamite_roll.jpg",
    dynamiteRoll
  );
  const item10 = menuListItem(
    "Starter",
    "Kakiage",
    "Our Japanese tempura masterpiece. A crispy blend of courgettes, carrots, onions, and more, lightly coated in tempura batter, served with savory dipping sauce.",
    "£8.99",
    "Vegan",
    "src/battered_Kakiage.jpg",
    kakiage
  );
  const item11 = menuListItem(
    "Starter",
    "Salmon Maki",
    "A delectable marriage of fresh, succulent salmon, creamy avocado, and crisp cucumber, expertly rolled in nori and sushi rice. A classic sushi roll offering a perfect balance of flavors and textures.",
    "£9.50",
    null,
    "./salmon_maki.jpg",
    salmonMaki
  );
  const item12 = menuListItem(
    "Drink",
    "Sakura Blossom Brew",
    "Embrace spring's enchantment with this Japanese-inspired beer, subtly floral and refreshingly unique. Toast to the beauty of life with each sip of this limited-time favorite.",
    "£5.50",
    null,
    "src/sakura_brew.jpg",
    sakuraBrew
  );
  const item13 = menuListItem(
    "Drink",
    "Matcha Green Tea Cocktail",
    "An enchanting fusion of matcha's earthy allure with the zesty notes of citrus, harmonized with a hint of vodka or gin. A refreshing and unique cocktail, perfect for those seeking a touch of Japanese elegance in their drink.",
    "£8.50",
    null,
    "src/matcha_cocktail.jpg",
    matchaCocktail
  );
  const item14 = menuListItem(
    "Drink",
    "Yuzu Sour Mocktail",
    "An uplifting and citrusy delight crafted with the vibrant essence of Japanese yuzu, meticulously mixed with soda and a hint of lemon for a refreshing, alcohol-free experience.",
    "£6.50",
    "Alcohol-free",
    "src/yuzu_sour.jpg",
    yuzuSour
  );

  const entireMenu = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
  ];

  const starter = entireMenu.filter((item) => item.type === "Starter");
  const main = entireMenu.filter((item) => item.type === "Main");
  const dessert = entireMenu.filter((item) => item.type === "Dessert");
  const drinks = entireMenu.filter((item) => item.type === "Drink");

  const menuTitle = document.createElement("p");
  menuTitle.textContent = 'MENU';
  menuTitle.classList.add('pageTitle')
  infoArea.appendChild(menuTitle)

  const menuNavBar = document.createElement("div");
  menuNavBar.classList.add('menuNavBar');
  infoArea.appendChild(menuNavBar);

  const fullMenu = document.createElement("div");
  fullMenu.classList.add("fullMenuSection");
  infoArea.appendChild(fullMenu);

  //menu nav bar

  function createLink(linkHeader, hrefLink) {
    const link = document.createElement("a");
    link.textContent = linkHeader;
    link.classList.add('menuLink');
    link.href = hrefLink;
    menuNavBar.appendChild(link)
  }

  createLink('STARTERS', '#starterSection');
  createLink('MAINS', '#mainSection');
  createLink('DESSERT', '#dessertSection');
  createLink('DRINKS', '#drinkSection');

  //item format function

  function itemFormat(array) {
    array.forEach((item) => {
      const itemBox = document.createElement("div");
      itemBox.classList.add("itemBox");
      fullMenu.appendChild(itemBox);

      const image = new Image();
      image.src = item.imageName;
      image.style.maxWidth = "auto";
      image.style.maxHeight = "100%";

      const imageDiv = document.createElement("div");
      imageDiv.classList.add("imageDiv");
      imageDiv.appendChild(image);

      itemBox.appendChild(imageDiv);

      const itemInfoSide = document.createElement("div");
      itemInfoSide.classList.add("textBox");
      itemBox.appendChild(itemInfoSide);

      const infoSideTop = document.createElement("div");
      infoSideTop.classList.add("infoTop");
      itemInfoSide.appendChild(infoSideTop);

      const infoSideBottom = document.createElement("div");
      infoSideBottom.classList.add("infoBottom");
      itemInfoSide.appendChild(infoSideBottom);

      const foodTitle = document.createElement("p");
      foodTitle.classList.add("foodTitle");
      foodTitle.textContent = item.title;
      infoSideTop.appendChild(foodTitle);

      const itemDescription = document.createElement("p");
      itemDescription.classList.add("itemDescription");
      itemDescription.textContent = item.description;
      infoSideTop.appendChild(itemDescription);

      const requirements = document.createElement("p");
      requirements.classList.add("requirements");
      requirements.textContent = item.suitability;
      infoSideBottom.appendChild(requirements);

      const price = document.createElement("p");
      price.classList.add("price");
      price.textContent = item.price;
      infoSideBottom.appendChild(price);
    });
  }

  function createMenuSection(id, headerText, items) {
    const menuSection = document.createElement("div");
    menuSection.classList.add("menuSection");
    menuSection.setAttribute("id", id);
    fullMenu.appendChild(menuSection);
  
    const menuHeader = document.createElement("p");
    menuHeader.classList.add("menuHeader");
    menuHeader.textContent = headerText;
    menuSection.appendChild(menuHeader);
  
    itemFormat(items);
  }
  
  createMenuSection("starterSection", "STARTERS", starter);
  createMenuSection("mainSection", "MAINS", main);
  createMenuSection("dessertSection", "DESSERT", dessert);
  createMenuSection("drinkSection", "DRINKS", drinks);

  console.log('helloooo')
}