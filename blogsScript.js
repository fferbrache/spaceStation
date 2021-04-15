const tgtBlogContainer = document.querySelector(".blog-container");
const header = document.querySelector(".header");

const fetchBlogs = async () => {
  if (tgtBlogContainer.length != 0) {
    tgtBlogContainer.innerHTML = "";
  }
  
  let response = await fetch(`https://test.spaceflightnewsapi.net/api/v2/blogs/`);
  let json = await response.json()
  console.log(json)
  for (let blogs of json) {
    const tgtBlogs = document.querySelector(".blog-container");
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";
    const url = document.createElement("a");
    url.href = blogs.url
    const img = document.createElement("img");
    img.height = "250";
    img.width = "250";
    img.src = blogs.imageUrl;
    url.append(img)
    const title = document.createElement("h4");
    title.innerHTML = blogs.title
    blogCard.append(url, title);
    tgtBlogs.append(blogCard);
  }
};

const submit = document.querySelector(".blog-button");
submit.addEventListener("click", ()=>fetchBlogs());