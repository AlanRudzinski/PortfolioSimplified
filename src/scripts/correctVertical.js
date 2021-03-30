import getAbsolutePosition from './getAbsolutePosition'

export default () => {
    correct(document.querySelector('#portrait__line-down-left'), document.querySelector('#contact-link'), 150)
    correct(document.querySelector('#portrait__line-top-left'), document.querySelector('#about-link'), 500)

}

function correct(line, link, con) {
    const distancePoint = getPoints(line, 2).y
    let moveValue = distancePoint + getAbsolutePosition(line).top - getAbsolutePosition(link).bot + con;

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