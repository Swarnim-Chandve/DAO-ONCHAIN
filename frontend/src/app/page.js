
// "use client";

// import {
//   MeowsDAOABI,
//   MeowsDAOAddress,
//   MeowsNFTABI,
//   MeowsNFTAddress,
// } from "@/constants";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import Head from "next/head";
// import { useEffect, useState } from "react";
// import { formatEther } from "viem/utils";
// // import useProposalById from "@/hooks/useProposalById";
// import {
//   useAccount,
//   useBalance,
//   useReadContract,
//   useWriteContract,
//   useWaitForTransactionReceipt,
//   useChainId,
// } from "wagmi";

// import {
//   readContract,
//   // waitForTransactionReceipt,
//   // writeContract,
// } from "wagmi/actions";

// import styles from "./page.module.css";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function Home() {
//   // Check if the user's wallet is connected, and its address using Wagmi's hooks.
//   const { address, isConnected } = useAccount();
//   // State variable to know if the component has been mounted yet or not
//   const [isMounted, setIsMounted] = useState(false);
//   const { data: hash, writeContract } = useWriteContract();
//   // const { waitForTransactionReceipt } = useWaitForTransactionReceipt();
//   // State variable to show the loading state when waiting for a transaction to go through
//   const [loading, setLoading] = useState(false);
//   const [Id, setId] = useState(0);
//   // Fake NFT Token ID to purchase. Used when creating a proposal.
//   const [fakeNftTokenId, setFakeNftTokenId] = useState("");
//   // State variable to store all proposals in the DAO
//   const [proposals, setProposals] = useState([]);
//   // State variable to switch between the 'Create Proposal' and 'View Proposals' tabs
//   const [selectedTab, setSelectedTab] = useState("");

//   // Fetch the owner of the DAO
//   const { data: daoOwner } = useReadContract({
//     abi: MeowsDAOABI,
//     address: MeowsDAOAddress,
//     functionName: "owner",
//   });
//   console.log("DAO owner = ", daoOwner);
//   // Fetch the balance of the DAO
//   const { data: daoBalance } = useBalance({
//     address: MeowsDAOAddress,
//   });
//   console.log("DAO balance = ", daoBalance);

//   // Fetch the number of proposals in the DAO
//   const { data: numOfProposalsInDAO } = useReadContract({
//     abi: MeowsDAOABI,
//     address: MeowsDAOAddress,
//     functionName: "numProposals",
//   });
//   const numOfProposals = Number(numOfProposalsInDAO); // Convert BigInt to Number

//   console.log("numOfProposalsInDAO =", numOfProposals);

//   // Fetch the CryptoDevs NFT balance of the user
//   const { data: nftBalanceOfUser } = useReadContract({
//     abi: MeowsNFTABI,
//     address: MeowsNFTAddress,
//     functionName: "balanceOf",
//     args: [address],
//   });
//   console.log("nftBalanceOfUser =", Number(nftBalanceOfUser));

//   async function createProposal() {
//     setLoading(true);
//     if (!isConnected) {
//       window.alert("Please connect your wallet to create a proposal.");
//       setLoading(false);
//       return;
//     }
//     console.log("passed isConnected");
//     console.log("isConnected", isConnected);
//     try {
//       console.log("inside try block of createProposal");
//       await writeContract({
//         address: MeowsDAOAddress,
//         abi: MeowsDAOABI,
//         functionName: "createProposal",
//         args: [fakeNftTokenId],
//       });
//       console.log("contract written");
//     } catch (error) {
//       console.error(error);
//       window.alert(error);
//     }

//     setLoading(false);
//   }

//   // Function to fetch a proposal by it's ID
//   const { data: proposal } = useReadContract({
//     address: MeowsDAOAddress,
//     abi: MeowsDAOABI,
//     functionName: "proposals",
//     args: [0],
//   });
//   async function fetchProposalById(id) {
//     try {
//       const [nftTokenId, deadline, yayVotes, nayVotes, executed] = proposal;

