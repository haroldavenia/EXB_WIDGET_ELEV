import { React } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'

import { type IMConfig } from '../config'

export default function Setting (props: AllWidgetSettingProps<IMConfig>) {

	const onMapSelected = (useMapWidgetIds: string[]) => {
		props.onSettingChange({
		  id: props.id,
		  useMapWidgetIds: useMapWidgetIds
		})
	}

	return <div className="p-2">
		<SettingSection role="group">
			<SettingRow label="Main map" flow="wrap" level={2}>				
				<MapWidgetSelector 
                    confirmMessage="Switching the connected Map widget will clear all saved items with the current map."
                    isNeedConfirmBeforeChange
				 	useMapWidgetIds={props.useMapWidgetIds}
					onSelect={onMapSelected}
				/>
			</SettingRow>
		</SettingSection>
	</div>
}