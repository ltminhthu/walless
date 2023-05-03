import { type BootstrapResult, appState } from '@walless/app';
import { SettingDocument } from '@walless/store';
import { db } from 'utils/pouch';
import { router } from 'utils/routing';

export const bootstrap = async (): Promise<BootstrapResult> => {
	const response: BootstrapResult = {};
	const setting = await db.safeGet<SettingDocument>('settings');

	if (setting?.profile?.email) {
		response.profile = setting.profile;
		appState.profile = setting.profile;
	}

	return response;
};

export const launchApp = async ({
	profile,
}: BootstrapResult): Promise<void> => {
	if (profile?.email) {
		await router.navigate('/');
	} else {
		await router.navigate('/login');
	}

	appState.loading = false;
};
