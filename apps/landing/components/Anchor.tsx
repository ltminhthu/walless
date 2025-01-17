import { type UrlObject } from 'url';

import { type FC, type HTMLAttributeAnchorTarget, type ReactNode } from 'react';
import { type TextProps } from '@tamagui/core';
import { Text } from '@walless/ui';
import Link from 'next/link';

export type AnchorProps = TextProps & {
	href: string | UrlObject;
	target?: HTMLAttributeAnchorTarget;
	children?: ReactNode;
};

export const Anchor: FC<AnchorProps> = ({
	href,
	target,
	children,
	...textProps
}) => {
	return (
		<Link href={href} target={target}>
			<Text hoverStyle={hoverStyle} pressStyle={pressStyle} {...textProps}>
				{children}
			</Text>
		</Link>
	);
};

export default Anchor;

const hoverStyle = {
	opacity: 0.7,
};

const pressStyle = {
	opacity: 0.5,
};
