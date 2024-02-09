const images = [...document.querySelectorAll('.image')];
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index=0;

images.forEach((item, i) => {
  item.addEventListener('click', () => {
    updateImage(i);
    popup.classList.toggle('active');
  })
})

const updateImage = (i) => {
  let path = `assets/img${i+1}.jpg`
  largeImage.src = path;
  imageName.innerHTML = path.slice(7);
  // imageIndex.innerHTML = `0${i+1}`;
  index = i;
}

closeBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
  if (index>0) {
    updateImage(index - 1);
  }
})
rightArrow.addEventListener('click', () => {
  if (index<images.length-1) {
    updateImage(index + 1)
  }
})

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}