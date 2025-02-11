import { storage } from "@vendetta/plugin"
import { useProxy } from "@vendetta/storage"
import { findByName } from "@vendetta/metro";
try {
    import VersionChange from "../../lib/components/versionChange";
	import updates from "./update";
} catch (ignore) {
    
}

import { Forms, General } from "@vendetta/ui/components";

// const HelpMessage = findByName("HelpMessage");

const { ScrollView, View, Text, TouchableOpacity, TextInput, Pressable, Image, Animated, Component } = General;
const { FormLabel, FormIcon, FormArrow, FormRow, FormSwitch, FormSwitchRow, FormSection, FormDivider, FormInput, FormRadioRow } = Forms;

export default () => {
	useProxy(storage)

	const createList = (id, title, label, subLabel, props) => { 
		return { 
			id, 
			title, 
			label, 
			subLabel, 
			props,
		}
	}


	const PageChildren = [
		createList("test1", "hmm1", "toggle1", null, null),
		createList("test2", "hmm2", "toggle2", null, null),
	]

	return (<>
		<ScrollView>
			<View style={{				
				borderRadius: 10, 
				backgroundColor: "rgba(0, 12, 46, 0.15)"
			}}>
			{/*<HelpMessage messageType={0}>"This Plugin development is moved to new Repository"</HelpMessage>*/}
			<FormRow
				label="Debug"
				subLabel="enable console logging"
				trailing={
					<FormSwitch
						value={storage.debug}
						onValueChange={(value) => {
							storage.debug = value
						}}
					/>
				}
			/>
			<FormDivider/>
			{
				PageChildren.map((element, i) => {				
					return (<>
						<FormSection title={element?.title}>
							<FormRow
								label={element?.label}
								subLabel={element?.subLabel}
								trailing={
									<FormSwitch
										value={storage.toggle[element?.id]}
										onValueChange={(value) => {
											storage.toggle[element?.id] = value
										}}
									/>
								}
							/>
							{
								storage.toggle[element.id] && 
								element.props && (
									<View style={{ 
										margin: 5, 
										padding: 10, 
										borderRadius: 10, 
										backgroundColor: "rgba(0, 0, 0, 0.15)"
									}}>
										<element.props />
									</View>
								)
							}
						</FormSection>
					</>)
				})
			}
			</View>
			<FormDivider />
			{
				updates && (
					<View style={{
						paddingBottom: 36
					}}>
						<FormSection title="Updates">
							<View style={{ 
								margin: 5, 
								padding: 5,
								borderRadius: 10,
								backgroundColor: "rgba(59, 30, 55, 0.15)"
							}}>
								{
									updates.map((data, index) => {
										return <VersionChange change={data} index={index} totalIndex={updates.length}/>
									})
								}
							</View>
						</FormSection>
					</View>
				)
			}
		</ScrollView>
	</>)
}
