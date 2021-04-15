const tgtReportsContainer = document.querySelector(".reports-container");
const header = document.querySelector(".header");

const fetchReports = async () => {
  
  let response = await fetch(`https://test.spaceflightnewsapi.net/api/v2/reports/`);
  let json = await response.json()
  for (let reports of json) {
    const tgtReports = document.querySelector(".reports-container");
    const reportsCard = document.createElement("div");
    reportsCard.className = "reports-card";
    const url = document.createElement("a");
    url.href = reports.url;
    const img = document.createElement("img");
    img.height = "250";
    img.width = "250";
    img.src = reports.imageUrl;
    url.append(img);
    const title = document.createElement("h4");
    title.innerHTML = reports.title
    reportsCard.append(url, title);
    tgtReports.append(reportsCard);
  }
};

const submit = document.querySelector(".reports-button");
submit.addEventListener("click", ()=>fetchReports());