import { modules } from '@walless/ioc';
import { type SettingDocument } from '@walless/store';
import { appState } from 'state/app';

const id = 'settings';

export const sync = (settings?: SettingDocument) => {
	if (settings?._id) {
		appState.config = settings.config;
		appState.profile = settings.profile;
	}
};

export const setPrivacy = async ({ hideBalance }: { hideBalance: boolean }) => {
	await modules.storage.upsert<SettingDocument>(id, async (doc) => {
		doc.config.hideBalance = hideBalance;

		return doc;
	});
};
