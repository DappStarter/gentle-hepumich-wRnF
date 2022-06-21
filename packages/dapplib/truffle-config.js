require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan reflect noise attitude hope enrich sure genius'; 
let testAccounts = [
"0x3e6028a56ac8d7ad07602bfa4ea329f5c4b922d36e4b688f60115bfd5123b6e2",
"0xe56a822d5522f038d1203bbe9917989ac4c0c19d8f51a00e2a53c19065a7318b",
"0x9243446f9383b70af63d186f29d096dbccd46c35820ef755332456dddc8ccf19",
"0xff9e543a93df80b4cadfe46b892c35e7ce1a69591277b7490f0431cebc597612",
"0xf669fce0e03ec5319226504ff79745062ff6e565d6b1d12dd555e1150248cdc8",
"0xcc07542dc3663f82e00b6f6dfd30f8e4041cf6e9628acdc3e8f2a612ec8cd83f",
"0x9d95abd489565db1c63acd212dd4b7819224550342b2b2295cf4dad8c9ba8d7d",
"0x8453635bddd3e5daafda1f2606ddeddb35632b5c454319baa1bf1a61ed3269d8",
"0xd6b48d36afc5f4283384535d856c5d9d1edbd11eb5bc38d81ba3376c4732a001",
"0xf003abfa1c34452fd351c99f0babba8d64ab935162bc0fb2407029967d580f23"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

