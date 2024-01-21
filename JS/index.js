const buttonAbout = document.querySelector('[data-js="about-button"]');
const buttonSkills = document.querySelector('[data-js="skills-button"]');
const buttonContact = document.querySelector('[data-js="contact-button"]');
const main = document.querySelector('[data-js="main"]');
const mainArticle = document.querySelector('[data-js="main-article"]');

const buttonBack = document.querySelector('[data-js="button-back"]');

buttonAbout.addEventListener("click", () => {
  const articleAbout = document.createElement("article");
  articleAbout.innerHTML = `<header class="header">
<h1 class="dark-mode__about">about</h1>
</header>
<section>
    <p class="circle about">I'm Jana.</p>
</section>`;

  main.append(articleAbout);
  mainArticle.classList.add("remove");

  buttonBack.addEventListener("click", () => {
    mainArticle.classList.remove("remove");
    articleAbout.classList.add("remove");
  });
});

buttonContact.addEventListener("click", () => {
  const articleContact = document.createElement("article");
  articleContact.innerHTML = `<header class="header">
  <h1 class="dark-mode__contact">contact</h1>
  </header>
  <section>
      <p class="circle contact">jana.ricarda.may@gmail.com</p>
  </section>`;

  main.append(articleContact);
  mainArticle.classList.add("remove");

  buttonBack.addEventListener("click", () => {
    mainArticle.classList.remove("remove");
    articleContact.classList.add("remove");
  });
});

buttonSkills.addEventListener("click", () => {
  const articleSkills = document.createElement("article");
  articleSkills.innerHTML = `<header class="header">
  <h1 class="dark-mode__skills">skills</h1>
  </header>
  <section>
      <p class="circle skills">HTML, CSS, Javascript, Git</p>
  </section>`;

  main.append(articleSkills);
  mainArticle.classList.add("remove");

  buttonBack.addEventListener("click", () => {
    mainArticle.classList.remove("remove");
    articleSkills.classList.add("remove");
  });
});
