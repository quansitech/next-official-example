import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const getSearchParams = (headers: ReadonlyHeaders, p: string): string => {
    const search = headers.get("x-search");
    if(search){
        const searchParams = new URLSearchParams(search);
        return searchParams.get(p) || "";
    }
    else{
        return "";
    }
}

// 为url添加请求参数 http
export const appendParamsToUrl = (url: string, params: { [key: string]: string | number | boolean }): string => {
    const urlObj = new URL(url, 'http://example.com'); // 基于基准 URL 解析
    Object.keys(params).forEach(key => urlObj.searchParams.append(key, String(params[key])));
    return urlObj.pathname + urlObj.search;
};

export const api = async (url: string, options?: {}) => {
    const baseUrl = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}${url}`, { ...(options || {cache: 'no-store'})});
    const body = await res.json();

    if(body.status){
        return body.data;
    }
    else{
        throw new Error(body.info);
    }
}

export const generateUUID = () => {
    let uuid = '', i, random;
    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;

      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
  }

