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

export const setCurrentPage = pageNum => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
};
