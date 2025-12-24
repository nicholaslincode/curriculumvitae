import { academicData } from './academicData.js';

const container = document.getElementById('academic');

academicData.forEach(a => {
  const div = document.createElement('div');
  div.className = 'academic-experience';
  div.innerHTML = `
                    <div class="period">${a.period}</div>
                    <div class="detail">
                        <div class="institution">${a.institution}</div>
                        <div class="academic-position-department">
                            <div class="academic-position">${a.position}<span> | <span></div>
                            
                            <div class="department">${a.department}</div>
                        </div>
                        <div class="research"><p>Research: ${a.research}.</p></div>
                    </div>`;
  container.appendChild(div);
});