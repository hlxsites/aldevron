function removeClassesFromChildTables(table) {
  table.classList.add('no-margin');
  const tdElements = table.querySelectorAll('td');
  tdElements.forEach((td) => {
    td.classList.add('bg-transparent');
  });
}

export default function decorate(block) {
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
