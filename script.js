const profileImageContainer = document.querySelector('.profile-image-container');
const socialLinks = document.querySelector('.social-links');
const nameContainer = document.querySelector('.name-container');
const profileName = document.querySelector('.profile-name');

function isMobileDevice() {
  const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|rim)|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
  
  return mobileRegex.test(navigator.userAgent);
}

window.addEventListener('scroll', () => {

    if(isMobileDevice())
        return

    const scrollPosition = window.scrollY;

    const reductionFactor = 5;

    const newSize = Math.max(15, 25 - scrollPosition / reductionFactor);
    const newMargin = Math.max(2, 5 - scrollPosition / reductionFactor);
    const newProfileNameHeight = Math.max(2.5, 5 - scrollPosition / reductionFactor);

    console.log("scrollPosition: " + scrollPosition)
    console.log("newSize: " + newSize)

    profileImageContainer.style.width = `${newSize}rem`;
    profileImageContainer.style.height = `${newSize}rem`;

    socialLinks.style.margin = `${newMargin}rem 0`

    nameContainer.style.height = `${newProfileNameHeight}rem`
    profileName.style.fontSize = `${newProfileNameHeight / 2}rem`
});