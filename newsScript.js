const tgtNewsContainer = document.querySelector(".news-container");
const header = document.querySelector(".header");

const fetchNews = async () => {
  
  let response = await fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/`);
  let json = await response.json()
  for (let articles of json) {
    const tgtNews = document.querySelector(".news-container");
    const newsCard = document.createElement("div");
    newsCard.className = "news-card";
    const url = document.createElement("a");
    url.href = articles.url;
    const img = document.createElement("img");
    img.height = "250";
    img.width = "250";
    img.src = articles.imageUrl;
    url.append(img);
    const title = document.createElement("h4");
    title.innerHTML = articles.title;
    newsCard.append(url, title);
    tgtNews.append(newsCard);
  }
};

const submit = document.querySelector(".news-button");
submit.addEventListener("click", ()=>fetchNews());