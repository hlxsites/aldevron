function removeClassesFromChildTables(table) {
  table.classList.add('no-margin');
  const tdElements = table.querySelectorAll('td');
  tdElements.forEach((td) => {
    td.classList.add('bg-transparent');
  });
}

export default function decorate(block) {
  const parentTable = block.querySelector('.table[data-block-name="table"] table');
  const childTable = parentTable.querySelector('table');
  if (childTable) {
    const { classList } = childTable.parentElement;
    classList.add('no-padding', 'no-margin');
    removeClassesFromChildTables(childTable);
  }
}
