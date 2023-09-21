const tgtBlogContainer = document.querySelector(".blog-container");
const header = document.querySelector(".header");

const fetchBlogs = async () => {
  if (tgtBlogContainer.length != 0) {
    tgtBlogContainer.innerHTML = "";
  }
  
  let response = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs/`);
  let json = await response.json()
  console.log(json)
  for (let blogs of json) {
    const tgtBlogs = document.querySelector(".blog-container");
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";
    const url = document.createElement("a");
    url.href = blogs.url
    const img = document.createElement("img");
    img.height = "150";
    img.width = "150";
    img.src = blogs.imageUrl;
    url.append(img)
    const title = document.createElement("h4");
    title.innerHTML = blogs.title
    const summary = document.createElement("h5");
    summary.innerHTML = blogs.summary;
    blogCard.append(url, title, summary);
    tgtBlogs.append(blogCard);
  }
};

const submit = document.querySelector(".blog-button");
submit.addEventListener("click", ()=>fetchBlogs());