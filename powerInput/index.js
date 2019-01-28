let timer = 1;

const initValues = Array
    .from(document.getElementsByClassName('output'))
    .map(block => parseInt(block.innerText));

document
    .getElementById('power')
    .addEventListener('input', () => {
        const power = parseFloat(document
            .getElementById('power')
            .value) || 1;

        const blocks = document.getElementsByClassName('output');
        initValues.forEach((value, i) => {
            blocks[i].innerText = Math.pow(value, power)
        });

        if (timer) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                initValues.forEach((value, i) => {
                    blocks[i].innerText = value
                });
            }, 3000)
        }
    });