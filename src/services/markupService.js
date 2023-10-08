export const createProductsMarkup = (products) => {
  return products
    .map(({ title, brand, description, images, price, id, stock }) => {
      return `    
      <li data-id="${id}">
        <h2>${title}</h2>
        <h3>${brand}</h3>
        <img src="${images[0]}" alt="${title}">
        <p>Опис: ${description}</p>
        <p>Ціна: ${price}$</p>
        <p>Залишок: ${stock}</p>
      </li>`;
    })
    .join("");
};