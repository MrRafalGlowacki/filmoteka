const paginationNumbers = document.getElementById('pagination__numbers');

export const nextButton = document.getElementById('next-button');
export const prevButton = document.getElementById('prev-button');

let pageCount;

let currentPage;

const appendPageNumber = index => {
  if (index == pageCount) {
    let div = document.createElement('span');
    div.className = 'pagination__numbers-ellipsis';
    div.innerHTML = '&hellip;';
    div.classList.add('hidden-right');
    paginationNumbers.appendChild(div);
  }

  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination__number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);

  if (index == 1 || index == pageCount) {
    pageNumber.classList.add('hidden-mobile');
  }

  paginationNumbers.appendChild(pageNumber);

  if (index == 1) {
    let div = document.createElement('span');
    div.className = 'pagination__numbers-ellipsis';
    div.innerHTML = '&hellip;';
    div.classList.add('hidden-left');
    paginationNumbers.appendChild(div);
  }
};

export const getPaginationNumbers = pages => {
  paginationNumbers.innerHTML = '';
  pageCount = pages;
  for (let i = 1; i <= pages; i++) {
    appendPageNumber(i);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll('.pagination__number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('active');
    }
  });
};

const disableButton = button => {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
};

const enableButton = button => {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const displayLessPages = pageNum => {
  const dots = document.querySelectorAll('.pagination__numbers-ellipsis');
  console.log(dots);
  document.querySelectorAll('.pagination__number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));

    if (pageCount <= 7) {
      button.classList.remove('hidden');
      dots[0].classList.add('hidden-left');
      dots[1].classList.add('hidden-right');
    } else {
      if (pageNum <= 4) {
        dots[0].classList.add('hidden-left');
        dots[1].classList.remove('hidden-right');
      } else if (pageNum >= pageCount - 3) {
        dots[0].classList.remove('hidden-left');
        dots[1].classList.add('hidden-right');
      } else {
        dots[0].classList.remove('hidden-left');
        dots[1].classList.remove('hidden-right');
      }
    }

    if (pageNum <= 3) {
      if (pageIndex == 1) {
        button.classList.remove('hidden-mobile');
      }
      if (pageIndex == pageCount) {
        button.classList.add('hidden-mobile');
      }
      if (pageIndex <= 5 || pageIndex == pageCount) {
        button.classList.remove('hidden');
      } else {
        button.classList.add('hidden');
      }
    } else if (pageNum >= pageCount - 2) {
      if (pageIndex == 1) {
        button.classList.add('hidden-mobile');
      }
      if (pageIndex == pageCount) {
        button.classList.remove('hidden-mobile');
      }
      if (pageIndex >= pageCount - 4 || pageIndex == 1) {
        button.classList.remove('hidden');
      } else {
        button.classList.add('hidden');
      }
    } else {
      if (pageCount <= 7) {
        button.classList.remove('hidden');
        dots[0].classList.add('hidden-left');
        dots[1].classList.add('hidden-right');
        if (pageIndex == 1 || pageIndex == pageCount) {
          button.classList.remove('hidden-mobile');
        }
      } else {
        if (pageIndex == 1 || pageIndex == pageCount) {
          button.classList.remove('hidden');
          button.classList.add('hidden-mobile');
        } else if (pageIndex >= pageNum - 2 && pageIndex <= pageNum + 2) {
          button.classList.remove('hidden');
        } else {
          button.classList.add('hidden');
        }
      }
    }
  });
};

export const setCurrentPage = pageNum => {
  currentPage = pageNum;

  displayLessPages(currentPage);
  handleActivePageNumber();
  handlePageButtonsStatus();
};
