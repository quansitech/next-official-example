import type { FunctionComponent, Attributes } from "react"

import {createElement} from 'react'

export type componentsProps<T, P> = { [key in T as string]: FunctionComponent<P> }


export type ComponentInstanceProps<T extends string, P extends {}> = {
    type: T,
    componentProps: Attributes & P | null,
    components: componentsProps<T, P>
}


export const ComponentInstance = <T extends string,P extends {}>(props: ComponentInstanceProps<T, P>) => {

    let {type,componentProps, components} = props

    const Component: FunctionComponent<P> | null = components ? components[type as string] : null;

    return Component ? createElement(Component, componentProps) : null;
}