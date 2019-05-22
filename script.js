document.getElementById('input-text').addEventListener('input', function (ev) {
    const text = ev.target.value.trim();
    const text_element = document.getElementById('glitch-text');
    text_element.innerText = text;
    text_element.setAttribute('data-text', text);
});

document.getElementById('input-font').addEventListener('input', function (ev) {
    document.getElementById('glitch-text').style.fontFamily = ev.target.value;
});