import { presentationsData } from './presentationsData.js';

const container = document.getElementById('presentations');

presentationsData.forEach(a => {
  const div = document.createElement('div');
  div.className = 'presentation';
  div.innerHTML = `
                    <div class="period">${a.period}</div>
                    <div class="detail">
                        <div class="presentation-title">${a.title}</div>
                        <div class="presentation-contributors">${a.contributors}</div>
                        <div class="presentation-organization-type"><span class="presentation-organization">${a.organization}</span> | ${a.type}</div>
                        <div class="presentation-location">${a.location}</div>
                    </div>`;
  container.appendChild(div);
});
