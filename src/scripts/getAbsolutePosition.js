export default (el) => {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { 
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft, 
        bot: rect.bottom + scrollTop, 
        right: rect.right + scrollLeft, 
        width: rect.width,
        element: el }
}