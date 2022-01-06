import { useEthers } from '@usedapp/core'
import React from "react"
import {NODE_ABI, NODE_ADDRESS} from "../nodeManageConfig.js";
import Web3 from "web3"
import "../button.css";



export var items = []

export const Wallet = () => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const isConnected = account !== undefined

    const handleActiveSubmit = async () => {
        activateBrowserWallet()



        const web3 = new Web3(Web3.givenProvider)


    }

    return (
        <div className="">
            {isConnected ? (
                <button  className="mint-but" href="#header" onClick={deactivate}>
                    Disconnect
                </button>
                ) : (
                    <button  className="mint-but" href="#header"  onClick={handleActiveSubmit}>
                        Connect
                    </button>
                )
            }
        </div>
    )
}