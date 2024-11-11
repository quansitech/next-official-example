"use client"

const isMobileUserAgent = ()=>{
    if (typeof navigator !== 'undefined') {
        return /mobile/i.test(navigator.userAgent);
    }
    return false;
}

export const getTypeByClient = ()=>{
    return  (isMobileUserAgent()) ? 'mobile' : 'desktop'
}