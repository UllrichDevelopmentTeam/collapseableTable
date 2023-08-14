// document
//     .querySelector('#generateBtn')
//     .addEventListener('click', function(e){
//         e.preventDefault();
//         generateCoverLetter();
// });

// this contains all of the th's we need to edit
const tableHead = document.querySelector('.tablepress thead tr');

for (th of tableHead.children) {
    // get the first match of the string column-# 
    let col = (th.classList.value).match(/(column\-[^\s]*)/g)[0];
    // console.log(col);
    th.addEventListener('click', function(e){
        clickHeader(col);
});
}

function clickHeader(col){
    console.log(col);
}

function getTableHeads(){
    console.log(document.querySelector('th.column-1').value)
}

console.log(document.querySelector('.tablepress thead tr').childNodes)

// document.querySelectorAll()

