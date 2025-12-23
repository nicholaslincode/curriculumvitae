import { otherExperiencesData } from './otherExperiencesData.js';

const container = document.getElementById('other');

otherExperiencesData.forEach(a => {
  const div = document.createElement('div');
  div.className = 'other-experience';
  div.innerHTML = `<div class="period">${a.period}</div><div class="detail">${a.detail}</div>`;
  container.appendChild(div);
});