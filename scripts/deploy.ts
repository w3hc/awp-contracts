import { ethers } from "hardhat";

async function main() {
<<<<<<< Updated upstream
  const Imnotlate = await ethers.getContractFactory("Imnotlate");
  const uri = "https://bafybeibud4xds4el75ggpvwgexw45xtxxiv56h5akgfnvrcdad7q2hxgiy.ipfs.w3s.link/imnotlate.json"
  const nft = await Imnotlate.deploy(uri);
  await nft.deployed();
  console.log(`${nft.address}`);
=======
  const AWP = await ethers.getContractFactory("ArtheraWhitepaper");
  const uri = "https://bafybeifkpdwa4tkbbze5qui3yn2ph5cntiiojmdlkoxah5fs4mc55b3vt4.ipfs.w3s.link/arthera-whitepaper-nft-metadata.json"
  const nft = await AWP.deploy(uri);
  const nftDeployed = await nft.deployed();
  console.log("\nDeployed ✅", nftDeployed.deployTransaction.hash)
  console.log("\nContract address:", nft.address)
>>>>>>> Stashed changes
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
