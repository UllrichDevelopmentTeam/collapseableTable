const tableHead = document.querySelector('.tablepress thead tr');
const tableData = document.querySelectorAll('td');

console.log(Array.from(tableData));

for (th of tableHead.children) {
    // get the first match of the string column-# 
    let col = (th.classList.value).match(/(column\-[^\s]*)/g)[0];
    // console.log(col);
    th.addEventListener('click', function(e){
        clickHeader(col);

        if (e.target.innerHTML.search('(collapsed)') != -1) {
            e.target.innerHTML =  e.target.innerHTML.replace('(collapsed)', '');
        } else {
            e.target.innerHTML += ' (collapsed)'
        };
});
}

function clickHeader(col){
    for (td of tableData) {
        // console.log(td.classList)
        if (td.classList.contains(col)) {
            td.classList.toggle('hide-column');
        }
    };
}