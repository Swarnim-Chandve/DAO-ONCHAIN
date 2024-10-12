"use client";

import {
  MeowsDAOABI,
  MeowsDAOAddress,
  MeowsNFTABI,
  MeowsNFTAddress,
} from "../constants/index";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import Head from "next/head";

import { useState, useEffect } from "react";

import { formatEther } from "viem";

import { useAccount, useBalance, useReadContract } from "wagmi";

import { readContract, waitForTransactionReceipt, writeContract } from '@wagmi/core';

import styles from "./page.module.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const { address, isConnected } = useAccount();

  const [isMounted, setIsMounted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [fakeNftTokenId, setFakeNftTokenId] = useState("");

  const [proposals, setProposals] = useState([]);

  const [selectedTab, setSelectedTab] = useState("");

  const daoOwner = useReadContract({
    abi: MeowsDAOABI,
    address: MeowsDAOAddress,
    functionName: "owner",
  });

  const daoBalance = useBalance({
    address: MeowsDAOAddress,
  });

  const numOfProposalsInDAO = useReadContract({
    abi: MeowsDAOABI,
    address: MeowsDAOAddress,
    functionName: "numProposals",
  });

  const nftBalanceOfUser = useReadContract({
    abi: MeowsNFTABI,
    address: MeowsNFTAddress,
    functionName: "balanceOf",
    args: [address],
  });

  async function createProposal() {
    setLoading(true);

    try {
      const tx = await writeContract({
        address: MeowsDAOAddress,
        abi: MeowsDAOABI,
        functionName: "createProposal",
        args: [fakeNftTokenId],
      });
      await waitForTransactionReceipt(tx);
    } catch (error) {
      console.error(error);
      window.alert(error);
    }
    setLoading(false);
  }

  async function fetchProposalById(id) {
    try {
      const proposal = await readContract({
        address: MeowsDAOAddress,
        abi: MeowsDAOABI,
        functionName: "proposals",
        args: [id],
      });

      const [nftTokenId, deadline, yayVotes, nayVotes, executed] = proposal;

      const parsedProposal = {
        proposalId: id,
        nftTokenId: nftTokenId.toString(),
        deadline: new Date(parseInt(deadline.toString()) * 1000),
        yayVotes: yayVotes.toString(),
        nayVotes: nayVotes.toString(),
        executed: Boolean(executed),
      };

      return parsedProposal;
    } catch (error) {
      console.error(error);
      window.alert(error);
    }
  }

  async function fetchAllProposals() {
    try {
      const proposals = [];

      for (let i = 0; i < numOfProposalsInDAO; i++) {
        const proposal = await fetchAllProposals(i);
        proposals.push(proposal);
      }

      setProposals(proposals);
      return proposals;
    } catch (error) {
      console.error(error);
      window.alert(error);
    }
  }

  async function voteForProposal(proposalId, vote) {
    setLoading(true);
    try {
      const tx = await writeContract({
        address: MeowsDAOAddress,
        abi: MeowsDAOABI,
        functionName: "voteOnProposal",
        args: [proposalId, vote === "YAY" ? 0 : 1],
      });

      await waitForTransactionReceipt(tx);
    } catch (error) {
      console.error(error);
      window.alert(error);
    }
    setLoading(false);
  }

  async function executeProposal(proposalId) {
    setLoading(true);
    try {
      const tx = await writeContract({
        address: MeowsDAOAddress,
        abi: MeowsDAOABI,
        functionName: "executeProposal",
        args: [proposalId],
      });

      await waitForTransactionReceipt(tx);
    } catch (error) {
      console.error(error);
      window.alert(error);
    }
    setLoading(false);
  }

  async function withdrawDAOEther() {
    setLoading(true);
    try {
      const tx = await writeContract({
        address: MeowsDAOAddress,
        abi: MeowsDAOABI,
        functionName: "withdrawEther",
        args: [],
      });

      await waitForTransactionReceipt(tx);
    } catch (error) {
      console.error(error);
      window.alert(error);
    }

    setLoading(false);
  }

  function renderTabs() {
    if (selectedTab == "Create Proposal") {
      return renderCreateProposalTab();
    } else if (selectedTab == "View Proposals") {
      return renderViewProposalsTab();
    }
    return null;
  }

  function renderCreateProposalTab() {
    if (loading) {
      return (
        <div className={styles.description}>
          Loading... Waiting for transaction...
        </div>
      );
    } else if (nftBalanceOfUser.data === 0) {
      return (
        <div className={styles.description}>
          You do not own any Meow NFTs. <br />
          <b>You cannot create or vote on proposals</b>
        </div>
      );
    } else {
      return (
        <div className={styles.description}>
          <label>Fake NFT Token ID to Purchase: </label>
          <input
            placeholder="0"
            type="number"
            onChange={(e) => setFakeNftTokenId(e.target.value)}
          ></input>
          <button className={styles.button2} onClick={createProposal}>
            Create
          </button>
        </div>
      );
    }
  }

  function renderViewProposalsTab() {
    if (loading) {
      return (
        <div className={styles.description}>
          Loading... Waiting for transaction...
        </div>
      );
    } else if (proposals.length === 0) {
      return (
        <div>
          {proposals.map((p, index) => (
            <div key={index} className={styles.card}>
              <p>Proposal ID: {p.proposalId}</p>
              <p>Fake NFT to Purchase: {p.nftTokenId}</p>
              <p>Deadline: {p.deadline.toLocaleString()}</p>
              <p>Yay Votes: {p.yayVotes}</p>
              <p>Nay Votes: {p.nayVotes}</p>
              <p>Executed?: {p.executed.toString()}</p>
              {p.deadline.getTime() > Date.now() && !p.executed ? (
                <div className={styles.flex}>
                  <button
                    className={styles.button2}
                    onClick={() => voteForProposal(p.proposalId, "YAY")}
                  >
                    Vote YAY
                  </button>
                  <button
                    className={styles.button2}
                    onClick={() => voteForProposal(p.proposalId, "NAY")}
                  >
                    Vote NAY
                  </button>
                </div>
              ) : p.deadline.getTime() < Date.now() && !p.executed ? (
                <div className={styles.flex}>
                  <button
                    className={styles.button2}
                    onClick={() => executeProposal(p.proposalId)}
                  >
                    Execute Proposal{" "}
                    {p.yayVotes > p.nayVotes ? "(YAY)" : "(NAY)"}
                  </button>
                </div>
              ) : (
                <div className={styles.description}>Proposal Executed</div>
              )}
            </div>
          ))}
        </div>
      );
    }
  }

  useEffect(() => {
    if (selectedTab === "View Proposals") {
      fetchAllProposals();
    }
  }, [selectedTab]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (!isConnected)
    return (
      <div>
        <ConnectButton />
      </div>
    );

  return (
    <div className={inter.className}>
      <Head>
        <title>
          Meows DAO
          <meta name="description" content="Meows DAO" />
          <link rel="icon" href="/favicon.ico" />
        </title>
      </Head>

      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Meows !!</h1>
          <div className={styles.description}>Welcome to the DAO!</div>
          <div className={styles.description}>
            Your Meows NFT Balance: {nftBalanceOfUser.data.toString()}
            <br />
            {daoBalance.data && (
              <>
                Treasury Balance:{" "}
                {formatEther(daoBalance.data.value).toString()} ETH
              </>
            )}
            <br />
            Total Number of Proposals : {numOfProposalsInDAO.data.toString()}
          </div>

          <div className={styles.flex}>
            <button
              className={styles.button}
              onClick={() => setSelectedTab("Create Proposal")}
            >
              Create Proposal
            </button>

            <button
              className={styles.button}
              onClick={() => setSelectedTab("View Proposals")}
            >
              {" "}
              View Proposals
            </button>
          </div>

          {renderTabs()}

          {address && address.toLowerCase() === daoOwner.data.toLowerCase() ? (
            <div>
              {loading ? (
                <button className={styles.button}>Loading...</button>
              ) : (
                <button className={styles.button} onClick={withdrawDAOEther}>
                  Withdraw DAO ETH
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <img className={styles.image} src="https://i.imgur.com/buNhbF7.png" />
        </div>
      </div>
    </div>
  );
}




