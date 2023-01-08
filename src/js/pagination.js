const navigationPane = document.querySelector('.pagination');

const paginationNumbers = document.getElementById('pagination-numbers');

export const nextButton = document.getElementById('next-button');
export const prevButton = document.getElementById('prev-button');

let pageCount;

let currentPage;

const appendPageNumber = index => {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);

  if (index == 1 || index == pageCount) {
    pageNumber.classList.add('hidden-mobile');
  }

  paginationNumbers.appendChild(pageNumber);
};

export const getPaginationNumbers = pages => {
  paginationNumbers.innerHTML = '';
  pageCount = pages;
  for (let i = 1; i <= pages; i++) {
    appendPageNumber(i);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll('.pagination-number').forEach(button => {
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
  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));

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