//       const parsedProposal = {
//         proposalId: id,
//         nftTokenId: nftTokenId.toString(),
//         deadline: new Date(parseInt(deadline.toString()) * 1000),
//         yayVotes: yayVotes.toString(),
//         nayVotes: nayVotes.toString(),
//         executed: Boolean(executed),
//       };

//       return parsedProposal;
//     } catch (error) {
//       console.error(error);
//       window.alert(error);
//     }
//   }
//   // Function to fetch all proposals in the DAO
//   async function fetchAllProposals() {
//     try {
//       const proposals = [];
//       const numOfProposals = Number(numOfProposalsInDAO); // Convert BigInt to Number

//       for (let i = 0; i < numOfProposals; i++) {
//         const proposal = await fetchProposalById(i);
//         proposals.push(proposal);
//         setId(i);
//         console.log("Id", Id);
//       }
//       setProposals(proposals);
//       return proposals;
//     } catch (error) {
//       console.error(error);
//       window.alert(error);
//     }
//   }
//   console.log("proposals", proposals);
//   // Function to vote YAY or NAY on a proposal
//   async function voteForProposal(proposalId, vote) {
//     setLoading(true);
//     try {
//       await writeContract({
//         account: address,
//         // account: "0xb604c4c69836D92f4a68e2FF9C1e813a06D5D9D2",
//         address: MeowsDAOAddress,
//         abi: MeowsDAOABI,
//         functionName: "voteOnProposal",
//         args: [proposalId, vote === "YAY" ? 0 : 1],
//       });
//     } catch (error) {
//       console.error(error);
//       window.alert(error);
//     }
//     setLoading(false);
//   }

//   // Function to execute a proposal after the deadline has been exceeded
//   async function executeProposal(proposalId) {
//     setLoading(true);
//     try {
//       await writeContract({
//         account: address,
//         // account: "0xb604c4c69836D92f4a68e2FF9C1e813a06D5D9D2",
//         address: MeowsDAOAddress,
//         abi: MeowsDAOABI,
//         functionName: "executeProposal",
//         args: [proposalId],
//       });
//     } catch (error) {
//       console.error(error);
//       window.alert(error);
//     }
//     setLoading(false);
//   }

//   // Function to withdraw ether from the DAO contract
//   async function withdrawDAOEther() {
//     setLoading(true);
//     try {
//       await writeContract({
//         address: MeowsDAOAddress,
//         abi: MeowsDAOABI,
//         functionName: "withdrawEther",
//         args: [],
//       });
//     } catch (error) {
//       console.error(error);
//       window.alert(error);
//     }
//     setLoading(false);
//   }

//   // async function createProposal() {
//   //   setLoading(true);
//   //   if (!isConnected) {
//   //     window.alert("Please connect your wallet to create a proposal.");
//   //     setLoading(false);
//   //     return;
//   //   }
//   //   writeContract({
//   //     address: CryptoDevsDAOAddress,
//   //     abi: CryptoDevsDAOABI,
//   //     functionName: "createProposal",
//   //     args: [fakeNftTokenId],
//   //   }); // Use await to wait for the write function
//   //   console.log("contract written");
//   //   setLoading(false);
//   // }
//   const { isLoading: isConfirming, isSuccess: isConfirmed } =
//     useWaitForTransactionReceipt({
//       hash,
//     });
//   console.log("isConfirmed", isConfirmed);

//   // Render the contents of the appropriate tab based on `selectedTab`
//   function renderTabs() {
//     if (selectedTab === "Create Proposal") {
//       return renderCreateProposalTab();
//     } else if (selectedTab === "View Proposals") {
//       return renderViewProposalsTab();
//     }
//     return null;
//   }

//   // Renders the 'Create Proposal' tab content
//   function renderCreateProposalTab() {
//     if (loading) {
//       return (
//         <div className={styles.description}>
//           Loading... Waiting for transaction...
//         </div>
//       );
//     } else if (nftBalanceOfUser === 0n) {
//       return (
//         <div className={styles.description}>
//           You do not own any Meow NFTs. <br />
//           <b>You cannot create or vote on proposals</b>
//         </div>
//       );
//     } else {
//       return (
//         <div className={styles.container}>
//           <label>Fake NFT Token ID to Purchase: </label>
//           <input
//             placeholder="0"
//             type="number"
//             onChange={(e) => setFakeNftTokenId(e.target.value)}
//           />
//           <button className={styles.button2} onClick={createProposal}>
//             Create
//           </button>
//         </div>
//       );
//     }
//   }

