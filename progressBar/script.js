function load(seconds) {
    let bar = document.getElementsByClassName('bar')[0];
    let width = 0;
    let id = setInterval(adds, seconds * 1000 / 100)

    function adds() {
        if (width === 100) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = `${width}%`;
            bar.innerText = `${width} %`;
            console.log(bar.text)
        }
    }
}

function fillBar() {
    let bar = document.querySelector('.bar-two');
    bar.style.width = '0%'
    bar.style.transition = `${1}s linear width`;
    bar.style.width = '100%';
}