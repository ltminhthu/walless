import { type ImageSourcePropType } from 'react-native';

export interface UserProfile {
	id?: string;
	email?: string;
	name?: string;
	profileImage?: string;
}

export type ExtensionType = 'layout' | 'dApp' | 'native';

export interface ExtensionConfig {
	id: string;
	color?: string;
	icon: ImageSourcePropType;
	type: ExtensionType;
}
