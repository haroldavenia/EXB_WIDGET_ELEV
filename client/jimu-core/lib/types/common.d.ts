import { type LayoutItemType, type LayoutInfo } from './layout';
import { type WidgetManifest } from './manifest';
import { type ImmutableObject } from 'seamless-immutable';
import { type IconResult } from './app-config';
import { type ServiceDefinition } from './service-definition';
/** Size */
export interface Size {
    /** Width of an element which can be used in the layout and other box-like shapes. */
    width: number;
    /** Height of an element which can be used in the layout and other box-like shapes. */
    height: number;
}
/** BrowserSizeMode */
export declare enum BrowserSizeMode {
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE"
}
export interface BoundingBox {
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    width?: string;
    height?: string;
}
export type IMBoundingBox = ImmutableObject<BoundingBox>;
export declare enum JimuFieldType {
    String = "STRING",
    Number = "NUMBER",
    Date = "DATE"
}
export declare enum EsriFieldType {
    Blob = "esriFieldTypeBlob",
    Date = "esriFieldTypeDate",
    Double = "esriFieldTypeDouble",
    Geometry = "esriFieldTypeGeometry",
    GlobalID = "esriFieldTypeGlobalID",
    GUID = "esriFieldTypeGUID",
    Integer = "esriFieldTypeInteger",
    OID = "esriFieldTypeOID",
    Raster = "esriFieldTypeRaster",
    Single = "esriFieldTypeSingle",
    SmallInteger = "esriFieldTypeSmallInteger",
    String = "esriFieldTypeString",
    XML = "esriFieldTypeXML"
}
export declare enum AjaxState {
    Fetching = "FETCHING",
    Success = "SUCCESS",
    Error = "ERROR"
}
/** AppMode */
export declare enum AppMode {
    /**
     * In this mode, user can design the app but can't interact with the app.
     */
    Design = "DESIGN",
    /**
     * In this mode, useR can use the app but can't edit the app's layout
     */
    Run = "RUN",
    /**
     * This is the Express builder mode. From layout perspective, it's the same as the Run mode. However, some widgets may have different behavior in this mode.
     * For example, the text widget in this mode supports double click to edit, controller widget supports add widgets, etc.
     */
    Express = "EXPRESS"
}
/** The widget state */
export declare enum WidgetState {
    Opened = "OPENED",
    Active = "ACTIVE",
    Closed = "CLOSED"
}
export interface Location {
    pathname: string;
    search: string;
    hash: string;
}
export type URIScheme = 'https' | 'mailto' | 'tel' | 'sms' | 'ftp' | 'data';
/** LinkType */
export declare enum LinkType {
    None = "NONE",
    Page = "PAGE",
    Dialog = "DIALOG",
    View = "VIEW",
    WebAddress = "WEB_ADDRESS",
    Block = "BLOCK",
    Screen = "SCREEN",
    PageTop = "PAGE_TOP",
    PrintPreview = "PRINT_PREVIEW",
    CookieBanner = "COOKIE_BANNER"
}
/**
 * The result of link setting
 */
export interface LinkResult {
    linkType?: LinkType;
    /**
     * If the linkType is `Page`, `Dialog`, or `Block`, the value is its ID, or the specific value for current page: current_page.
     * If the linkType is `View`, the value is <pageId or dialogId, viewId 1, viewId 2, ...>.
     */
    value?: string;
}
export type LinkTo = string | Location | LinkResult;
export interface Resource {
    url: string;
    dependencies?: Resource[];
}
/** The widget type. */
export declare enum WidgetType {
    Normal = "NORMAL",
    Layout = "LAYOUT"
}
/** @ignore */
export interface LayoutItemConstructorProps {
    itemType: LayoutItemType;
    id?: string;
    layoutInfo?: LayoutInfo;
    isFromCurrentSizeMode?: boolean;
    rotation?: number;
    isPending?: boolean;
    manifest: Partial<WidgetManifest>;
    icon: string | IconResult;
    label: string;
    name?: string;
    desription?: string;
    uri?: string;
    itemId?: string;
    group?: number;
    order?: number;
}
export type EsriDateFormats = 'shortDate' | 'shortDateLE' | 'longMonthDayYear' | 'dayShortMonthYear' | 'longDate' | 'longDateShortTime' | 'longMonthDayYearShortTime' | 'shortDateShortTime' | 'shortDateLEShortTime' | 'shortDateShortTime24' | 'shortDateLEShortTime24' | 'shortDateLongTime' | 'shortDateLELongTime' | 'shortDateLongTime24' | 'shortDateLELongTime24' | 'longMonthYear' | 'shortMonthYear' | 'year';
export declare const ESRI_DATE_FORMAT_ARRAY: string[];
export interface EsriDateFormat {
    datePattern: string;
    timePattern?: string;
    selector: string;
}
export interface EsriDateFormatMap {
    [x: string]: EsriDateFormat;
}
export interface ServiceInfo {
    definition: ServiceDefinition;
    isHostedInSamePortal: boolean;
}
/**
Parts in a page.
 */
export declare enum PagePart {
    Header = "HEADER",
    Footer = "FOOTER",
    Body = "BODY"
}
export declare enum UrlProtocol {
    Http = "http:",
    Https = "https:"
}
export declare const APP_FRAME_NAME_IN_BUILDER = "_appWindow";
export interface ArcGISServerInfo {
    currentVersion: number;
    fullVersion: string;
    soapUrl?: string;
    secureSoapUrl?: string;
    owningSystemUrl?: string;
    owningTenant?: string;
    authInfo: {
        isTokenBasedSecurity: boolean;
        tokenServicesUrl: string;
    };
}
export declare enum ResourceType {
    Image = "IMAGE",
    Config = "CONFIG"
}
export declare enum LoadingType {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
    Donut = "DONUT",
    Bar = "BAR",
    DotsPrimary = "DOTS_PRIMARY",
    DotsSecondary = "DOTS_SECONDARY"
}
export interface PortalInfo {
    portalUrl?: string;
    clientId?: string;
    isWebTier?: boolean;
}
export type MobileSidePanelContentType = 'template' | 'templateBlock' | 'widget' | 'buttonQuickStyle' | 'textExpression' | 'dividerQuickStyle' | 'navigatorQuickStyle';
export interface MobileSidePanelContentOptions {
    type: MobileSidePanelContentType;
    widgetId?: string;
    uri?: string;
    keepPanel?: boolean;
    active?: boolean;
    [option: string]: any;
}
