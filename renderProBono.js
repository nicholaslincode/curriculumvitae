import { proBonoData } from './proBonoData.js';

const container = document.getElementById('probono');

proBonoData.forEach(a => {
  const div = document.createElement('div');
  div.className = 'probono-engagement';
  div.innerHTML = `<div class="period">${a.period}</div><div class="detail">${a.detail}</div>`;
  container.appendChild(div);
});