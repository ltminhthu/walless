import { useState } from 'react';
import { Stack } from '@walless/ui';
import { ContainerStack } from 'components/styled';

import ProjectInfo from './preview/ProjectInfo';
import TokenInfo from './preview/TokenInfo';
import ProjectInfoTools from './Toolbox/tools/ProjectInfo';
import ColorPicker from './ColorPicker';
import Header from './Header';
import { Target, ToolboxItem } from './internal';
import PreviewOutline from './PreviewOutline';
import Toolbox from './Toolbox';

const tools: ToolboxItem[] = [
	{
		name: 'Project info',
		preview: ProjectInfo,
		previewImage: '/img/preview/project-info.png',
		components: ProjectInfoTools,
	},
	{
		name: 'Token info',
		preview: TokenInfo,
		previewImage: '/img/preview/token-info.png',
		components: [],
	},
];

const EditTool = () => {
	const [activeTool, setActiveTool] = useState<ToolboxItem>(tools[0] ?? null);
	const [target, setTarget] = useState<Target>(null);

	return (
		<ContainerStack marginTop={72} maxWidth={1500} alignItems="center">
			<Header />

			<Stack marginTop={60} marginBottom={80} justifyContent="center">
				{activeTool?.preview && <activeTool.preview target={target} />}
			</Stack>

			<Stack
				width="100%"
				flexDirection="row"
				justifyContent="space-between"
				marginBottom={20}
			>
				<PreviewOutline
					tools={tools}
					activeTool={activeTool}
					setActiveTool={setActiveTool}
				/>
				<ColorPicker />
			</Stack>

			<Toolbox
				tools={tools}
				activeTool={activeTool}
				setActiveTool={setActiveTool}
				setTarget={setTarget}
			/>
		</ContainerStack>
	);
};

export default EditTool;
