const tableHead = document.querySelector('.tablepress thead tr');
const tableData = document.querySelectorAll('td');
let thInfo = [];

for (th of tableHead.children) {
    // get the first match of the string column-# 
    let col = (th.classList.value).match(/(column\-[^\s]*)/g)[0];
    let arrayInput = {
        "column": col,
        "innerHTML": th.innerHTML,
        "width": th.style.cssText
    }
    // console.log(arrayInput);
    // console.log(th.style);
    thInfo.push(arrayInput)
    // console.log(thInfo);
    
    th.addEventListener('click', function(e){
        let originalInfo = thInfo.filter(function (data) {
            return data.column === col
        })
        clickHeader(col, originalInfo[0]['width']);
        if (e.target.innerHTML === '+') {
            // console.log(originalInfo[0]['innerHTML'])
            e.target.innerHTML = originalInfo[0]['innerHTML'];
            e.target.style.cssText = originalInfo[0]['width'];
        } else {
            e.target.innerHTML = '+';
            // console.log(e.target.innerHTML)
            e.target.style.cssText = 'width: 50px;';
        };
});
}

function clickHeader(col, width){
    for (td of tableData) {
        if (td.classList.contains(col)) {
            td.classList.toggle('hide-column');
            
        }
    };
}

// this fixes the issue with not seeing the password input box:
{/* <script>
document.querySelector('.post-password-required').style.cssText += 'margin: 0px 20px; padding: 50px 0px 100px;';
</script> */}



// old version

// const tableHead = document.querySelector('.tablepress thead tr');
// const tableData = document.querySelectorAll('td');

// console.log(Array.from(tableData));

// for (th of tableHead.children) {
//     // get the first match of the string column-# 
//     let col = (th.classList.value).match(/(column\-[^\s]*)/g)[0];
//     // console.log(col);
//     th.addEventListener('click', function(e){
//         clickHeader(col);

//         if (e.target.innerHTML.search('(collapsed)') != -1) {
//             e.target.innerHTML =  e.target.innerHTML.replace('(collapsed)', '');
//         } else {
//             e.target.innerHTML += ' (collapsed)'
//         };
// });
// }

// function clickHeader(col){
//     for (td of tableData) {
//         // console.log(td.classList)
//         if (td.classList.contains(col)) {
//             td.classList.toggle('hide-column');
//         }
//     };
// }