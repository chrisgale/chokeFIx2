import { useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../config.js";
import { NODE_ABI, NODE_ADDRESS } from "../nodeManageConfig.js";
import Web3 from "web3";
import ONumbers from "./Organism/o-numbers";
import "./Organism/o-numbers/style.scss";


export const UsersNumbers = () => {
  const { account } = useEthers();
  const [stats, setStats] = useState([]);



  useEffect(() => {
    const setUserStats = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    contract.setProvider(web3.givenProvider);
    const node_contract = new web3.eth.Contract(NODE_ABI, NODE_ADDRESS);
    node_contract.setProvider(web3.givenProvider);
    const newitems = [];
    const numberOfNodes = await contract.methods
      .getNodeNumberOf(account)
      .call();

    const totalNodes = await contract.methods.getTotalCreatedNodes().call();




    const nodesRewardsAvailable = await node_contract.methods
      ._getNodesRewardAvailable(account)
      .call();

    const rewards = nodesRewardsAvailable.split("#");

    var sum = 0
    for (let i = 0; i < rewards.length; i++) {
        sum += Number(rewards[i]);
    }

    newitems.push(String(numberOfNodes));
    newitems.push(String(totalNodes));
    newitems.push(String(Web3.utils.fromWei(String(sum), "ether")));

    setStats(newitems);
  };
    if (account) {
      setUserStats();
    }
  }, [account]);

  return <ONumbers stats={stats} />;
};
