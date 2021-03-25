// import emailJsInit from './scripts/emailJsInit';
import 'regenerator-runtime/runtime'
import PortraitAnimations from './scripts/animatePortrait';
import correctVertical from './scripts/correctVertical';
import isTouchScreen from './scripts/isTouchScreen';
import './scss/global.scss';
import './scss/pages/index.scss';

const app = () => {
    PortraitAnimations();
    correctVertical();

    const touchArea = document.querySelector(".mobile-tap-area");
    if(isTouchScreen()) {
        touchArea.addEventListener('touchstart', function onFirstTouch() {
            touchArea.classList.add('hide');
            const linksList = document.querySelectorAll('.navigation__list__link');
            Array.from(linksList).forEach(el => el.classList.add('animate-change-text'))
            touchArea.removeEventListener('touchstart', onFirstTouch, false);
        }, false)
    } else {
        touchArea.classList.add('hide');
    }

}
app();