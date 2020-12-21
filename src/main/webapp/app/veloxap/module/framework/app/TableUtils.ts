// HTML table constants
const HTMLTableTableData = 'td';
const HTMLTableTableRow = 'tr';
const HTMLTableTableHeader = 'th';
const HTMLTableTableBody = 'tbody';
// jhipster component constants
const JHipsterListTableID = 'ListTable';
const JHipsterBtnCreateID = 'jh-create-entity';
const JHipsterBtnViewID = 'btnview';
const JHipsterBtnEditID = 'btnedit';
const JHipsterBtnDeleteID = 'btndelete';

// search-filter over an HTML table
export const filterHTMLTable = (filterInputID: string, filterTableID: string) => {
  // Declare variables
  const input = document.getElementById(filterInputID) as HTMLInputElement;
  if (!input) return;
  const filterVal = input.value.toUpperCase();
  const table = document.getElementById(filterTableID);
  if (!table) return;
  let rows = null;
  rows = table.getElementsByTagName(HTMLTableTableBody)[0].getElementsByTagName(HTMLTableTableRow);

  // create rexegexp to compare value entered
  const regexp = new RegExp(filterVal === null ? '' : filterVal.toUpperCase());

  // Loop through all table rows, and hide those who don't match the search query
  let rowi = 0;
  for (rowi = 0; rowi < rows.length; rowi++) {
    // check columns of current row
    let i = 0;
    for (i = 0; i < rows[rowi].cells.length; i++) {
      // skip hidden cells
      if (rows[rowi].cells[i].style.display === 'none') continue;
      // compare all visible cells with filter expression
      const fval = rows[rowi].cells[i].innerText.toUpperCase();
      if (filterVal === null || filterVal === '' || regexp.exec(fval)) rows[rowi].style.display = '';
      else rows[rowi].style.display = 'none';
    }
  }
};

// Bind a table row selector function to a table: current row is set to given output element
export const bindHTMLTableRowSelector = (selectedOutputID: string, filterTableID: string, selectColumnIds: string[]) => {
  // Declare variables
  const output = document.getElementById(selectedOutputID);
  if (!output) return;
  const table = document.getElementById(filterTableID);
  if (!table) return;
  let rows = null;
  rows = table.getElementsByTagName(HTMLTableTableBody)[0].getElementsByTagName(HTMLTableTableRow);

  // Loop through all table rows, and bind click on events
  let rowi = 0;
  for (rowi = 0; rowi < rows.length; rowi++) {
    // generate text for column values selected
    let selectColVals = '';
    selectColumnIds.map(itemColId => {
      let i = 0;
      for (i = 0; i < rows[rowi].cells.length; i++)
        if (rows[rowi].cells[i].id === itemColId) {
          selectColVals =
            selectColVals + (selectColVals !== '' ? ',' : '') + (rows[rowi].cells[i].innerText ? rows[rowi].cells[i].innerText : '');
        }
    });
    // set column values selected
    rows[rowi].onclick = () => {
      output.innerText = selectColVals ? selectColVals : '[null]';
    };
  }
};

// define selector component filtering functions
export const filterSelectorCompForJhipster = showColIds => {
  // hide buttons
  const btncreate = document.getElementById(JHipsterBtnCreateID);
  if (btncreate) btncreate.style.display = 'none';
  const btnview = document.getElementsByName(JHipsterBtnViewID);
  if (btnview)
    btnview.forEach(item => {
      item.style.display = 'none';
    });
  const btnedit = document.getElementsByName(JHipsterBtnEditID);
  if (btnedit)
    btnedit.forEach(item => {
      item.style.display = 'none';
    });
  const btndelete = document.getElementsByName(JHipsterBtnDeleteID);
  if (btndelete)
    btndelete.forEach(item => {
      item.style.display = 'none';
    });

  // filter columns
  if (showColIds) {
    // filter table headers
    const DOMcolheads = document.querySelectorAll(HTMLTableTableHeader);
    if (DOMcolheads)
      for (let i = 0; i < DOMcolheads.length; i++) {
        if (!showColIds.includes(DOMcolheads[i].id)) DOMcolheads[i].style.display = 'none';
      }
    // filter table data
    const DOMcolvals = document.querySelectorAll(HTMLTableTableData);
    if (DOMcolvals)
      for (let i = 0; i < DOMcolvals.length; i++) {
        if (!showColIds.includes(DOMcolvals[i].id)) DOMcolvals[i].style.display = 'none';
      }
  }

  // style selection component form
  const tableNode = document.getElementById(JHipsterListTableID);
  if (tableNode) {
    tableNode.setAttribute('variant', 'dark');
    tableNode.setAttribute('bordered', 'false');
    tableNode.setAttribute('hover', 'true');
    tableNode.setAttribute('size', 'sm');
    tableNode.setAttribute('striped', 'true');
  }
};
