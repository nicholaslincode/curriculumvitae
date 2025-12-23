import { achievementsData } from './achievementsData.js';

const container = document.getElementById('achievements');

achievementsData.forEach(a => {
  const div = document.createElement('div');
  div.className = 'achievement';
  div.innerHTML = `<div class="year">${a.year}</div><div class="detail">${a.detail}</div>`;
  container.appendChild(div);
});