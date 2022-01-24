import {CONTRACT_ADDRESS, CONTRACT_ABI} from "../config.js";
import Web3 from "web3"
import { useEthers } from '@usedapp/core'
import React, {useState} from "react"



export const Buy = () => {

    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    const {account} = useEthers()

    const [itemName, setItemName] = useState(0)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAddress = event.target.value === "" ? "" : event.target.value
        setItemName(newAddress)
        console.log(newAddress)
    }


    const handleBuySubmit = async () => {
        contract.setProvider(web3.givenProvider)

        if (account){
            if (itemName){
                if (itemName.length > 5) {
                const userBalance = await contract.methods.balanceOf(account).call()
                console.log(userBalance)
                const nodePrice = await contract.methods.getNodePrice().call()
                console.log(nodePrice)
                if (Number(userBalance) >= Number(nodePrice)){
                    return contract.methods.createNodeWithTokens(itemName).send({from: account})
                } else {
                alert("Not enough tokens")
                }
                } else {
                    alert("Needs to be longer then 5 characters")
                }
            } else {
                alert("No name selected")
            }
        } else {
            alert("Not connected")
        }

    }

    return (
        <div>
            <input onChange={handleInputChange} placeholder="node name" className="mint-but" id="inputQuantity" type="text" minLength={5} maxLength={20} style={{ minWidth: "100px", maxWidth: "150px", marginTop: 0, color: "white"}}/>
            <button onClick={handleBuySubmit} id="buyNodeBtn" className="mint-but2">Buy</button>
        </div>
    )
}