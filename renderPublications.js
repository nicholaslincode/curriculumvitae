import { publicationsData } from './publicationsData.js';

const container = document.getElementById("publications");

publicationsData
  .sort((a, b) => b.year - a.year)
  .forEach(pub => {
    const div = document.createElement("div");
    div.className = "publication";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = pub.title;

    const authors = document.createElement("div");
    authors.className = "authors";
    authors.innerHTML = formatAuthors(pub);

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `
      <span class="journal">${pub.journal}</span>, ${pub.year}
      ${pub.doi ? ` | <a href="${pub.doi}" target="_blank">${pub.doi}</a>` : ""}
    `;

    div.appendChild(title);
    div.appendChild(authors);
    div.appendChild(meta);

     if (pub.equalFirstAuthors) {
      const note = document.createElement("div");
      note.className = "equal-note";
      note.textContent = "* Equal first authors";
      div.appendChild(note);
    }

    container.appendChild(div);
  });
  
function formatAuthors(pub) {
  // Split by ', ' and reconstruct Last, F. pairs
  const parts = pub.authorList.split(", ");
  const authors = [];
  for (let i = 0; i < parts.length; i += 2) {
    const author = i + 1 < parts.length ? `${parts[i]}, ${parts[i + 1]}` : parts[i];
    authors.push(author);
  }

  return authors
    .map(author => {
      // Bold equal first authors with †
      if (pub.equalFirstAuthors?.includes(author)) {
        return `<strong>${author}</strong>*`;
      }

      // Bold your name if not already in equal first authors
      if (author === "Lin, N." && !pub.equalFirstAuthors?.includes("Lin, N.")) {
        return `<strong>${author}</strong>`;
      }

      return author;
    })
    .join(", ");
}
