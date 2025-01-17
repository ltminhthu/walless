import { clusterApiUrl, Connection } from '@solana/web3.js';

const endpoint = __DEV__
	? clusterApiUrl('devnet')
	: 'https://broken-billowing-sanctuary.solana-mainnet.quiknode.pro/269a66566cb8bd89906698287232cf38c5cae13a/';

export const connection = new Connection(endpoint);
