const NFT = artifacts.require("MetaVerseNFT");

module.exports = function (deployer) {
  deployer.deploy(NFT);
};
