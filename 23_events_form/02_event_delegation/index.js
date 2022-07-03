const arenaElem = document.querySelector('.arena');

const arrayOfNumbers = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }

  return result;
};

const generateSeats = () => {
  return arrayOfNumbers(1, 10)
    .map(
      seatNumber => `
  <div
    class="sector__seat"
    data-seat-number="${seatNumber}"></div>
`,
    )
    .join('');
};

const generateLines = () => {
  const seatsCount = generateSeats();
  return arrayOfNumbers(1, 10)
    .map(
      lineNumber => `
      <div
        class="sector__line"
        data-line-number="${lineNumber}"
      >
        ${seatsCount}
      </div>
    `,
    )
    .join('');
};

const generateArena = () => {
  const linesCount = generateLines();
  const arenaSectors = arrayOfNumbers(1, 3)
    .map(
      sectorNumber => `
      <div
        class="sector"
        data-sector-number="${sectorNumber}"
      >
        ${linesCount}
      </div>
    `,
    )
    .join('');

  arenaElem.innerHTML = arenaSectors;
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seatNum = event.target.dataset.seatNumber;
  const lineNum = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNum = event.target.closest('.sector').dataset.sectorNumber;
  const boardInfoElem = document.querySelector('.board__selected-seat');

  boardInfoElem.textContent = `S ${sectorNum} - L ${lineNum} - S ${seatNum}`;
};

arenaElem.addEventListener('click', onSeatSelect);

generateArena();
