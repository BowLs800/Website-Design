let sliderImages = [];
let sliderIndex = 0;

function openSliderModal(images, title, desc) {
  sliderImages = images;
  sliderIndex = 0;

  document.getElementById("slider-main-image").src = images[0];
  document.getElementById("slider-title").textContent = title;
  document.getElementById("slider-desc").textContent = desc;

  // thumbnails
  const thumbContainer = document.getElementById("slider-thumbnails");
  thumbContainer.innerHTML = "";
  images.forEach((img, i) => {
    thumbContainer.innerHTML += `
      <img src="${img}"
           class="w-20 h-20 object-cover rounded-lg cursor-pointer border
                  ${i === 0 ? 'border-blue-600' : 'border-transparent'}"
           onclick="goToSlide(${i})">
    `;
  });

  document.getElementById("product-slider-modal").classList.remove("hidden");
}

function closeSliderModal() {
  document.getElementById("product-slider-modal").classList.add("hidden");
}

function goToSlide(i) {
  sliderIndex = i;
  document.getElementById("slider-main-image").src = sliderImages[i];

  const thumbs = document.querySelectorAll("#slider-thumbnails img");
  thumbs.forEach((t, idx) => {
    t.classList.toggle("border-blue-600", idx === i);
    t.classList.toggle("border-transparent", idx !== i);
  });
}

function nextSlide() {
  sliderIndex = (sliderIndex + 1) % sliderImages.length;
  goToSlide(sliderIndex);
}

function prevSlide() {
  sliderIndex = (sliderIndex - 1 + sliderImages.length) % sliderImages.length;
  goToSlide(sliderIndex);
}
