// import emailJsInit from './scripts/emailJsInit';

import PortraitAnimations from './scripts/animatePortrait';
import correctVertical from './scripts/correctVertical';
import './scss/global.scss';
import './scss/pages/index.scss';

const app = () => {
    PortraitAnimations();
    correctVertical();
}

app();