import {CONTRACT_ADDRESS, CONTRACT_API} from "../config"
import Web3 from "web3"
import { useEthers } from '@usedapp/core'
import React, {useState} from "react"
import {utils} from "ethers"


export const BuyForm = () => {

    const [amount, setAmount] = useState(0)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = event.target.value === "" ? "" : Number(event.target.value)
        setAmount(newAmount)
        console.log(newAmount)
    }

    const {account} = useEthers()
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(CONTRACT_API, CONTRACT_ADDRESS)

    const handleBuySubmit = async () => {

        contract.setProvider(web3.givenProvider)
        const value = amount * .08
        const transactionValue = utils.parseUnits(value.toString())
        const gasAmount = amount * 300000

        return contract.methods.mint(amount).send({from: account, value: transactionValue, gas: gasAmount})

    }

    return (
        <div>
            <input onChange={handleInputChange} placeholder="enter a number" className="text-box" id="inputQuantity" type="num" style={{maxWidth: "100px"}}/>
            <button onClick={handleBuySubmit} className="mint-but">Mint</button>
        </div>
    )

}