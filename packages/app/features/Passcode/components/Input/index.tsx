import { FC, useEffect, useState } from 'react';
import {
	NativeSyntheticEvent,
	TextInput,
	TextInputKeyPressEventData,
} from 'react-native';
import { Stack } from '@walless/gui';

import InputItem from './InputItem';

interface Props {
	pinCount: number;
	isConfirm: boolean;
	isIncorrectPasscode?: boolean;
	onEnterPress?: () => void;
	onPasscodeInput?: (value: string, isConfirmation: boolean) => void;
	handlePasscode: (passcode: string) => void;
}

export const PasscodeInput: FC<Props> = ({
	pinCount,
	isConfirm,
	isIncorrectPasscode,
	onEnterPress,
	onPasscodeInput,
	handlePasscode,
}) => {
	const passcodeRegex = /^[0-9]/;
	const [passcode, setPasscode] = useState('');
	const [focusedIndex, setFocusedIndex] = useState(0);
	const [currentInputRef, setCurrentInputRef] =
		useState<React.RefObject<TextInput> | null>(null);

	const handleChangeText = (text: string, index: number) => {
		if (text !== '') {
			setPasscode(passcode + text);
			handlePasscode(passcode + text);
			setFocusedIndex(index + 1);
		}
		onPasscodeInput?.(text, isConfirm);
	};

	const handleKeyPress = (
		event: NativeSyntheticEvent<TextInputKeyPressEventData>,
		index: number,
	) => {
		let relativeIndex: number;

		const { key } = event.nativeEvent;

		if (key === 'Backspace') {
			if (focusedIndex > index) {
				relativeIndex = focusedIndex - 1;
			} else {
				relativeIndex = index - 1;
			}

			setPasscode(passcode.slice(0, relativeIndex));
			handlePasscode(passcode.slice(0, relativeIndex));
			setFocusedIndex(relativeIndex);

			return;
		}

		if (key === 'Enter') {
			if (passcode.length === pinCount) {
				onEnterPress?.();
			}

			return;
		}

		if (!passcodeRegex.test(key)) {
			event.preventDefault();
		}
	};

	const handleFocus = (ref: React.RefObject<TextInput>) => {
		setCurrentInputRef(ref);
	};

	const handleFocusBack = () => {
		currentInputRef?.current?.focus();
	};

	const inputItems = [];
	for (let i = 0; i < pinCount; i++) {
		inputItems.push(
			<InputItem
				key={i}
				index={i}
				passcode={passcode}
				focusedIndex={focusedIndex}
				handleChangeText={handleChangeText}
				handleKeyPress={handleKeyPress}
				handleFocus={handleFocus}
			/>,
		);
	}

	useEffect(() => {
		setPasscode('');
		setFocusedIndex(0);
	}, [isConfirm, isIncorrectPasscode]);

	return (
		<Stack
			horizontal
			justifyContent="space-between"
			hoverStyle={{ cursor: 'pointer' }}
		>
			{inputItems}
			<Stack fullscreen onPress={handleFocusBack} />
		</Stack>
	);
};

export default PasscodeInput;