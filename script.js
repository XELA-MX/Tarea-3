const gswScore = document.getElementById('gsw');
const lacScore = document.getElementById('lac');
const meterCurryBtn = document.getElementById('meterCurry');
const curryImage = document.getElementById('curryImage');
const apreciarBtn = document.getElementById('apreciar');
const apreciacionesText = document.getElementById('apreciaciones');

let curryEnCancha = false;
let apreciaciones = 0;

meterCurryBtn.addEventListener('click', function() {
    if (!curryEnCancha) {
        gswScore.textContent = 'GSW: 100';
        curryImage.style.display = 'block';
        meterCurryBtn.textContent = 'El chef esta cocinando! 🔥';
        curryEnCancha = true;
    } else {
        alert('Ntp , el chef ya esta cocinando! 🏀✨');
    }
});

apreciarBtn.addEventListener('click', function() {
    apreciaciones++;
    apreciacionesText.textContent = `Apreciaciones: ${apreciaciones}`;

    if (apreciaciones % 10 === 0) {
        alert(`¡Wow! ${apreciaciones} apreciaciones. Curry te dedica un tiro desde media cancha 🎯`);
    }
});
