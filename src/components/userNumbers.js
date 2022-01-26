import { useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../config.js";
import { NODE_ABI, NODE_ADDRESS } from "../nodeManageConfig.js";
import { DISTRIBUTION_ABI, DISTRIBUTION_ADDRESS} from "../distributionConfig.js";
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
    const distributionContract = new web3.eth.Contract(DISTRIBUTION_ABI, DISTRIBUTION_ADDRESS);
    distributionContract.setProvider(web3.givenProvider);
    const newitems = [];
    const numberOfNodes = await contract.methods.getNodeNumberOf(account).call();

    const totalNodes = await contract.methods.getTotalCreatedNodes().call();
    const daysStaked = await distributionContract.methods.getLastClaimedBlock(account).call();
    var days = 0;
    const now = await web3.eth.getBlockNumber()
    const realDays = (now - daysStaked);
    if (realDays > 0) {

    days = (realDays - (realDays % 14400)) / 14400
    console.log(days)
    }


    const rewards = numberOfNodes * 1 * days;



    newitems.push(String(numberOfNodes));
    newitems.push(String(totalNodes));
    newitems.push(String(rewards));
    newitems.push(String(days));

    setStats(newitems);
  };
    if (account) {
      setUserStats();
    }
  }, [account]);

  return <ONumbers stats={stats} />;
};
