import { expect, test } from 'vitest';
import { getTransactionId, arweaveToHTTP } from '@/lib/arweave';

test('test arweave correct url', async () => {
  const tokenURI = new URL('ar://0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw');
  const transactionId = getTransactionId(tokenURI);
  expect(transactionId).toEqual('0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw');
});

test('test arweave invalid url', async () => {
  const tokenURI = new URL('https://arweave.net/0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw');
  const transactionId = getTransactionId(tokenURI);
  expect(transactionId).toEqual(null);
});

test('test arweave host', async () => {
  const tokenURI = new URL('ar://0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw');
  const gateway = new URL('https://arweave.net/');
  const gatewayURL = arweaveToHTTP(tokenURI, gateway);
  expect(gatewayURL).toEqual(new URL('https://arweave.net/0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw'));
});

test('test arweave host invalid url', async () => {
  const tokenURI = new URL('https://arweave.net/0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw');
  const gateway = new URL('https://arweave.net/');
  const gatewayURL = arweaveToHTTP(tokenURI, gateway);
  expect(gatewayURL).toEqual(null);
});
