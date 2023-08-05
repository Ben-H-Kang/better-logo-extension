// alert("contentScript entrance");
setTimeout(realLogoSwap, 2000);

function realLogoSwap() {
    const fakeLogo = document.querySelector(".css-56i8za");
    const realLogo = document.createElement('img');
    realLogo.src = 'https://raw.githubusercontent.com/Ben-H-Kang/better-logo-extension/main/Safeimagekit-resized-img.png';
    realLogo.alt = 'the real refer me logo';     
    realLogo.style.cssText = "height: 32px; width: 32px"
    const logoHolder = document.querySelector('.chakra-stack.css-1igwmid');
    logoHolder.replaceChild(realLogo, fakeLogo)
}

const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList') {
            realLogoSwap();
        }
    }
});

function startObserving() {
    const targetNode = document.querySelector('body');
    const config = { childList: true, subtree: true };
    observer.observe(targetNode, config);
}

startObserving();