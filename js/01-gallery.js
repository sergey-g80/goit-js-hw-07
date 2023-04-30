import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const markup = galleryItems
//   .map((el) => `<li><img src="${el.preview}" alt="${el.description}" /></li>`)
//   .join(``);
// const heroEl = document.querySelector(`.gallery`);

// heroEl.insertAdjacentHTML(`afterbegin`, markup);

// console.log(markup)

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createImgCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
galleryContainer.addEventListener("click", onImgOriginalCard);

// rendered items
function createImgCard(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source ="${original}"
      alt ="${description}"
      widht = 100%
    />
  </a>
</div>`;
    })
    .join("");
}

function onImgOriginalCard(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target);

  function onCloseModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" widh="800" height="600"/>`,
    {
      onShow: () => window.addEventListener("keydown", onCloseModal),
      onClose: () => window.removeEventListener("keydown", onCloseModal),
    }
  );
  instance.show();
}

// console.log(galleryItems);
