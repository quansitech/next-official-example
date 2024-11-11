import { FunctionComponent } from "react";
import "./index.scss";

export type ueditorProps = {content:string, type?: "desktop" | "mobile"};

export const Ueditor: FunctionComponent<ueditorProps> = ({content, type = "desktop"}:ueditorProps) => {
    

    return <div
        className={`${type} article-content`}
        dangerouslySetInnerHTML={{__html: content}}
    />
}