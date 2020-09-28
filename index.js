'use strict'

const targetIMG = document.querySelector('.img');
const targetText = document.querySelector('#text');

targetIMG.addEventListener('mouseenter', () => {
    targetText.className = 'message-on message';
});

targetIMG.addEventListener('mouseleave', () => {
    targetText.className = 'message-off message';
});

