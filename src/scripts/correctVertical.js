import getAbsolutePosition from './getAbsolutePosition'

export default () => {
    correct(document.querySelector('#portrait__line-down-left'), document.querySelector('#contact-link'), 150)
    correct(document.querySelector('#portrait__line-top-left'), document.querySelector('#about-link'), 500)

}

// function correctPosition(line, link) {
//     correctHorizontal(line, link);L
//     correctVertical(line, link); 
// }

// export function correctHorizontal(line, link){
//     let moveValue = GetAbsolutePosition(link).left - GetAbsolutePosition(line).left;
    
//     const points = {
//         firstPoint: getPoints(line, 1),
//         secondPoint: getPoints(line, 2)
//     }
//     if (moveValue > 0) {
//         moveValue -= points.firstPoint.x;
//         points.firstPoint.x += moveValue;
//         points.secondPoint.x += moveValue;
//         if(points.firstPoint.x > line.getAttribute("viewBox").split(" ")[2]) {
//             const linkWidth = link.getBoundingClientRect().width
//             modifyWidth(line, moveValue + linkWidth)
//             points.firstPoint.x += linkWidth;
//             points.secondPoint.x += linkWidth;
//         } else {
//           if(getPoints(line, line.firstElementChild.points.length).x + moveValue <= line.getAttribute("viewBox").split(" ")[2]){
//             getPoints(line, line.firstElementChild.points.length).x += moveValue;  
//           } 
//         }
//     } else {
//         modifyWidth(line, -moveValue);
//         getPoints(line, line.firstElementChild.points.length).x -= moveValue;
//     } 
// }

function correct(line, link, con) {
    const distancePoint = getPoints(line, 2).y
    let moveValue = distancePoint + getAbsolutePosition(line).top - getAbsolutePosition(link).bot + con;
    // let moveValue = distancePoint + GetAbsolutePosition(link).bot - GetAbsolutePosition(line).top  + 5;

    const points = {
        firstPoint: getPoints(line, 2),
        secondPoint: getPoints(line, 3)
        }
    if(moveValue > 0) {
        points.firstPoint.y -= moveValue;
        points.secondPoint.y -= moveValue;
    } else {
        if(points.firstPoint.y !== 0 && points.secondPoint.y !== 0) modifyHeight(line, -moveValue);
        points.firstPoint.y += -moveValue;
        points.secondPoint.y += -moveValue;
    }   
}


function getPoints(line, point = 1) {
    return line.firstElementChild.points[line.firstElementChild.points.length - point];
}

function modifyHeight(element, value){
    element.style.height = `${element.getBoundingClientRect().height + value}px`;
    let viewBoxArr = element.getAttribute("viewBox").split(" ");
    viewBoxArr[3] = parseInt(viewBoxArr[3]) + value;
    viewBoxArr = viewBoxArr.join(" ");
    element.setAttribute("viewBox", viewBoxArr);
}

// function modifyWidth(element, value) {
//     element.style.width = `${element.getBoundingClientRect().width + value}px`
//     let viewBoxArr = element.getAttribute("viewBox").split(" ")
//     viewBoxArr[2] = parseInt(viewBoxArr[2]) + value
//     viewBoxArr = viewBoxArr.join(" ")
//     element.setAttribute("viewBox", viewBoxArr)
// }