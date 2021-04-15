const tgtNewsContainer = document.querySelector(".news-container");
const header = document.querySelector(".header");

const fetchNews = async () => {
  if (tgtNewsContainer.length != 0) {
    tgtNewsContainer.innerHTML = "";
  }
  
  let response = await fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/`);
  let json = await response.json()
  for (let articles of json) {
    const tgtNews = document.querySelector(".news-container");
    const newsCard = document.createElement("div");
    newsCard.className = "news-card";
    const url = document.createElement("a");
    url.href = articles.url;
    const img = document.createElement("img");
    img.height = "150";
    img.width = "150";
    img.src = articles.imageUrl;
    url.append(img);
    const title = document.createElement("h5");
    title.innerHTML = articles.title;
    const summary = document.createElement("h6");
    summary.innerHTML = articles.summary;
    newsCard.append(url, title, summary);
    tgtNews.append(newsCard);
  }
};

const submit = document.querySelector(".news-button");
submit.addEventListener("click", ()=>fetchNews());