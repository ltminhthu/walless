import {
	type GetProps,
	Stack as TamaguiStack,
	styled,
	Text as TamaguiText,
} from '@tamagui/core';

import { fullscreenStyle } from './shared';

export const Stack = styled(TamaguiStack, {
	name: 'Stack',
	variants: {
		fullscreen: {
			true: fullscreenStyle,
		},
		horizontal: {
			true: {
				flexDirection: 'row',
			},
		},
	} as const,
});

export type StackProps = GetProps<typeof Stack>;

export const Circle = styled(TamaguiStack, {
	name: 'Circle',
	borderRadius: 10000000,
});

export type CircleProps = GetProps<typeof Circle>;

export const Text = styled(TamaguiText, {
	name: 'Text',
	color: '#FFFFFF',
	fontFamily: 'Rubik',
});

export type TextProps = GetProps<typeof Text>;
