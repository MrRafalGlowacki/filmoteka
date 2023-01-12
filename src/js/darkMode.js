const body = document.querySelector('body');
const themeLightBtn = document.querySelector('.change-theme__btn');

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = theme;

let curentTheme = localStorage.getItem('curentTheme');

if (!curentTheme) {
  curentTheme = LIGHT;
  localStorage.setItem('curentTheme', LIGHT);
  body.classList.add(curentTheme);
} else {
  body.classList.add(curentTheme);
}

const changeToDark = () => {
  body.classList.add(DARK);
  body.classList.remove(LIGHT);
};
const changeToLIght = () => {
  body.classList.remove(DARK);
  body.classList.add(LIGHT);
};

const changeTheme = () => {
  body.classList.contains(DARK) ? changeToLIght() : changeToDark();

  localStorage.setItem(
    'curentTheme',
    body.classList.contains(DARK) ? DARK : LIGHT
  );
};

themeLightBtn.addEventListener('click', changeTheme);
