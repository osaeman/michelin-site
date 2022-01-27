// appearing of scroll page top  button and its function
const scrolltop = document.querySelector(".scrolltop");
document.addEventListener("scroll", scrollPageTop);
function scrollPageTop() {
  if (window.pageYOffset >= 1000) {
    scrolltop.style.opacity = "1";
    scrolltop.classList.add("sticky");
  } else {
    scrolltop.style.opacity = "0";
    scrolltop.classList.remove("sticky");
  }
}

scrolltop.addEventListener("click", uponclick);
function uponclick() {
  window.scrollTo(0, 0);
}

// navbar items hovering overlay behaviour
const navbaroverlayed = document.getElementById("navbar-overlayed");
const overlayEffectOn = document.querySelectorAll(".overlayEffectOn");
for (let ele of overlayEffectOn) {
  ele.addEventListener("mouseover", onhovering);
  function onhovering() {
    navbaroverlayed.classList.add("navbar-overlay1");
    navbaroverlayed.classList.add("navbar-overlay2");
  }
  ele.addEventListener("mouseout", outhovering);
  function outhovering() {
    navbaroverlayed.classList.remove("navbar-overlay2");
    navbaroverlayed.classList.remove("navbar-overlay1");
  }
}

// program for search pop up window  closing

const slidingin = document.getElementById("search");
const baby = document.getElementById("searchb");

const popup = document.getElementById("popup");
const clos = document.getElementById("close");
clos.addEventListener("click", onclickfour);
function onclickfour() {
  popup.style.display = "none";
  baby.classList.remove("searchb2");
  body.classList.remove("scroll-bar");
}

// program for search pop up window  opening
const call2 = document.querySelectorAll("#navbarSearchbar");
const body = document.body;
for (call of call2) {
  call.addEventListener("click", onclickfive);
  function onclickfive() {
    popup.style.display = "block";
    body.classList.add("scroll-bar");
  }
}

// program for search button sliding in

slidingin.addEventListener("focus", scheme);
function scheme() {
  baby.classList.add("searchb2");
}

// program for mobile navbar slide-ins
const top_bar_icon = document.getElementById("top-bar-icon");

const mobile_navbar_top_slider = document.getElementById(
  "mobile-navbar-section-top-slider"
);

const mobile_navbar_section_bottom = document.getElementById(
  "mobile-navbar-section-bottom"
);

const crossbtn = document.getElementById("crossbtn");

const mobile_navbar_left_slidein = document.querySelectorAll(
  ".mobile-navbar-left-slidein"
);

const mobile_navbar_section_bottom_container_sliderin = document.getElementById(
  "mobile-navbar-section-bottom-container-sliderin"
);

const left_arrow = document.getElementById("left-arrow");

top_bar_icon.addEventListener("click", onclicksix);
function onclicksix() {
  mobile_navbar_top_slider.classList.add("mobile-navbar-section-top-slider2");
  mobile_navbar_section_bottom.classList.add("mobile-navbar-section-bottom2");
  body.classList.add("scroll-bar");
}

crossbtn.addEventListener("click", onclickseven);
function onclickseven() {
  mobile_navbar_top_slider.classList.remove(
    "mobile-navbar-section-top-slider2"
  );
  mobile_navbar_section_bottom.classList.remove(
    "mobile-navbar-section-bottom2"
  );
  body.classList.remove("scroll-bar");
}
for (f of mobile_navbar_left_slidein) {
  f.addEventListener("click", onclickeight);
  function onclickeight() {
    mobile_navbar_section_bottom_container_sliderin.classList.add(
      "mobile-navbar-section-bottom-container-sliderin2"
    );
  }
}

left_arrow.addEventListener("click", onclicknine);
function onclicknine() {
  mobile_navbar_section_bottom_container_sliderin.classList.remove(
    "mobile-navbar-section-bottom-container-sliderin2"
  );
}
