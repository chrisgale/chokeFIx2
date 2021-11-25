import React from "react"
import {CONTRACT_ADDRESS, CONTRACT_API} from "../config"
import Web3 from "web3"
import { useEthers } from '@usedapp/core'


export const BuyForm = () => {

    const {account} = useEthers()
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(CONTRACT_API, CONTRACT_ADDRESS)

    const handleBuySubmit = async () => {

        contract.setProvider(web3.givenProvider)
        const value = "10000000000000000"

        return contract.methods.userMint().send({from: account, value: value})

    }

    return (
        <div>
            <button onClick={handleBuySubmit} className="button-14-copy">Hatch</button>
        </div>
    )

}