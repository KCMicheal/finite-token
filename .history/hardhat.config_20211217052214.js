require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: { // defining our test network 
      url: 'https://eth-rinkeby.alchemyapi.io/v2/FaxMBNmiTGDfYp_drrTsXKEz9BW1MBWt',
      accounts: ['76c61da94ed1c9167f3c86773e9b697b35dba6e7264716109e78fef828bfdec1 '], // metamask rinkeby account private key
    },
  },
};
