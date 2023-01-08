const navigationPane = document.querySelector('.pagination');

const paginationNumbers = document.getElementById('pagination-numbers');

export const nextButton = document.getElementById('next-button');
export const prevButton = document.getElementById('prev-button');

let pageCount;

let currentPage;

// TODO: dopisać dodatkową klasę dla pierwszego i ostatniego, żeby ukrywać na małym ekranie
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

const displayLessPages = pageNum => {
  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));
    // ogólnie cała funkcja ma realizować kilka rzeczy:
    // ma wyświetlać przyciski x-2 .. x+2, gdzie x to bieżąca strona
    // ma wyświetlać stronę pierwszą i ostatnią - dla mobilek nie, ale to problem na później
    //

    // zastanowić się, czy pageCount <=5 nie jest potrzebny przez mobilki
    if (pageCount <= 7) {
      // prawdopodobnie dopóki stron jest nie więcej niż 7, nie ma nic do zrobienia
      // pokazuj wszystkie 7
    } else {
      // ppokazuj 1 ... x-2 .. x+2 ... N
      // dla 1 i N uwzględnij dodatkową klasę, żeby można było ukryć przyciski na mniejszych ekranach
      // kropki na mniejszych ekranach też są ukryte
      // trzeba jeszcze obsłużyć gdy x <3 oraz gdy x > N-2
      if (
        pageIndex == 1 ||
        pageIndex == pageCount ||
        (pageIndex >= pageNum - 2 && pageIndex <= pageNum + 2)
      ) {
        // placeholder
        button.classList.remove('hidden');
      } else {
        // placeholder
        button.classList.add('hidden');
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
