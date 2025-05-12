import pizza1 from '../asset/pizza1-removebg-preview.png';
import pizza2 from '../asset/pizza2-removebg-preview.png';
import pizza33 from '../asset/pizza3.png';
import sp1 from '../asset/sp1.png';
import sp2 from '../asset/sp2.png';
import sp3 from '../asset/spagitywithmeat-removebg-preview.png';
export function loadMenu() {
  console.log('Menu section loaded');
  document.body.className = 'menu-active';

  // Change content in the center text section
  const content = document.querySelector('.CenterText');
  content.innerHTML = 'The Menu';

  // Create wrapper div for pizzas and apply flex display
  const pizzaWrapper = document.createElement('div');
  pizzaWrapper.classList.add('pizzaWrapper');

  // Create MenuDiv for Pizza 1
  const MenuDiv1 = document.createElement('div');
  MenuDiv1.classList.add('MenuDiv1');
  const Pizza1 = document.createElement('img');
  Pizza1.classList.add('PizzaImg1');
  Pizza1.src = pizza1;
  Pizza1.alt = 'The pizza 1';
  const TextImg1 = document.createElement('div');
  TextImg1.classList.add('Text1Img');
  TextImg1.textContent = 'American Pizza';
  const price1 = document.createElement('div');
  price1.classList.add('PricePizza1');
  price1.textContent = 'Price 9$';
  const descripPizza1 = document.createElement('div');
  descripPizza1.textContent = '"Fresh veggies, and melted cheese on a crispy crust."';
  descripPizza1.classList.add('descripPizza');
  const merge1 = document.createElement('div');
  merge1.classList.add('merge');
  merge1.appendChild(TextImg1);
  merge1.appendChild(price1);
  merge1.appendChild(descripPizza1);
  MenuDiv1.appendChild(merge1);
  MenuDiv1.appendChild(Pizza1);

  // Create MenuDiv for Pizza 2
  const MenuDiv2 = document.createElement('div');
  MenuDiv2.classList.add('MenuDiv2');
  const Pizza2 = document.createElement('img');
  Pizza2.classList.add('ImgPizza2', 'PizzaImg2');
  Pizza2.src = pizza2;
  Pizza2.alt = 'The pizza 2';
  const TextImg2 = document.createElement('div');
  TextImg2.classList.add('TextImg2');
  TextImg2.textContent = 'Italian Pizza';
  const price2 = document.createElement('div');
  price2.textContent = 'Price 12$';
  price2.classList.add('PricePizza2');
  const descripPizza2 = document.createElement('div');
  descripPizza2.textContent = '"Fresh veggies, savory black olives, mushrooms, and melted cheese."';
  descripPizza2.classList.add('descriptionPizz2');
  const merge2 = document.createElement('div');
  merge2.classList.add('merge');
  merge2.appendChild(TextImg2);
  merge2.appendChild(price2);
  merge2.appendChild(descripPizza2);
  MenuDiv2.appendChild(merge2);
  MenuDiv2.appendChild(Pizza2);

  // Create MenuDiv for Pizza 3
  const MenuDiv3 = document.createElement('div');
  MenuDiv3.classList.add('MenuDiv3');
  const pizza3 = document.createElement('img');
  pizza3.src = pizza33;
  pizza3.alt = 'The pizza 3';
  pizza3.classList.add('PizzaImg3');
  const TextImg3 = document.createElement('div');
  TextImg3.classList.add('TextImg3');
  TextImg3.textContent = 'Seafood Pizza';
  const price3 = document.createElement('div');
  price3.classList.add('price3');
  price3.textContent = 'Price 15$';
  const descripPizza3 = document.createElement('div');
  descripPizza3.classList.add('descripPizza3');
  descripPizza3.textContent = '"A delicious combination of shrimp, mussels, and cheese."';
  const merge3 = document.createElement('div');
  merge3.classList.add('merge');
  merge3.appendChild(TextImg3);
  merge3.appendChild(price3);
  merge3.appendChild(descripPizza3);
  MenuDiv3.appendChild(merge3);
    MenuDiv3.appendChild(pizza3);


  // Append pizzas to the pizzaWrapper
  pizzaWrapper.appendChild(MenuDiv1);
  pizzaWrapper.appendChild(MenuDiv2);
  pizzaWrapper.appendChild(MenuDiv3);

  // Create MenuDiv for Spaghetti 1
  const SpaghettiDiv1 = document.createElement('div');
  SpaghettiDiv1.classList.add('MenuDiv1');
  const Spaghetti1 = document.createElement('img');
  Spaghetti1.classList.add('SpaghettiImg1');
  Spaghetti1.src = sp1;
  Spaghetti1.alt = 'Spaghetti 1';
  const TextImgSpaghetti1 = document.createElement('div');
  TextImgSpaghetti1.classList.add('Text1ImgSp1');
  TextImgSpaghetti1.textContent = 'Spaghetti Marinara';
  const priceSpaghetti1 = document.createElement('div');
  priceSpaghetti1.classList.add('PriceSpaghetti1');
  priceSpaghetti1.textContent = 'Price 10$';
  const descripSpaghetti1 = document.createElement('div');
  descripSpaghetti1.textContent = '"Classic spaghetti with marinara sauce and herbs."';
  descripSpaghetti1.classList.add('descripSpaghetti');
  const mergeSpaghetti1 = document.createElement('div');
  mergeSpaghetti1.classList.add('merge');
  mergeSpaghetti1.appendChild(TextImgSpaghetti1);
  mergeSpaghetti1.appendChild(priceSpaghetti1);
  mergeSpaghetti1.appendChild(descripSpaghetti1);
  SpaghettiDiv1.appendChild(mergeSpaghetti1);
  SpaghettiDiv1.appendChild(Spaghetti1);

  // Create MenuDiv for Spaghetti 2
  const SpaghettiDiv2 = document.createElement('div');
  SpaghettiDiv2.classList.add('MenuDiv2');
  const Spaghetti2 = document.createElement('img');
  Spaghetti2.classList.add('SpaghettiImg2');
  Spaghetti2.src = sp2;
  Spaghetti2.alt = 'Spaghetti 2';
  const TextImgSpaghetti2 = document.createElement('div');
  TextImgSpaghetti2.classList.add('TextImgSp2');
  TextImgSpaghetti2.textContent = 'Spaghetti Bolognese';
  const priceSpaghetti2 = document.createElement('div');
  priceSpaghetti2.classList.add('PriceSpaghetti2');
  priceSpaghetti2.textContent = 'Price 13$';
  const descripSpaghetti2 = document.createElement('div');
  descripSpaghetti2.classList.add('descriptionSpaghetti2');
  descripSpaghetti2.textContent = '"A creamy carbonara sauce with crispy pancetta."';
  const mergeSpaghetti2 = document.createElement('div');
  mergeSpaghetti2.classList.add('merge');
  mergeSpaghetti2.appendChild(TextImgSpaghetti2);
  mergeSpaghetti2.appendChild(priceSpaghetti2);
  mergeSpaghetti2.appendChild(descripSpaghetti2);
  SpaghettiDiv2.appendChild(mergeSpaghetti2);
  SpaghettiDiv2.appendChild(Spaghetti2);

  // Create MenuDiv for Spaghetti 3
  const SpaghettiDiv3 = document.createElement('div');
  SpaghettiDiv3.classList.add('MenuDiv3');
  const Spaghetti3 = document.createElement('img');
  Spaghetti3.classList.add('SpaghettiImg3');
  Spaghetti3.src = sp3;
  Spaghetti3.alt = 'Spaghetti 3';
  const TextImgSpaghetti3 = document.createElement('div');
  TextImgSpaghetti3.classList.add('TextImgSp3');
  TextImgSpaghetti3.textContent = 'Spaghetti Carbonara';
  const priceSpaghetti3 = document.createElement('div');
  priceSpaghetti3.classList.add('PriceSpaghetti3');
  priceSpaghetti3.textContent = 'Price 14$';
  const descripSpaghetti3 = document.createElement('div');
  descripSpaghetti3.classList.add('descripSpaghetti3');
  descripSpaghetti3.textContent = '"Spaghetti with rich meat sauce and herbs."';
  const mergeSpaghetti3 = document.createElement('div');
  mergeSpaghetti3.classList.add('merge');
  mergeSpaghetti3.appendChild(TextImgSpaghetti3);
  mergeSpaghetti3.appendChild(priceSpaghetti3);
  mergeSpaghetti3.appendChild(descripSpaghetti3);
  SpaghettiDiv3.appendChild(mergeSpaghetti3);
  SpaghettiDiv3.appendChild(Spaghetti3);

  // Append spaghetti to the pizzaWrapper
  pizzaWrapper.appendChild(SpaghettiDiv1);
  pizzaWrapper.appendChild(SpaghettiDiv2);
  pizzaWrapper.appendChild(SpaghettiDiv3);

  // Add the pizzaWrapper to the content section
  content.appendChild(pizzaWrapper);
}