//   // Renders the 'View Proposals' tab content
//   function renderViewProposalsTab() {
//     if (loading) {
//       return (
//         <div className={styles.description}>
//           Loading... Waiting for transaction...
//         </div>
//       );
//     } else if (proposals.length === 0) {
//       return (
//         <div className={styles.description}>No proposals have been created</div>
//       );
//     } else {
//       return (
//         <div>
//           {proposals.map((p, index) => (
//             <div key={index} className={styles.card}>
//               <p>Proposal ID: {p.proposalId}</p>
//               <p>Fake NFT to Purchase: {p.nftTokenId}</p>
//               <p>Deadline: {p.deadline.toLocaleString()}</p>
//               <p>Yay Votes: {p.yayVotes}</p>
//               <p>Nay Votes: {p.nayVotes}</p>
//               <p>Executed?: {p.executed.toString()}</p>
//               {p.deadline.getTime() > Date.now() && !p.executed ? (
//                 <div className={styles.flex}>
//                   <button
//                     className={styles.button2}
//                     onClick={() => voteForProposal(p.proposalId, "YAY")}
//                   >
//                     Vote YAY
//                   </button>
//                   <button
//                     className={styles.button2}
//                     onClick={() => voteForProposal(p.proposalId, "NAY")}
//                   >
//                     Vote NAY
//                   </button>
//                 </div>
//               ) : p.deadline.getTime() < Date.now() && !p.executed ? (
//                 <div className={styles.flex}>
//                   <button
//                     className={styles.button2}
//                     onClick={() => executeProposal(p.proposalId)}
//                   >
//                     Execute Proposal{" "}
//                     {p.yayVotes > p.nayVotes ? "(YAY)" : "(NAY)"}
//                   </button>
//                 </div>
//               ) : (
//                 <div className={styles.description}>Proposal Executed</div>
//               )}
//             </div>
//           ))}
//         </div>
//       );
//     }
//   }

//   // Piece of code that runs every time the value of `selectedTab` changes
//   // Used to re-fetch all proposals in the DAO when the user switches
//   // to the 'View Proposals' tab
//   useEffect(() => {
//     if (selectedTab === "View Proposals") {
//       fetchAllProposals();
//     }
//   }, [selectedTab]);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) return null;

//   if (!isConnected)
//     return (
//       <div>
//         <ConnectButton />
//       </div>
//     );

//   return (
//     <div className={inter.className}>
//       <Head>
//         <title>Meows DAO</title>
//         <meta name="description" content="CryptoDevs DAO" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className={styles.main}>
//         <div>
//           <h1 className={styles.title}>Welcome to Meows !</h1>
//           <div className={styles.description}>Welcome to the DAO!</div>
//           <div className={styles.description}>
//             Your Meows NFT Balance:{" "}
//             {nftBalanceOfUser ? nftBalanceOfUser.toString() : "0"}
//             <br />
//             {daoBalance && (
//               <>
//                 Treasury Balance: {formatEther(daoBalance.value).toString()} ETH
//               </>
//             )}
//             <br />
//             Total Number of Proposals:{" "}
//             {numOfProposalsInDAO ? numOfProposalsInDAO.toString() : "0"}
//           </div>
//           <div className={styles.flex}>
//             <button
//               className={styles.button}
//               onClick={() => setSelectedTab("Create Proposal")}
//             >
//               Create Proposal
//             </button>
//             <button
//               className={styles.button}
//               onClick={() => setSelectedTab("View Proposals")}
//             >
//               View Proposals
//             </button>
//           </div>
//           {renderTabs()}
//           {/* Display additional withdraw button if connected wallet is owner */}
//           {address && address.toLowerCase() === daoOwner?.toLowerCase() ? (
//             <div>
//               {loading ? (
//                 <button className={styles.button}>Loading...</button>
//               ) : (
//                 <button className={styles.button} onClick={withdrawDAOEther}>
//                   Withdraw DAO ETH
//                 </button>
//               )}
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//         Address Logged in : {address}
//         DAOOwner : {daoOwner}
//         {isConfirming && <div>Waiting for confirmation...</div>}
//         {isConfirmed && <div>Transaction confirmed.</div>}
//         {hash && <div> Transaction Hash: {hash}</div>}
//       </div>
//     </div>
//   );
// }



