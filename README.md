<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./.github/img/nft-light.svg">
        <img alt="fastjpeg/nft" src="./.github/img/nft-dark.svg">
    </picture>
    <br>
    TypeScript NFT Metadata Parser
</p>
<p align="center">
    <img src="https://img.shields.io/badge/Language-TypeScript-blue.svg"/>
    <img src="https://img.shields.io/github/stars/fastjpeg/nft.svg"/>
    <img src="https://img.shields.io/github/license/fastjpeg/nft.svg"/>
</p>

## Features

- 🔒 TypeScript ready
- 🛠️ Tested
- 🪽 Lightweight
- ⛓️ Multi-chain
- 🔌 Seamless extension to [Viem](https://viem.sh)
- 💾 [IPFS](https://www.ipfs.com) and [Arweave](https://www.arweave.org)
- 🖼️ [ERC 721](https://ethereum.org/developers/docs/standards/tokens/erc-721) and [ERC 1155](https://ethereum.org/developers/docs/standards/tokens/erc-1155)

## Usage

Add Package:

```sh
pnpm add fastjpeg/nft
```

```sh
npm install fastjpeg/nft
```

```sh
yarn install fastjpeg/nft
```

```sh
bun install fastjpeg/nft
```

Use Package:

```javascript
import { nft } from '@fastjpeg/nft';

const client = createPublicClient({
    chain: mainnet,
    transport: http(),
}).extend((client) => ({
    nft: nft(client)
}));

// Prada Timecapsule
const ptcAddress = getAddress("0x0e220A4F3957C17a2e780922DBC13Cb2C9aa4274")
const tokenId = 1n

const metadata = await client.nft.parseMetadata(ptcAddress, tokenId);
```

Configure:

You can specify your own IPFS Gateways or Arweave hosts passing them into the client. The library will automatically fallback to gateways in their listed order.

```typescript
const ipfsGateways: URL[] = [
    new URL('https://dweb.link'),
    new URL('https://cloudflare-ipfs.com'),
    new URL('https://ipfs.io'),
    new URL('https://gateway.pinata.cloud')
];
const arweaveHosts: URL[] = [new URL('https://arweave.net')];
const nftClient = nft(client, ipfsGateways, arweaveHosts);
```

> [!IMPORTANT]
> [IPFS Gateway List](https://ipfs.github.io/public-gateway-checker/) - List of public IPFS gateways

Response:

```typescript
{
    address: '0x0e220A4F3957C17a2e780922DBC13Cb2C9aa4274',
    chainId: 1,
    name: 'Prada Timecapsule',
    symbol: 'PTC',
    tokenURI: 'ipfs://QmZdeE86Az7m5kroGZLyFTgWrd8QyLo21czRu8kbRzTNwE',
    metadata: {
        name: 'PRADA Timecapsule: June 2022 - Cass x Prada',
        description:
        'The Prada Timecapsule NFT is gifted alongside the physical...',
        image: 'ipfs://QmVe4fv85rd8Zz6wBtAgyrnG6e9LqELWrtG7G86TsRzVJC',
        animation_url: 'ipfs://QmTbtQkgsBV2Yy4Z1E6ySwjzdtjzeUAyV3SakqX4GBqU9S',
        properties: {
            color: {
                name: 'Color',
                value: 'Black',
            },
            item_number: {
                name: 'Item number',
                value: '1',
            },
            month: {
                name: 'Month',
                value: 'June',
            },
            year: {
                name: 'Year',
                value: '2022',
            },
        },
    },
    image: 'https://cloudflare-ipfs.com/ipfs/QmVe4fv85rd8Zz6wBtAgyrnG6e9LqELWrtG7G86TsRzVJC',
    animation_url: 'https://cloudflare-ipfs.com/ipfs/QmTbtQkgsBV2Yy4Z1E6ySwjzdtjzeUAyV3SakqX4GBqU9S',
}
```

## Supported NFT's

| Contract | Address |
| -------- | ------- |
| Autoglphys | `0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782` |
| Loot | `0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7` |
| Hashmasks | `0xC2C747E0F7004F9E8817Db2ca4997657a7746928` |