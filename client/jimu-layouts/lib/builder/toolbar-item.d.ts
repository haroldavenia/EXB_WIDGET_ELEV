/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import type { ToolItemConfig } from '../types';
import { type ToolbarContextProps } from './toolbar-context';
export declare const DEFAULT_ICON_SIZE = 16;
export declare class ToolbarItem extends React.PureComponent<ToolItemConfig & {
    uid: string;
    isInGroup?: boolean;
}> {
    contextProps: ToolbarContextProps;
    reference: HTMLButtonElement;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    select: (e: React.MouseEvent) => void;
    handleDoubleClick: (e: React.MouseEvent) => void;
    handleMouseEnter: (e: React.MouseEvent) => void;
    handleMouseLeave: (e: React.MouseEvent) => void;
    getValue(target: any, props: any): any;
    getStyle(): import("jimu-core").SerializedStyles;
    separatorStyle(): import("jimu-core").SerializedStyles;
    tooltipStyle(): import("jimu-core").SerializedStyles;
    createButton({ textContent, iconContent, tooltip, isDisabled, noAction, isChecked, rotate, iconSize, autoFlipIcon, ref }: {
        textContent: any;
        iconContent: any;
        tooltip: any;
        isDisabled: any;
        noAction: any;
        isChecked: any;
        rotate: any;
        iconSize: any;
        autoFlipIcon: any;
        ref: any;
    }): jsx.JSX.Element;
    render(): jsx.JSX.Element;
}
