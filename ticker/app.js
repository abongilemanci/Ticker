const url = 'https://script.google.com/macros/s/AKfycbyaf10agS-VXYLebPgbZES53yJX8XPjsUwlmJrc58Pvgi3k_cdjA8CdY4QR2strb1qL7Q/exec';
const output = document.querySelector('.output');
document.addEventListener('DOMContentLoaded', init);

function init() {
    fetch(url)
        .then((res) => { return res.json() })
        .then((data) => {
            makeOutput(data);
        })
}
function makeOutput(res) {
    console.log(res.status);
    res.data.forEach((row) => {
        const div = document.createElement('div');
        output.append(div);
        div.innerHTML = `${row['Title']}`;
        if (row.status) {
            div.style.color = 'green'
        } else {
            div.style = 'red';
        }
    });
}