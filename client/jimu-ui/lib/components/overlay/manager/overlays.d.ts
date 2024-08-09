/// <reference types="react" />
import { React, type ImmutableArray } from 'jimu-core';
export declare const ModalOverlayIdContext: React.Context<string>;
export declare const baseOverlayZindex = 1;
export declare const TooltipZindex = 2001;
export declare const isTargetInContainer: (target: HTMLElement, container: HTMLElement) => boolean;
export declare const getOverlayZIndex: (overlays: ImmutableArray<string>, uniqueId: string, baseZindex: number) => number;
export interface OverlayManagerProps {
    /**
     * Default: false
     *
     * if `false`, The children will be put to document.body
     *
     * Disable the portal behavior. The children stay within it's parent DOM hierarchy
     */
    disablePortal?: boolean;
    /**
     * Default: false
     *
     * if `true`, do not change activate overlay when click on popper body
     */
    disableActivateOverlay?: boolean;
    /**
     * Default: false
     *
     * if `true`, do not manage z-index by state.overlays
     */
    disableOverlayManager?: boolean;
    /**
     * @ignore
     */
    zIndex?: number;
}
interface OverlayManagerResult {
    overlayId: string;
    zIndex: number;
    openOverlay: () => void;
    activateOverlay: () => void;
    closeOverlay: () => void;
}
export declare const useOverlayManager: (type: 'modal' | 'popper', disableOverlayManager: boolean, disableActivateOverlay: boolean, openOverlayOnMound?: boolean, baseZindex?: number) => OverlayManagerResult;
/**
 * Return the portal container according to whether it is fullscreen or not.
 */
export declare const usePortalContainer: (disablePortal: boolean, panelRef: React.MutableRefObject<HTMLElement>) => Element;
export {};
