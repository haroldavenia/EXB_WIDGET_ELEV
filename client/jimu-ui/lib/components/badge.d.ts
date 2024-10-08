/// <reference types="react" />
import { React } from 'jimu-core';
import { type BrandFucntionColors } from 'jimu-theme';
/**
 * The Badge component props
 */
export interface BadgeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    /**
     * To provide a label for the badge for accessibility purposes.
     */
    'aria-label'?: string;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default error
     */
    color?: BrandFucntionColors | string;
    /**
     * Whether to display a dot instead of `badgeContent`.
     * @default false
     */
    dot?: boolean;
    /**
     * The badge will be added relative to this node.
     */
    children?: React.ReactElement | React.ReactNode;
    /**
     * Defines the style added to the badge element.
     */
    badgeStyle?: React.CSSProperties;
    /**
     * The content rendered within the badge.
     */
    badgeContent?: React.ReactElement | React.ReactNode;
    /**
     * If true, the badge will be invisible.
     * @default false
     */
    hideBadge?: boolean;
}
/**
 * The `Badge` component generates a small badge to the top-right of its child(ren).
 *
 * ```ts
 * import { Badge } from 'jimu-ui'
 * ```
 */
export declare const _Badge: (props: BadgeProps) => React.JSX.Element;
/**
 * The `Badge` component generates a small badge to the top-right of its child(ren).
 *
 * ```ts
 * import { Badge } from 'jimu-ui'
 * ```
 */
export declare const Badge: import("@emotion/styled").StyledComponent<BadgeProps, {}, {}>;
