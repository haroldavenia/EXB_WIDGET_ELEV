/// <reference types="react" />
/** @jsx jsx */
import { React, type DataSourceJson, jsx, type ImmutableObject, type IntlShape, ReactRedux, type DataSourceInfo, type UseDataSource, type IMDataViewJson } from 'jimu-core';
import { type DataSourceListProps } from '../../types';
/**
 * The DataSourceSelector component props.
 */
export interface DataSourceSelectorProps extends Omit<DataSourceListProps, 'isDataSourceInited' | 'onCloseClick' | 'changeInitStatus' | 'disableSelection' | 'disableRemove'> {
    /**
     * Whether to support multiple selection of data views.
     *
     * Only allow to select single data source item and single data view by default.
     * To allow to select multiple data source items and multiple data views for each selected data source item, please pass in `isMultiple=true`.
     * To allow to select single data source item and multiple data views for the selected source item, please pass in `isMultipleDataView=true`.
     * To allow to select multiple data source items and single data view for each selected data source item, please pass in `isMultiple=true` and `isMultipleDataView=false`.
     *
     * @default false
     */
    isMultipleDataView?: boolean;
    /**
     * Label of the button which can trigger data source selector popup.
     *
     * @default Select data
     */
    buttonLabel?: string;
    /**
     * Whether or not to enable data source use.
     *
     * @default false
     */
    useDataSourcesEnabled?: boolean;
    /**
     * Whether or not to show toggle data button, will hide toggle data button if the value is true.
     *
     * @default false
     */
    mustUseDataSource?: boolean;
    /**
     * Whether or not to show data source list panel after clicking a selected data source.
     *
     * @default false
     */
    disableDataSourceList?: boolean;
    /**
     * Whether or not to allow to select data view,
     * the props will make data view dropdown disabled.
     *
     * @default false
     */
    disableDataView?: boolean;
    /**
     * Whether or not to hide the data view dropdown/some data views.
     * If the props is true, will make the entire data view dropdown hidden.
     * If the props is a function, will call it to decide whether or not to hide some items of the data view dropdown.
     * Please note that -
     * 1. Id of default view is `DEFAULT_DATA_VIEW_ID`, you can import it from `jimu-ui/advanced/data-source-selector`.
     * 2. Id of selection view is `CONSTANTS.SELECTION_DATA_VIEW_ID`, you can import `CONSTANTS` from `jimu-core`.
     *
     * @default false
     */
    hideDataView?: boolean | ((dataViewJson: IMDataViewJson, mainDataSourceId: string) => boolean);
    /**
     * Whether or not to hide the 'create a view' button at the bottom of data view dropdown.
     *
     * @default false
     */
    hideCreateViewButton?: boolean;
    /**
     * Whether or not to close data source list panel after selected data sources are changed.
     *
     * @default false
     */
    closeDataSourceListOnChange?: boolean;
    /**
     * Callback when toggle data button is clicked.
     */
    onToggleUseDataEnabled?: (useDataSourcesEnabled: boolean) => void;
    /**
     * Before selecting, the component will call this method to check if it can continue selecting.
     */
    disableSelection?: (useDataSources: UseDataSource[]) => boolean;
    /**
     * Before remove, the component will call this method to check if it can continue removing.
     */
    disableRemove?: (useDataSources: UseDataSource[]) => boolean;
    /**
     * @ignore
     * Only used by theme.
     */
    className?: string;
    /**
     * The label used for accessibility purpose.
     */
    'aria-label'?: string;
    /**
     * `aria-describedby` is used to indicate the IDs of the elements that describe the component.
     * It is for accessibility purposes.
     */
    'aria-describedby'?: string;
    /**
     * @ignore
     * The callback prop is called when clicking an unselectable data source item.
     * Only used by map setting.
     */
    onClickDisabledDsItem?: () => void;
    /**
     * @ignore
     * The prop is passed as 'trigger' prop of SidePopper.
     * Only used by map setting.
     */
    sidePopperTrigger?: HTMLElement | HTMLElement[];
}
/**
 * @ignore
 */
interface StateExtraProps {
    /**
     * @ignore
     */
    dataSources: ImmutableObject<{
        [dsId: string]: DataSourceJson;
    }>;
    /**
     * @ignore
     */
    dataSourcesInfo: ImmutableObject<{
        [dsId: string]: DataSourceInfo;
    }>;
}
/**
 * @ignore
 */
interface ExtraProps {
    /**
     * @ignore
     */
    intl: IntlShape;
}
interface State {
    isRemoveDsWarningOpen: boolean;
    removeDsId: string;
    pendingUseDssDueToRemoveWarning: UseDataSource[];
}
/**
 * The `DataSourceSelector` component allows an Experience author to select a data source for widgets. This is usually used in a settings panel.
 *
 * ```ts
 * import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
 * ```
 */
export declare class _DataSourceSelector extends React.PureComponent<DataSourceSelectorProps & StateExtraProps & ExtraProps, State> {
    constructor(props: any);
    onToggleUseDataEnabled: () => void;
    onToggleRemoveDsWarning: () => void;
    onChange: (useDataSources: UseDataSource[]) => void;
    afterRemoveWidgets: () => void;
    render(): jsx.JSX.Element;
}
/**
 * A component that allows an Experience author to select a data source for widgets. This is usually used in a settings panel.
 */
export declare const DataSourceSelector: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<any>> & {
    WrappedComponent: React.ComponentType<any>;
}, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    isMultipleDataView?: boolean;
    buttonLabel?: string;
    useDataSourcesEnabled?: boolean;
    mustUseDataSource?: boolean;
    disableDataSourceList?: boolean;
    disableDataView?: boolean;
    hideDataView?: boolean | ((dataViewJson: IMDataViewJson, mainDataSourceId: string) => boolean);
    hideCreateViewButton?: boolean;
    closeDataSourceListOnChange?: boolean;
    onToggleUseDataEnabled?: (useDataSourcesEnabled: boolean) => void;
    disableSelection?: (useDataSources: UseDataSource[]) => boolean;
    disableRemove?: (useDataSources: UseDataSource[]) => boolean;
    className?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
    onClickDisabledDsItem?: () => void;
    sidePopperTrigger?: HTMLElement | HTMLElement[];
    onChange?: (useDataSources: UseDataSource[]) => void;
    useDataSources?: import("jimu-core").ImmutableArray<UseDataSource>;
    widgetId?: string;
    isMultiple?: boolean;
    hideHeader?: boolean;
    types: import("jimu-core").ImmutableArray<import("jimu-core").AllDataSourceTypes>;
    fromRootDsIds?: import("jimu-core").ImmutableArray<string>;
    fromDsIds?: import("jimu-core").ImmutableArray<string>;
    hideDs?: (dsJson: import("jimu-core").IMDataSourceJson) => boolean;
    hideTypeDropdown?: boolean;
    hideAllOptionOfTypeDropdown?: boolean;
    hideAddDataButton?: boolean;
    disableAddData?: boolean;
    hideTabs?: import("jimu-core").ImmutableArray<"ADDED" | "OUTPUT">;
    enableToSelectOutputDsFromSelf?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown>;
}>;
export {};
