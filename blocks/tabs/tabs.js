function removeActiveClasses(content) {
  const contentElements = content.querySelectorAll('.tabpanel');
  [...contentElements].forEach((element) => {
    element.classList.remove('active');
  });
  const listElements = content.querySelectorAll('button');
  [...listElements].forEach((element) => {
    element.classList.remove('active');
  });
}

function activeFirstElements(content) {
  const contentElement = content.querySelector('.tabpanel');
  contentElement.classList.add('active');
  const listElement = content.querySelector('button');
  listElement.classList.add('active');
}

function styleTablesBasedOnColumns(tables) {
  tables.forEach((table) => {
    const trs = table.querySelectorAll('tr');
    if (trs.length === 0) return;

    // Check the first row to determine column count
    const firstRow = trs[0];
    const columns = firstRow.querySelectorAll('td, th').length;

    // Add specific class based on column count
    if (columns === 2) {
      table.classList.add('two-column-table');
    } else if (columns === 3) {
      table.classList.add('three-column-table');
    }

    trs.forEach((tr) => {
      const tds = tr.querySelectorAll('td');
      if (tds.length === 0) return;

      const isEmptyRow = Array.from(tds).every((td) => td.innerHTML.trim() === '');

      if (isEmptyRow) {
        tr.style.display = 'none';
      }
    });
  });
}

export default function decorate(block) {
  const tabComponent = document.createElement('div');
  tabComponent.className = 'mmg-tabs';
  const ul = document.createElement('div');
  ul.className = 'tablist';
  const tabContent = document.createElement('div');
  tabContent.className = 'tabpanels';

  // Iterate through block's children and create tabs
  [...block.children].forEach((row) => {
    const itemContent = row.children[1];
    itemContent.className = 'tabpanel';
    const li = document.createElement('button');
    li.className = 'tab';
    li.appendChild(row.children[0]);

    li.addEventListener('click', () => {
      removeActiveClasses(tabComponent);
      li.classList.add('active');
      itemContent.classList.add('active');
    });
    ul.appendChild(li);
    tabContent.appendChild(itemContent);
  });

  // Set the first tab as active by default
  block.textContent = '';
  tabComponent.appendChild(ul);
  tabComponent.appendChild(tabContent);
  block.appendChild(tabComponent);
  activeFirstElements(tabComponent);
  
  const tables = block.querySelectorAll('table');
  styleTablesBasedOnColumns(tables);
}