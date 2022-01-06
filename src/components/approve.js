import {CONTRACT_ADDRESS, CONTRACT_ABI} from "../config.js";
import Web3 from "web3"
import { useEthers } from '@usedapp/core'



export const Approve = () => {

    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    const {account} = useEthers()



    const handleBuySubmit = async () => {
        contract.setProvider(web3.givenProvider)

            const totalTokens = await contract.methods.balanceOf(account).call()
            console.log(totalTokens)
            return contract.methods.approve(CONTRACT_ADDRESS, totalTokens).send({from: account})

    }

    return (
        <div>
            <button onClick={handleBuySubmit} className="mint-but">Approve</button>
        </div>
    )
}