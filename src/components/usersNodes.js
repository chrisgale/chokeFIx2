import { useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import { NODE_ABI, NODE_ADDRESS } from "../nodeManageConfig.js";
import Web3 from "web3";
import ONodes from "./Organism/o-nodes";
import "./Organism/o-nodes/style.scss";

export const UsersNodes = () => {
  const { account } = useEthers();

  const [items, setItems] = useState([]);


  useEffect(() => {
    const setUserItems = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(NODE_ABI, NODE_ADDRESS);
    contract.setProvider(web3.givenProvider);
    const newitems = [];

    const nodesNames = await contract.methods._getNodesNames(account).call();
    const nodesCreationTimes = await contract.methods._getNodesCreationTime(account).call();
    const nodesRewardsAvailable = await contract.methods._getNodesRewardAvailable(account).call();

    const names = nodesNames.split("#");
    const creationTime = nodesCreationTimes.split("#");
    const rewards = nodesRewardsAvailable.split("#");

    for (let i = 0; i < names.length; i++) {
      const nodeReward = Web3.utils.fromWei(String(rewards[i]), "ether");
      var udate = new Date(Number(creationTime[i]) * 1000)

      var readableDate = (udate.getMonth()+1)+"/"+udate.getDate()+"/"+udate.getFullYear()

      var item = {
        id: i,
        title: String(names[i]),
        date: String(creationTime[i]),
        formattedDate: String(readableDate),
        rewards: String(nodeReward),
      };

      newitems.push(item);
    }

    setItems(newitems);
  };

    if (account) {
      setUserItems();
    }
  }, [account]);

  return <ONodes NewItems={items} />;
};
