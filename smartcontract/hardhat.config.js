require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  solidity: { version: "0.8.20" },
  networks: {
    testnet: {
      url: `https://node.botanixlabs.dev`,
      accounts: [`0x${privateKey}`],
    },
  },
};
