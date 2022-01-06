import {CONTRACT_ADDRESS, CONTRACT_ABI} from "../config.js";
import Web3 from "web3"
import { useEthers } from '@usedapp/core'



export const ClaimAll = () => {

    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    const {account} = useEthers()



    const handleBuySubmit = async () => {
        contract.setProvider(web3.givenProvider)

        if (account){
            return contract.methods.cashoutAll().send({from: account})
        } else {
            alert("not connected")
        }
    }

    return (
        <div>
            <button onClick={handleBuySubmit} className="mint-but">Claim All</button>
        </div>
    )
}