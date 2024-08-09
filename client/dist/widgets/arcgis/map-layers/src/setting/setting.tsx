/** @jsx jsx */
import {
  React,
  Immutable,
  type ImmutableObject,
  type DataSourceJson,
  type IMState,
  FormattedMessage,
  jsx,
  getAppStore,
  type UseDataSource,
  AllDataSourceTypes
} from 'jimu-core'
import { Switch, Radio, Label, Alert, Checkbox, defaultMessages as jimuDefaultMessages } from 'jimu-ui'
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow,
  MultipleJimuMapConfig
} from 'jimu-ui/advanced/setting-components'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { type IMConfig } from '../config'
import defaultMessages from './translations/default'
import MapThumb from './components/map-thumb'
import { getStyle } from './lib/style'
import { type JimuMapView, JimuMapViewComponent, MapViewManager } from 'jimu-arcgis'
import CustomizeLayerPopperContent from './components/customize-layer-popper'
import { createRef } from 'react'

const allDefaultMessages = Object.assign({}, defaultMessages, jimuDefaultMessages)

interface ExtraProps {
  dsJsons: ImmutableObject<{ [dsId: string]: DataSourceJson }>
}

export interface WidgetSettingState {
  useMapWidget: boolean
  viewIdsFromMapWidget: string[]
  mapViews: { [viewId: string]: JimuMapView }
  activeCustomizeJmvId: string
}

export type WidgetSettingProps = AllWidgetSettingProps<IMConfig> & ExtraProps

