const SelectLoaderFactory = require("../../../../../common/entities/select/SelectLoaderFactory");
const UserData = require("../../../../../common/users/UserData");
const PostCard = require("../../../../../common/blog/PostCard");
const HeaderOpen = require("../../../../../common/entities/header/HeaderOpen");

HeaderOpen.show();

UserData.init();

let postsFilter = { language: null, type: null, genre: null };

const spanModalTitle = document.getElementById("span-modal-title");

const languageSelect = document.getElementById("language-select");
const languagesLoader = new SelectLoaderFactory("/api/languages");

const typeSelect = document.getElementById("type-select");
const typesLoader = new SelectLoaderFactory("/api/types");

const genreSelect = document.getElementById("genre-select");
let genreLoader = null;

const postsArea = document.getElementById("posts-area");

const setModalTitle = async function () {
  let modalTitle = "Add post for ";
  modalTitle = modalTitle + languageSelect.children[languageSelect.selectedIndex].innerText;
  modalTitle = modalTitle + " | " + typeSelect.children[typeSelect.selectedIndex].innerText;
  modalTitle = modalTitle + " | " + genreSelect.children[genreSelect.selectedIndex].innerText;
  spanModalTitle.innerText = modalTitle;
}

const loadPosts = async function () {
  postsArea.innerHTML = "";
  if ((localStorage.getItem("language")) && (localStorage.getItem("type")) && (localStorage.getItem("genre"))) {
    let qry = "q=20";
    qry = qry + "&l=" + localStorage.getItem("language");
    qry = qry + "&t=" + localStorage.getItem("type");
    qry = qry + "&g=" + localStorage.getItem("genre");
    await fetch("/api/posts?" + qry)
      .then(res => res.json())
      .then(json => {
        json.results.forEach(result => {
          let pc = new PostCard(result);
          pc.show(postsArea);
        })
      })
  }
};

const setFilterLanguage = async function () {
  postsFilter = Object.assign({}, postsFilter, { language: languageSelect.value });
  localStorage.setItem("language", languageSelect.value);
  loadPosts();
};

const setFilterType = async function () {
  postsFilter = Object.assign({}, postsFilter, { type: typeSelect.value, genre: null });
  localStorage.setItem("type", typeSelect.value);
  localStorage.setItem("genre", null);
  loadPosts();
};

const setFiltergenre = async function () {
  postsFilter = Object.assign({}, postsFilter, { genre: genreSelect.value });
  localStorage.setItem("genre", genreSelect.value);
  loadPosts();
};

const loadLanguageSelect = async () => {
  await languagesLoader.load(languageSelect);
};

const loadTypeSelect = async () => {
  await typesLoader.load(typeSelect);
};

const loadGenreSelect = async () => {
  await genreLoader.load(genreSelect);
};

const loadSelects = async () => {
  await loadLanguageSelect();
  await setFilterLanguage();
  await loadTypeSelect();
  await setFilterType();
  genreLoader = new SelectLoaderFactory("/api/genres", typeSelect.value);
  await loadGenreSelect();
  await setFilterGenre();
};

loadSelects();

const addPostMenuButton = document.getElementById("add-post-menu-button");
const modalPost = document.getElementById("post-modal");
const closeModalPostButton = document.getElementById("close-modal-button");
const cancelPostButton = document.getElementById("cancel-post-button");

const linkForProfile = document.getElementById("link-for-profile");
linkForProfile.setAttribute("href", "/profile/" + UserData.id());
linkForProfile.innerText = UserData.fullName();

languageSelect.addEventListener("change", function (ev) {
  setFilterLanguage();
});

typeSelect.addEventListener("change", async function (ev) {
  genreLoader = null;
  genreLoader = new SelectLoaderFactory("/api/genres", typeSelect.value);
  await loadGenreSelect();
  setFilterType();
  setFilterGenre();
});

genreSelect.addEventListener("change", function (ev) {
  setFilterGenre();
});

addPostMenuButton.addEventListener("click", async function (ev) {
  await setModalTitle();
  document.getElementById("title").value = "";
  document.getElementById("text").value = "";
  document.getElementById("postimage").value = "";
  modalPost.classList.add("is-active");
});

closeModalPostButton.addEventListener("click", function (ev) {
  modalPost.classList.remove("is-active");
});

cancelPostButton.addEventListener("click", function (ev) {
  modalPost.classList.remove("is-active");
});

const formPost = document.getElementById("form-post");
const addPostButton = document.getElementById("add-post-button");

formPost.addEventListener("submit", async function (ev) {
  ev.preventDefault();
  document.getElementById("user-id-field").value = UserData.id();
  document.getElementById("language-id-field").value = postsFilter.language;
  document.getElementById("type-id-field").value = postsFilter.type;
  document.getElementById("genre-id-field").value = postsFilter.genre;
  let myData = new FormData(formPost);
  await fetch("/api/posts", {
    method: "POST",
    body: myData
  })
  modalPost.classList.remove("is-active");
  loadPosts();
});