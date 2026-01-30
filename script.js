const container = document.getElementById("news-container");

fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.newsfirst.lk/feed/")
  .then(res => res.json())
  .then(data => {
    container.innerHTML = "";
    data.items.slice(0, 6).forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.description.substring(0, 150)}...</p>
        <a href="${item.link}" target="_blank">Read full article</a>
        <hr>
      `;
      container.appendChild(div);
    });
  })
  .catch(() => {
    container.innerHTML = "Unable to load news at the moment.";
  });
.
