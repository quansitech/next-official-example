export const getWindowWidth = (): number => {
    return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
};