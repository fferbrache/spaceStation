const tgtLaunchContainer = document.querySelector(".launch-container");
const header = document.querySelector(".header");

const fetchLaunch = async () => {
  
  let response = await fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/launch/c0ac9a61-5aac-40d7-9919-3c29ea7d4172`);
  let json = await response.json()
  console.log(json)
  for (let launch of json) {
    const tgtLaunch = document.querySelector(".launch-container");
    const launchCard = document.createElement("div");
    launchCard.className = "launch-card";
    const url = document.createElement("a");
    url.href = launch.url
    const img = document.createElement("img");
    img.height = "250";
    img.width = "250";
    img.src = launch.imageUrl;
    url.append(img)
    const title = document.createElement("h4");
    title.innerHTML = launch.title
    launchCard.append(url, title);
    tgtLaunch.append(launchCard);
  }
};

const submit = document.querySelector(".launch-button");
submit.addEventListener("click", ()=>fetchLaunch());