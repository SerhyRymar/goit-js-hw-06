const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Шукаємо наш список

const galleryList = document.querySelector(".gallery");

// Створуємо галерею

const imageGallery = images
	.map(
		(picture) =>
			`<li class="galery__list"><img class="galery__item" src="${picture.url}" alt="${picture.alt}"</li>`)
  .join("");
  
  console.log(imageGallery);
  
galleryList.insertAdjacentHTML("afterbegin", imageGallery);
