{
  const burgerMenu = document.querySelector(".navigation__burger");
  const navLink = document.querySelectorAll(".navigation__link");

  const action = () => {
    const menu = document.querySelector(".navigation__right");
    const topLine = document.querySelector(".navigation__burger-line--top");
    const middleLine = document.querySelector(
      ".navigation__burger-line--middle",
    );
    const bottomLine = document.querySelector(
      ".navigation__burger-line--bottom",
    );

    menu.classList.toggle("menu--open");
    topLine.classList.toggle("topLine--open");
    middleLine.classList.toggle("middleLine--open");
    bottomLine.classList.toggle("bottomLine--open");
    const isOpened = burgerMenu.getAttribute("aria-expanded") === "true";

    burgerMenu.classList.toggle("burger--open", !isOpened);
    burgerMenu.setAttribute("aria-expanded", String(!isOpened));
  };

  burgerMenu.addEventListener("click", action);

  navLink.forEach((link) => {
    link.addEventListener("click", action);
  });
}
