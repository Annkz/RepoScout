const input = document.querySelector("input");
const btn = document.querySelector(".searchbtn");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".githubJoinedDate");
const follower = document.querySelector(".followerTotal");
const following = document.querySelector(".followingTotal");
const locations = document.querySelector(".locations");
const insta = document.querySelector(".insta");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");
const githubBio = document.querySelector(".githubBio");
const repo = document.querySelector(".repoTotal");

let img = document.createElement("img");
let block = document.querySelector(".mainImg");

btn.addEventListener("click", function () {
  const url = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();
    const dateData = data.created_at.slice(0, data.created_at.length - 10);

    img.src = data.avatar_url;
    block.appendChild(img);
    block.style.border = "none";

    user.innerHTML = data.name;
    login.innerHTML = `@${data.login}`;
    joined.innerHTML = `Joined ${dateData}`;
    repo.innerHTML = data.public_repos;
    follower.innerHTML = data.followers;
    following.innerHTML = data.following;

    locations.innerHTML =
      data.location === "" || data.location === null
        ? "Location not provided"
        : data.location;

    insta.innerHTML =
      data.instagram_username === "" || data.instagram_username === null
        ? "Insta not provided"
        : data.instagram_username;

    websites.innerHTML =
      data.blog === "" || data.blog === null ? "No website" : data.blog;

    companies.innerHTML =
      data.company === "" || data.company === null
        ? "No Company"
        : data.company;
    
    githubBio.innerHTML = data.bio === "" || data.bio === null ? "This user has no bio..." : data.bio;
  }
  getUrl();
  input.value = "";
});

const toggle = function (e) {
  if (e.currentTarget.classList.contains("light--hidden")) {
    document.documentElement.setAttribute("color-mode", "light");
    localStorage.setItem("color-mode", "light");
    return;
  }
  document.documentElement.setAttribute("color-mode", "dark");
  localStorage.setItem("color-mode", "dark");
};

const toggleColorButtons = document.querySelectorAll(".color-mode_btn");
toggleColorButtons.forEach((btn) => {
  btn.addEventListener("click", toggle);
});
