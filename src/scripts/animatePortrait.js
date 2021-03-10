import anime from 'animejs';

async function PortraitAnimations() {
    const portraitLines = Array.from(document.querySelectorAll('.portrait')[0].firstElementChild.childNodes).filter(el => el instanceof Element || el instanceof HTMLDocument);
    const leadingLines = Array.from(document.querySelectorAll('.leading-line'));
    const entryLine = document.querySelector('#portrait__line-left');
    const exitLines = leadingLines.filter(line => line.id !== 'portrait__line-left')
    //reset lines inside
    resetDasharrayAndOffset(portraitLines);
    leadingLines.forEach(line => resetDasharrayAndOffset([line.firstElementChild]))
    // //animate
    animateLine(entryLine, 1500, 500, true, true);
    portraitLines.forEach(line => animateLine(line, 500, 1500, false, true))
    exitLines.forEach(line => animateLine(line, 1400, 2000, true, true))
    // if(window.innerWidth > 600) {
    //     const entryLine = AnimateLine(DOM.portrait.leadingLines.leftLine, 2200, 2500)
    //     entryLine.play();
    
    //     lines.forEach(el => {
    //         const animation = AnimateLine(el, 600, 4250, false);
    //         animation.play();
    //     })
    
    //     const exitLines = Object.values(DOM.portrait.leadingLines).filter(el => el.id !== 'portrait__line-left')
    //     exitLines.forEach(el => {
    //         const animation = AnimateLine(el, 500, 4900, false);
    //         animation.play();
    //     })
    // }
}

function resetDasharrayAndOffset(arr) {
    let lines = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] instanceof Element) lines.push(arr[index]);   
    }
    lines.forEach(el => {
        el.style.strokeDasharray = el.getTotalLength();
        el.style.strokeDashoffset = el.getTotalLength();
    })
    return lines;
}

function animateLine(element ,duration = 4000, delay = 0, reset = true, autoplay = false) {
    if(element.tagName === 'svg') element = element.firstElementChild;
    const strokeDashoffset = window.getComputedStyle(element).strokeDasharray.slice(0, -2)

    const lineAnimation = anime({
        targets: element,
        strokeDashoffset: [anime.setDashoffset, (reset ? -strokeDashoffset : 0)],
        duration: duration,
        delay: delay,
        easing: 'easeInQuad',
        autoplay: autoplay,
   })
   return lineAnimation
}
export default PortraitAnimations;