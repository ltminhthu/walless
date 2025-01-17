import { type FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { type UserProfile } from '@walless/core';
import { Compass } from '@walless/icons';
import { type ExtensionDocument } from '@walless/store';

import NavigatorOrb from './NavigatorOrb';
import RemoveLayout from './RemoveLayout';

interface Props {
	size?: number;
	profile: UserProfile;
	extensions: ExtensionDocument[];
	getIsExtensionActive?: (item: ExtensionDocument) => boolean;
	onExtensionPress?: (item: ExtensionDocument) => void;
	onRemoveLayout: (item: ExtensionDocument) => void;
}

export const DashboardNavigator: FC<Props> = ({
	size = 58,
	profile,
	extensions,
	getIsExtensionActive,
	onExtensionPress,
	onRemoveLayout,
}) => {
	const containerStyle = { width: size };
	const exploreItem: Partial<ExtensionDocument> = {
		_id: '',
		storeMeta: {
			iconColor: '#243f56',
			iconActiveColor: '#1394d3',
		} as never,
	};
	const profileItem: Partial<ExtensionDocument> = {
		_id: 'profile',
		storeMeta: {
			iconUri: profile.profileImage as string,
			iconSize: 40,
		} as never,
	};
	const isExplorerActive = getIsExtensionActive?.(exploreItem as never);

	return (
		<View style={[styles.container, containerStyle]}>
			<View style={styles.orbContainer}>
				{extensions.map((item) => {
					const isActive = getIsExtensionActive?.(item);

					return (
						<NavigatorOrb
							key={item._id}
							item={item}
							isActive={isActive}
							onPress={onExtensionPress}
							ContextComponent={RemoveLayout}
							onRemoveLayout={onRemoveLayout}
						/>
					);
				})}
				<NavigatorOrb
					item={exploreItem as never}
					isActive={isExplorerActive}
					onPress={onExtensionPress}
				>
					<Compass
						size={22}
						colors={
							isExplorerActive ? ['#FFFFFF', '#0694D3'] : ['#0694D3', '#243f56']
						}
					/>
				</NavigatorOrb>
			</View>
			<View style={styles.commandContainer}>
				<NavigatorOrb
					item={profileItem as never}
					onPress={onExtensionPress}
					isActive={getIsExtensionActive?.(profileItem as never)}
				/>
			</View>
		</View>
	);
};

export default DashboardNavigator;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 12,
		backgroundColor: '#131C24',
	},
	orbContainer: {
		flex: 1,
		gap: 10,
	},
	commandContainer: {},
});