// //@audit
"use client"

import { MeowsDAOABI, MeowsDAOAddress, MeowsNFTABI, MeowsNFTAddress } from "@/constants"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Head from "next/head"
import { useEffect, useState } from "react"
import { formatEther } from "viem/utils"
import {
  useAccount,
  useBalance,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi"

import { Card, CardContent, CardDescription, CardHeader, CardTitle,CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  const { address, isConnected } = useAccount()
  const [isMounted, setIsMounted] = useState(false)
  const { data: hash, writeContract } = useWriteContract()
  const [loading, setLoading] = useState(false)
  const [fakeNftTokenId, setFakeNftTokenId] = useState("")
  const [proposals, setProposals] = useState([])

  const { data: daoOwner } = useReadContract({
    abi: MeowsDAOABI,
    address: MeowsDAOAddress,
    functionName: "owner",
  })

  const { data: daoBalance } = useBalance({
    address: MeowsDAOAddress,
  })

  const { data: numOfProposalsInDAO } = useReadContract({
    abi: MeowsDAOABI,
    address: MeowsDAOAddress,
    functionName: "numProposals",
  })
  const numOfProposals = Number(numOfProposalsInDAO)

  const { data: nftBalanceOfUser } = useReadContract({
    abi: MeowsNFTABI,
    address: MeowsNFTAddress,
    functionName: "balanceOf",
    args: [address],
  })

  async function createProposal() {
    setLoading(true)
    if (!isConnected) {
      window.alert("Please connect your wallet to create a proposal.")
      setLoading(false)
      return
    }
    try {
      await writeContract({
        address: MeowsDAOAddress,
        abi: MeowsDAOABI,
        functionName: "createProposal",
        args: [fakeNftTokenId],
      })
    } catch (error) {
      console.error(error)
      window.alert(error)
    }
    setLoading(false)
  }

  const { data: proposal } = useReadContract({
    address: MeowsDAOAddress,
    abi: MeowsDAOABI,
    functionName: "proposals",
    args: [0],
  })

  async function fetchProposalById(id) {
    try {
      const [nftTokenId, deadline, yayVotes, nayVotes, executed] = proposal
      return {
        proposalId: id,
        nftTokenId: nftTokenId.toString(),
        deadline: new Date(parseInt(deadline.toString()) * 1000),
        yayVotes: yayVotes.toString(),
        nayVotes: nayVotes.toString(),
        executed: Boolean(executed),
      }
    } catch (error) {
      console.error(error)
      window.alert(error)
    }
  }

  async function fetchAllProposals() {
    try {
      const proposals = []
      for (let i = 0; i < numOfProposals; i++) {
        const proposal = await fetchProposalById(i)
        proposals.push(proposal)
      }
      setProposals(proposals)
    } catch (error) {
      console.error(error)
      window.alert(error)
    }
  }

  async function voteForProposal(proposalId, vote) {
    setLoading(true)
    try {
      await writeContract({
        account: address,
        address: MeowsDAOAddress,
        abi: MeowsDAOABI,
        functionName: "voteOnProposal",
        args: [proposalId, vote === "YAY" ? 0 : 1],
      })
    } catch (error) {
      console.error(error)
      window.alert(error)
    }
    setLoading(false)
  }

  async function executeProposal(proposalId) {
    setLoading(true)
    try {
      await writeContract({
        account: address,
        address: MeowsDAOAddress,
        abi: MeowsDAOABI,
        functionName: "executeProposal",
        args: [proposalId],
      })
    } catch (error) {
      console.error(error)
      window.alert(error)
    }
    setLoading(false)
  }

  async function withdrawDAOEther() {
    setLoading(true)
    try {
      await writeContract({
        address: MeowsDAOAddress,
        abi: MeowsDAOABI,
        functionName: "withdrawEther",
        args: [],
      })
    } catch (error) {
      console.error(error)
      window.alert(error)
    }
    setLoading(false)
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    fetchAllProposals()
  }, [numOfProposals])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Meows DAO</title>
        <meta name="description" content="Meows DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Meows DAO</h1>
        <ConnectButton />
      </header>

      <main className="container mx-auto px-4 py-8">
        {!isConnected ? (
          <Card>
            <CardHeader>
              <CardTitle>Welcome to Meows DAO</CardTitle>
              <CardDescription>Please connect your wallet to continue.</CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>DAO Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your Meows NFT Balance: {nftBalanceOfUser ? nftBalanceOfUser.toString() : "0"}</p>
                <p>Treasury Balance: {daoBalance ? formatEther(daoBalance.value).toString() : "0"} ETH</p>
                <p>Total Number of Proposals: {numOfProposalsInDAO ? numOfProposalsInDAO.toString() : "0"}</p>
              </CardContent>
            </Card>

            <Tabs defaultValue="create">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="create">Create Proposal</TabsTrigger>
                <TabsTrigger value="view">View Proposals</TabsTrigger>
              </TabsList>
              <TabsContent value="create">
                <Card>
                  <CardHeader>
                    <CardTitle>Create a New Proposal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {Number(nftBalanceOfUser) === 0 ? (
                      <p>You do not own any Meow NFTs. You cannot create or vote on proposals.</p>
                    ) : (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="tokenId">Fake NFT Token ID to Purchase</Label>
                          <Input
                            id="tokenId"
                            placeholder="0"
                            type="number"
                            onChange={(e) => setFakeNftTokenId(e.target.value)}
                          />
                        </div>
                        <Button onClick={createProposal} disabled={loading}>
                          {loading ? "Creating..." : "Create Proposal"}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="view">
                <Card>
                  <CardHeader>
                    <CardTitle>View Proposals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {proposals.length === 0 ? (
                      <p>No proposals have been created</p>
                    ) : (
                      <div className="space-y-4">
                        {proposals.map((p, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <CardTitle>Proposal ID: {p.proposalId}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p>Fake NFT to Purchase: {p.nftTokenId}</p>
                              <p>Deadline: {p.deadline.toLocaleString()}</p>
                              <p>Yay Votes: {p.yayVotes}</p>
                              <p>Nay Votes: {p.nayVotes}</p>
                              <p>Executed: {p.executed.toString()}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                              {p.deadline.getTime() > Date.now() && !p.executed ? (
                                <>
                                  <Button onClick={() => voteForProposal(p.proposalId, "YAY")} disabled={loading}>
                                    Vote YAY
                                  </Button>
                                  <Button onClick={() => voteForProposal(p.proposalId, "NAY")} disabled={loading}>
                                    Vote NAY
                                  </Button>
                                </>
                              ) : p.deadline.getTime() < Date.now() && !p.executed ? (
                                <Button onClick={() => executeProposal(p.proposalId)} disabled={loading}>
                                  Execute Proposal {p.yayVotes > p.nayVotes ? "(YAY)" : "(NAY)"}
                                </Button>
                              ) : (
                                <p>Proposal Executed</p>
                              )}
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {address && address.toLowerCase() === daoOwner?.toLowerCase() && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>DAO Owner Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button onClick={withdrawDAOEther} disabled={loading}>
                    {loading ? "Withdrawing..." : "Withdraw DAO ETH"}
                  </Button>
                </CardContent>
              </Card>
            )}

            {(isConfirming || isConfirmed || hash) && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Transaction Status</CardTitle>
                </CardHeader>
                <CardContent>
                  {isConfirming && <p>Waiting for confirmation...</p>}
                  {isConfirmed && <p>Transaction confirmed.</p>}
                  {hash && <p>Transaction Hash: {hash}</p>}
                </CardContent>
              </Card>
            )}
          </>
        )}
      </main>
    </div>
  )
}


