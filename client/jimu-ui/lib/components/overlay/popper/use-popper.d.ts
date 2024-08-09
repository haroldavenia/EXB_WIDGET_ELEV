/// <reference types="react" />
import { React } from 'jimu-core';
import { type Options as PopperOptions, type Instance, type VirtualElement } from '@popperjs/core';
import { type PopperInstance } from './core';
/**
 * Simple ponyfill for Object.fromEntries
 */
export declare const fromEntries: (entries: Array<[
    string,
    any
]>) => any;
export declare const usePopper: (ref?: React.MutableRefObject<Instance> | ((ref: PopperInstance) => void), referenceElement?: Element | VirtualElement, popperElement?: HTMLElement, options?: PopperOptions) => any;
