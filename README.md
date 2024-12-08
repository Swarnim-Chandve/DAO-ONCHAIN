# MeowsDAO  

**An NFT-powered fully on-chain DAO to invest in NFT collections as a group.**

---

## 🐾 About MeowsDAO  

MeowsDAO is a **Decentralized Autonomous Organization (DAO)** built for holders of the **MeowDevs NFT Collection**. It allows members to collectively make governance decisions and invest in NFT collections as a group.  

DAOs, like MeowsDAO, democratize decision-making. Any member can create proposals, and all members can vote on them. Proposals have a voting deadline, and decisions are implemented based on the majority vote (**YES** or **NO**).

In MeowsDAO, membership is exclusive to holders of **MeowDevs NFTs**, granting them voting power and access to treasury funds.

---

## 🎯 How It Works  

1. **Membership**  
   Holders of **MeowDevs NFTs** automatically become members of MeowsDAO.  

2. **Treasury**  
   The DAO is funded by ETH collected from the sale of **MeowDevs NFTs**.  

3. **Proposals and Voting**  
   Members can create proposals to use the treasury for purchasing NFTs from marketplaces.  
   - Each proposal has a voting period.  
   - Members vote **YES** or **NO** on the proposal.  
   - Proposals passing the majority vote are executed.  

4. **Profits**  
   If NFTs purchased by the DAO are sold for a profit, the profits can be distributed among members.

---

## 🚀 Features  

- **Fully On-Chain:** All governance and treasury transactions happen directly on the blockchain.  
- **NFT-Gated Membership:** Only holders of **MeowDevs NFTs** can participate in governance.  
- **Democratic Governance:** Every member has a vote, making decision-making fair and transparent.  

---

## 💻 Tech Stack  

- **Smart Contracts:** Solidity  
- **Frameworks/Tools:** Hardhat, Foundry  
- **Frontend:** React.js, wagmi, ethers.js  
- **Blockchain:** Ethereum  

---

## 🌟 Get Started  

1. **Hold a MeowDevs NFT** to become a member.  
2. Visit the [MeowsDAO dApp](#link-to-dapp) to participate in governance and view treasury details.  
3. Create or vote on proposals to shape the DAO's future.  

---

## 🤝 Contributing  

Contributions are welcome! Feel free to open an issue or submit a pull request.

---




## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
