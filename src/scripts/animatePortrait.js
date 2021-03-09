import anime from 'animejs';

async function PortraitAnimations() {
    const portraitLines = document.querySelectorAll('.portrait')[0].firstElementChild.childNodes
    const leadingLines = document.querySelectorAll('.leading-line')
    //reset lines inside
    resetDasharrayAndOffset(portraitLines);
    leadingLines.forEach(line => resetDasharrayAndOffset([line.firstElementChild]))
    // //animate
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
    console.log(arr)
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
export default PortraitAnimations;