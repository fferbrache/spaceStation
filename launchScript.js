const tgtLaunchContainer = document.querySelector(".launch-container");
const header = document.querySelector(".header");

const fetchLaunch = async () => {
  if (tgtLaunchContainer.length != 0) {
    tgtLaunchContainer.innerHTML = "";
  }
  
  let response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/launch/c0ac9a61-5aac-40d7-9919-3c29ea7d4172`);
  let json = await response.json()
  console.log(json)
  for (let launch of json) {
    const tgtLaunch = document.querySelector(".launch-container");
    const launchCard = document.createElement("div");
    launchCard.className = "launch-card";
    const url = document.createElement("a");
    url.href = launch.url
    const img = document.createElement("img");
    img.height = "140";
    img.width = "140";
    img.src = launch.imageUrl;
    url.append(img)
    const title = document.createElement("h5");
    title.innerHTML = launch.title
    const summary = document.createElement("h6");
    summary.innerHTML = launch.summary;
    launchCard.append(url, title, summary);
    tgtLaunch.append(launchCard);
  }
};

const submit = document.querySelector(".launch-button");
submit.addEventListener("click", ()=>fetchLaunch());