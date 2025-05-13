import type { FunctionComponent, Attributes } from "react"

import {createElement} from 'react'

export type componentsProps<T, P> = { [key in T as string]: FunctionComponent<P> }


export type ComponentInstanceProps<T extends string, P extends object> = {
    type: T,
    componentProps: Attributes & P | null,
    components: componentsProps<T, P>
}


export const ComponentInstance = <T extends string,P extends object>(props: ComponentInstanceProps<T, P>) => {

    const {type,componentProps, components} = props

    const Component: FunctionComponent<P> | null = components ? components[type as string] : null;

    return Component ? createElement(Component, componentProps) : null;
}