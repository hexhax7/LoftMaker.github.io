let footerDisplayed = false;

window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable) {
    console.log('You have reached the bottom of the page!');
    showFooter();
  } else {
    hideFooter();
  }
});

function showFooter() {
  if (!footerDisplayed) {
    document.getElementById("footer").style.display = "block";
    footerDisplayed = true;
  }
}

function hideFooter() {
  if (footerDisplayed) {
    document.getElementById("footer").style.display = "none";
    footerDisplayed = false;
  }
}
