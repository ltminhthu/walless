import { FC, useState } from 'react';
import { ModalConfigs, PasscodeFeature } from '@walless/app';
import { Text } from '@walless/gui';
import { ResponseCode } from '@walless/messaging';
import {
	PendingTransactionContext,
	transactionActions,
} from 'state/transaction';

import ModalWrapper from '../components/ModalWrapper';

const logoUri = { uri: '/img/bare-icon.png' };

interface Props {
	config: ModalConfigs & { context: PendingTransactionContext };
}

export const PasscodeScreen: FC<Props> = ({ config }) => {
	const [key, setKey] = useState(0);
	const [errorMessage, setErrorMessage] = useState(null);

	const onPasscodeEnter = async (passcode: string) => {
		const res = await transactionActions.createAndSend(
			config.context,
			passcode,
		);

		if (res?.responseCode === ResponseCode.WRONG_PASSCODE) {
			setKey((key) => key + 1);
		} else if (res?.responseCode === ResponseCode.ERROR) {
			setErrorMessage(res.message);
		}
	};

	return (
		<ModalWrapper>
			<PasscodeFeature
				key={key}
				verticalTransition={0}
				logoUri={logoUri}
				title={'Confirm to transfer' + (key !== 0 ? ' - wrong passode' : '')}
				confirmation={false}
				onPasscodeEnter={onPasscodeEnter}
			/>
			{errorMessage && <Text>{errorMessage}</Text>}
		</ModalWrapper>
	);
};

export default PasscodeScreen;
