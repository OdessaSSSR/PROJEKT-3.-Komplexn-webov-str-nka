/* -------------- Přepnutí světlého/tmavého režimu ------------------- */

const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

/*----------- Navigace ------------- */

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

/* ---------------  Registrace  ------------- */

document
  .getElementById("registrationForm")
  .addEventListener("input", function () {
    validateForm();
  });

function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const submitBtn = document.getElementById("submitBtn");
  const errorElement = document.getElementById("passwordError");
  const registrationConfirmation = document.getElementById("confirmation");

  let isValid = true;

  if (!username || !password || !confirmPassword) {
    isValid = false;
  }

  if (password !== confirmPassword) {
    errorElement.textContent = "Heslo nesouhlasí ";
    errorElement.classList.remove("success");
    errorElement.classList.add("error");
    isValid = false;
  } else {
    errorElement.textContent = "Heslo souhlasí ";
    errorElement.classList.remove("error");
    errorElement.classList.add("success");
  }

  if (isValid) {
    submitBtn.classList.add("enabled");
    submitBtn.disabled = false;
  } else {
    submitBtn.classList.remove("enabled");
    submitBtn.disabled = true;
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    registrationConfirmation.style.display = "block";
  });
}

/*---------------  Potvrzení registrace --------------- */

const confirmationWindow = document.querySelector(".confirmation");
const closeConfirmationWindow = document.querySelector(".close");

closeConfirmationWindow.addEventListener("click", () => {
  confirmationWindow.style.display = "none";
  document.getElementById("registrationForm").reset();
});

/* -------------- Tlačítko ZPĚT NAHORU ---------------- */

const btnUp = {
  el: document.querySelector(".btn-up"),
  show() {
    this.el.classList.remove("btn-up_hide");
  },
  hide() {
    this.el.classList.add("btn-up_hide");
  },
  addEventListener() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 170 ? this.show() : this.hide();
    });
    document.querySelector(".btn-up").onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();

/*--------------  Footer  -------------- */

const likeIt = document.querySelector(".yes");

likeIt.addEventListener("click", () => {
  alert("Děkujeme!");
});
