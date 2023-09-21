const tgtReportsContainer = document.querySelector(".reports-container");
const header = document.querySelector(".header");

const fetchReports = async () => {
  if (tgtReportsContainer.length != 0) {
    tgtReportsContainer.innerHTML = "";
  }
  
  let response = await fetch(`https://api.spaceflightnewsapi.net/v3/reports/`);
  let json = await response.json()
  for (let reports of json) {
    const tgtReports = document.querySelector(".reports-container");
    const reportsCard = document.createElement("div");
    reportsCard.className = "reports-card";
    const url = document.createElement("a");
    url.href = reports.url;
    url.style = "color:black"
    const title = document.createElement("h4");
    title.innerHTML = reports.title
    const summary = document.createElement("h6");
    summary.innerHTML = reports.summary
    url.append(title)
    reportsCard.append(url, summary);
    tgtReports.append(reportsCard);
  }
};

const submit = document.querySelector(".reports-button");
submit.addEventListener("click", ()=>fetchReports());