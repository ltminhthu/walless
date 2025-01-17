import {
	type LinkingOptions,
	type NavigatorScreenParams,
	createNavigationContainerRef,
} from '@react-navigation/native';
import {
	type StackNavigationOptions,
	CardStyleInterpolators,
} from '@react-navigation/stack';

export type DashboardParamList = {
	Explore: undefined;
	Profile: undefined;
	Setting: undefined;
	Extension: {
		id?: string;
	};
};

export type RootParamList = {
	Splash: undefined;
	Login: undefined;
	Dashboard: NavigatorScreenParams<DashboardParamList>;
};

export const linking: LinkingOptions<RootParamList> = {
	prefixes: ['walless://'],
	config: {
		screens: {
			Splash: '/splash',
			Login: '/login',
			Dashboard: {
				path: '/',
				screens: {
					Explore: '/',
					Profile: '/profile',
					Setting: '/setting',
					Extension: '/:id',
				},
			},
		},
	},
};

interface ScreenOptions {
	navigator: StackNavigationOptions;
	fade: StackNavigationOptions;
}

export const screenOptions: ScreenOptions = {
	navigator: {
		headerShown: false,
		animationEnabled: true,
	},
	fade: {
		cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
	},
};

export const navigationRef = createNavigationContainerRef<RootParamList>();

export const navigate = (
	name: keyof RootParamList,
	params?: RootParamList[keyof RootParamList],
) => {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name as never, params as never);
	}
};