export default class Setting extends React.PureComponent<
AllWidgetSettingProps<IMConfig> & ExtraProps,
WidgetSettingState
> {
  supportedDsTypes = Immutable([
    AllDataSourceTypes.WebMap,
    AllDataSourceTypes.WebScene
  ])

  customizeLayersRef: HTMLDivElement
  customizeLayersTrigger = createRef<HTMLDivElement>()

  static mapExtraStateProps = (state: IMState): ExtraProps => {
    return {
      dsJsons: state.appStateInBuilder.appConfig.dataSources
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      mapViews: null,
      useMapWidget: this.props.config.useMapWidget || false,
      viewIdsFromMapWidget: null,
      activeCustomizeJmvId: ''
    }
  }

  getTranslatedString (stringId: string) {
    return this.props.intl.formatMessage({
      id: stringId,
      defaultMessage: allDefaultMessages[stringId]
    })
  }

  getFormattedMessage (stringId: string) {
    return <FormattedMessage id={stringId} defaultMessage={allDefaultMessages[stringId]} />
  }

  getPortUrl = (): string => {
    const portUrl = getAppStore().getState().portalUrl
    return portUrl
  }

  shouldShowCustomizeLayerOptions = () => {
    return this.props.useMapWidgetIds?.length > 0
  }

  shouldShowLayerList = () => {
    return !this.isDataSourceEmpty()
  }

  isCustomizeOptionEmpty = () => {
    return this.isDataSourceEmpty() && !this.shouldShowCustomizeWarning()
  }

  onRadioChange = (useMapWidget) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('useMapWidget', useMapWidget)
    })

    this.setState({
      useMapWidget: useMapWidget
    })
  }

  onToolsChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
  }

  onOptionsChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
  }

  onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSourcesEnabled
    })
  }

  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }

    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    })
  }

  onMapWidgetSelected = async (useMapWidgetIds: string[]) => {
    // Update mapViews when connect to another widget
    const mapViews = MapViewManager.getInstance().getJimuMapViewGroup(useMapWidgetIds[0])?.jimuMapViews || {}
    this.setState({
      mapViews: mapViews
    })

    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    })

    // Restore the layer's listMode when selecting another map widget
    const prevMapViews = MapViewManager.getInstance().getJimuMapViewGroup(this.props.useMapWidgetIds?.[0])?.jimuMapViews || {}
    if (this.props.useMapWidgetIds?.length > 0 && prevMapViews) {
      const prevMapView = Object.values(prevMapViews)?.[0]
      const prevConfig = this.props.config?.customizeLayerOptions?.[prevMapView?.id]

      // Only restore the layer when it's enabled & hidden
      if (prevConfig?.isEnabled) {
        const hiddenJimuLayerViewIdSet = new Set(prevConfig?.hiddenJimuLayerViewIds)
        for (const jimuLayerViewId of Object.keys(prevMapView?.jimuLayerViews)) {
          const currentJimuLayerView = await prevMapView.whenJimuLayerViewLoaded(jimuLayerViewId)
          const currentLayer = currentJimuLayerView?.layer
          if (hiddenJimuLayerViewIdSet.has(jimuLayerViewId)) {
            currentLayer.listMode = 'show'
          }
        }
      }
    }
  }

  onViewsCreate = (views: { [viewId: string]: JimuMapView }) => {
    const viewIdsFromMapWidget = Object.keys(views)
    this.setState({
      mapViews: views,
      viewIdsFromMapWidget
    })
  }

  onListItemBodyClick = (dataSourceId: string) => {
    const jmvId = `${this.props.useMapWidgetIds?.[0]}-${dataSourceId}`
    this.setState({
      activeCustomizeJmvId: jmvId
    })
  }

  getActiveCustomizeStatus = () => {
    return this.props.config?.customizeLayerOptions?.[this.state.activeCustomizeJmvId]?.isEnabled || false
  }

  getCustomizeLayerList = () => {
    return (
      <div ref={this.customizeLayersTrigger} className='w-100'>
        <MultipleJimuMapConfig
          mapWidgetId={this.props.useMapWidgetIds?.[0]}
          forwardRef={(ref: HTMLDivElement) => {
            this.customizeLayersRef = ref
          }}
          onClick={this.onListItemBodyClick}
          sidePopperContent={
            <CustomizeLayerPopperContent
               mapViewId={this.state.activeCustomizeJmvId}
               isCustomizeEnabled={this.getActiveCustomizeStatus()}
               settingProps={this.props}
            />
          }
        />
      </div>
    )
  }

  getCustomizeSettingContent = () => {
    return (
      this.shouldShowCustomizeLayerOptions() && (
        <React.Fragment>
          <SettingRow
            label={this.getTranslatedString('customizeLayers')}
          />

          <SettingRow
            aria-label={this.getTranslatedString('customizeLayers')}
            className={this.isCustomizeOptionEmpty() ? 'empty-customize-layer-list' : 'customize-layer-list'}
          >
            {this.shouldShowCustomizeWarning() &&
              <Alert
                tabIndex={0}
                className={'warningMsg'}
                open
                text={this.getTranslatedString('customizeLayerWarnings')}
                type={'warning'}
              />
            }
            {
              this.shouldShowLayerList() && this.getCustomizeLayerList()
            }
          </SettingRow>
        </React.Fragment>
      )
    )
  }

  shouldShowCustomizeWarning = (): boolean => {
    // Not connecting to a map widget
    if (!this.state.useMapWidget) {
      return true
    } else {
      return this.isDataSourceEmpty()
    }
  }

  isDataSourceEmpty = (): boolean => {
    const mapViews = MapViewManager.getInstance().getJimuMapViewGroup(this.props.useMapWidgetIds[0])?.jimuMapViews || {}
    // The connected widget only have ONE map view & have no data source
    if (Object.keys(mapViews).length === 1 && !Object.values(mapViews)?.[0]?.dataSourceId) {
      return true
    } else {
      return false
    }
  }

  render () {
    const portalUrl = this.getPortUrl()

    let setDataContent = null
    let dataSourceSelectorContent = null
    let mapSelectorContent = null
    let actionsContent = null
    let optionsContent = null

    dataSourceSelectorContent = (
      <div className="data-selector-section">
        <SettingRow>
          <DataSourceSelector
            types={this.supportedDsTypes}
            useDataSources={this.props.useDataSources}
            useDataSourcesEnabled
            mustUseDataSource
            onChange={this.onDataSourceChange}
            widgetId={this.props.id}
          />
        </SettingRow>
        {portalUrl &&
          this.props.dsJsons &&
          this.props.useDataSources &&
          this.props.useDataSources.length === 1 && (
            <SettingRow>
              <div className="w-100">
                <div
                  className="webmap-thumbnail"
                  title={
                    this.props.dsJsons[
                      this.props.useDataSources[0].dataSourceId
                    ]?.label
                  }
                >
                  <MapThumb
                    mapItemId={
                      this.props.dsJsons[
                        this.props.useDataSources[0].dataSourceId
                      ]
                        ? this.props.dsJsons[
                          this.props.useDataSources[0].dataSourceId
                        ].itemId
                        : null
                    }
                    portUrl={
                      this.props.dsJsons[
                        this.props.useDataSources[0].dataSourceId
                      ]
                        ? this.props.dsJsons[
                          this.props.useDataSources[0].dataSourceId
                        ].portalUrl
                        : null
                    }
                  />
                </div>
              </div>
            </SettingRow>
        )}
      </div>
    )

    mapSelectorContent = (
      <div className="map-selector-section">
        <SettingRow>
          <MapWidgetSelector
            onSelect={this.onMapWidgetSelected}
            useMapWidgetIds={this.props.useMapWidgetIds}
          />
        </SettingRow>
        <JimuMapViewComponent
          useMapWidgetId={this.props.useMapWidgetIds?.[0]}
          onViewsCreate={this.onViewsCreate}
        />
        {this.getCustomizeSettingContent()}
      </div>
    )

    if (this.state.useMapWidget) {
      setDataContent = mapSelectorContent

      actionsContent = (
        <React.Fragment>
         <SettingRow label={this.getFormattedMessage('goto')} >
            <Switch
              className="can-x-switch"
              checked={(this.props.config && this.props.config.goto) || false}
              data-key="goto"
              onChange={(evt) => {
                this.onToolsChanged(evt.target.checked, 'goto')
              }}
              aria-label={this.getTranslatedString('goto')}
            />
          </SettingRow>
          <SettingRow label={this.getFormattedMessage('showOrHideLabels')} >
            <Switch
              className="can-x-switch"
              checked={(this.props.config && this.props.config.label) || false}
              data-key="goto"
              onChange={(evt) => {
                this.onToolsChanged(evt.target.checked, 'label')
              }}
              aria-label={this.getTranslatedString('showOrHideLabels')}
            />
          </SettingRow>
          <SettingRow label={this.getFormattedMessage('transparency')} >
            <Switch
              className="can-x-switch"
              checked={
                (this.props.config && this.props.config.opacity) || false
              }
              data-key="opacity"
              onChange={(evt) => {
                this.onToolsChanged(evt.target.checked, 'opacity')
              }}
              aria-label={this.getTranslatedString('transparency')}
            />
          </SettingRow>
        </React.Fragment>
      )

      optionsContent = (
        <React.Fragment>
          <SettingRow label={this.getFormattedMessage('useTickBoxes')}>
            <Switch
              className="can-x-switch"
              checked={this.props.config && this.props.config.useTickBoxes}
              data-key="useTickBoxes"
              onChange={(evt) => {
                this.onOptionsChanged(evt.target.checked, 'useTickBoxes')
              }}
            />
          </SettingRow>
          <SettingRow label={this.getFormattedMessage('enableLegend')} >
            <Switch
              className="can-x-switch"
              checked={
                (this.props.config && this.props.config.enableLegend) || false
              }
              data-key="enableLegend"
              onChange={(evt) => {
                this.onOptionsChanged(evt.target.checked, 'enableLegend')
              }}
              aria-label={this.getTranslatedString('enableLegend')}
            />
          </SettingRow>
          {
            (this.props.config && this.props.config.enableLegend) &&
            <SettingRow>
              <Label aria-label={this.getTranslatedString('showAllLegend')} className='cursor-pointer'>
                <Checkbox
                  className='mr-2'
                  checked={this.props.config && this.props.config.showAllLegend}
                  onChange={(evt) => {
                    this.onOptionsChanged(evt.target.checked, 'showAllLegend')
                  }}
                />
                <span className='check-box-label'>
                  {` ${this.getTranslatedString('showAllLegend')}`}
                </span>
              </Label>
            </SettingRow>
          }

          <SettingRow label={this.getFormattedMessage('reorderLayers')} >
            <Switch
              className="can-x-switch"
              checked={
                (this.props.config && this.props.config.reorderLayers) || false
              }
              data-key="reorderLayers"
              onChange={(evt) => {
                this.onOptionsChanged(evt.target.checked, 'reorderLayers')
              }}
              aria-label={this.getTranslatedString('reorderLayers')}
            />
          </SettingRow>

          <SettingRow label={this.getFormattedMessage('searchLayers')} >
            <Switch
              className="can-x-switch"
              checked={
                (this.props.config && this.props.config.searchLayers) || false
              }
              data-key="searchLayers"
              onChange={(evt) => {
                this.onOptionsChanged(evt.target.checked, 'searchLayers')
              }}
              aria-label={this.getTranslatedString('searchLayers')}
            />
          </SettingRow>
        </React.Fragment>
      )
    } else {
      setDataContent = dataSourceSelectorContent
    }

    return (
      <div css={getStyle(this.props.theme)}>
        <div className="widget-setting-layerlist">
          <SettingSection
            title={this.getTranslatedString('sourceLabel')}
            role="group"
            aria-label={this.getTranslatedString('sourceLabel')}
          >
            <SettingRow>
              <div className="layerlist-tools w-100">
                <div className="w-100">
                  <div className="layerlist-tools-item radio">
                    <Radio
                      id="map-data"
                      style={{ cursor: 'pointer' }}
                      name="source-option"
                      onChange={(e) => { this.onRadioChange(false) }}
                      checked={!this.state.useMapWidget}
                    />
                    <Label
                      style={{ cursor: 'pointer' }}
                      for="map-data"
                      className="ml-1"
                    >
                      {this.getTranslatedString('showLayerForMap')}
                    </Label>
                  </div>
                </div>
                <div className="w-100">
                  <div className="layerlist-tools-item radio">
                    <Radio
                      id="map-view"
                      style={{ cursor: 'pointer' }}
                      name="source-option"
                      onChange={(e) => { this.onRadioChange(true) }}
                      checked={this.state.useMapWidget}
                    />
                    <Label
                      style={{ cursor: 'pointer' }}
                      for="map-view"
                      className="ml-1"
                    >
                      {this.getTranslatedString('interactWithMap')}
                    </Label>
                  </div>
                </div>
              </div>
            </SettingRow>
            {setDataContent}
          </SettingSection>

          <SettingSection
            title={this.getTranslatedString('options')}
            role="group"
            aria-label={this.getTranslatedString('options')}
          >
            {actionsContent}
            <SettingRow label={this.getFormattedMessage('information')} >
              <Switch
                className="can-x-switch"
                checked={
                  (this.props.config && this.props.config.information) || false
                }
                data-key="information"
                onChange={(evt) => {
                  this.onToolsChanged(evt.target.checked, 'information')
                }}
                aria-label={this.getTranslatedString('information')}
              />
            </SettingRow>
            {optionsContent}
          </SettingSection>
        </div>
      </div>
    )
  }
}
