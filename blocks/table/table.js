function removeClassesFromChildTables(table) {
  table.classList.add('no-margin');
  const tdElements = table.querySelectorAll('td');
  tdElements.forEach((td) => {
    td.classList.add('bg-transparent');
  });
}

export default function decorate(block) {
  const getHeadingLeftClass = block.classList.contains('heading-left');
  if (getHeadingLeftClass !== null && getHeadingLeftClass !== undefined) {
    const tds = block.querySelectorAll('tr td:first-child');
    let index = 0;
    while (index < tds.length) {
      const td = tds[index];
      td.classList.add('left-heading');
      const rowspan = td.getAttribute('rowspan');
      if (rowspan !== null && rowspan > 1) {
        const rowspanCount = parseInt(rowspan, 10);
        index += rowspanCount;
      } else {
        index += 1;
      }
    }
  }

  const tableRows = block.querySelectorAll('.table[data-block-name="table"] tr');
  tableRows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    cells.forEach((cell) => {
      if (cell.innerText.trim() === '') {
        cell.classList.add('bg-transparent');
      }
    });
  });
  const parentTable = block.querySelector('.table[data-block-name="table"] table');
  const childTable = parentTable.querySelector('table');
  if (childTable) {
    const { classList } = childTable.parentElement;
    classList.add('no-padding', 'no-margin');
    removeClassesFromChildTables(childTable);
  }
}
