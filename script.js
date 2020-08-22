console.time('Emojifier')
let emojis = ['🐶', '⛷', '🏊‍♂️', '🚴‍♂️', '🚵‍♂️', '🏃', '🏅', '⛰', '🌴', '🧘‍♂️', '✨', '⚡️', '🌄', '🌻', '🌲', '🧗‍♂️', '🌳', '🏝', '🌊'];

const index = Math.floor(Math.random() * emojis.length);
const emoji1 = emojis[index];
// Remove emoji from list so there are no dupes shown
emojis = [...emojis.slice(0, index), ...emojis.slice(index + 1)];

const index2 = Math.floor(Math.random() * emojis.length);
const emoji2 = emojis[index2];
// Remove emoji from list so there are no dupes shown
emojis = [...emojis.slice(0, index2), ...emojis.slice(index2 + 1)];

const index3 = Math.floor(Math.random() * emojis.length);
const emoji3 = emojis[index3];

document.body.innerText = `${emoji1} ${emoji2} ${emoji3}`;
console.timeEnd('Emojifier')
