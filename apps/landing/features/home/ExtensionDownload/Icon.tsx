import { FC } from 'react';
import { Image, Stack, Text } from '@walless/gui';
import Anchor from 'components/Anchor';

import { ExtensionConfig } from './shared';

interface Props {
	size?: number;
	item: ExtensionConfig;
	titleClass?: string;
}

export const ExtensionIcon: FC<Props> = ({ size = 48, item }) => {
	return (
		<Anchor href={item.download}>
			<Stack
				animation="fast"
				hoverStyle={{ opacity: 0.6 }}
				pressStyle={{ opacity: 0.4 }}
			>
				<Image
					src={item.iconSrc}
					alignSelf="center"
					defaultSource={item.iconSrc}
					width={size}
					height={size}
					resizeMode="contain"
					marginBottom={12}
				/>
				<Text
					fontSize={12}
					textAlign="center"
					userSelect="none"
					borderRadius={100}
					backgroundColor="rgba(255, 255, 255, 0.1)"
					paddingVertical={8}
					paddingHorizontal={12}
				>
					{item.title}
				</Text>
			</Stack>
		</Anchor>
	);
};

export default ExtensionIcon;