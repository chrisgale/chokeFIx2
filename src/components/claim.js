import {DISTRIBUTION_ADDRESS, DISTRIBUTION_ABI} from "../distributionConfig.js";
import Web3 from "web3"
import { useEthers } from '@usedapp/core'



export const ClaimAll = () => {

    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(DISTRIBUTION_ABI, DISTRIBUTION_ADDRESS)
    const {account} = useEthers()



    const handleBuySubmit = async () => {
        contract.setProvider(web3.givenProvider)

        if (account){
            var block = await web3.eth.getBlockNumber()

            var usersLastClaim = await contract.methods.getLastClaimedBlock(account).call()

            if (Number(block) > Number(usersLastClaim) + 14400) {

                return contract.methods.claimReward().send({from: account})
            } else {
                var difference = block - usersLastClaim
                var blocksLeft = 14400 - difference
                var estimatedTimeInSeconds = blocksLeft * 5.5
                var estimatedTimeInMinutes = estimatedTimeInSeconds/60
                var message = 'please wait ' + Math.round(estimatedTimeInMinutes) + ' more minutes';
                alert(message)
            }
        } else {
            alert("not connected")
        }
    }

    // Added id="myClaimBtn" here //
    return (
        <div>
            <button onClick={handleBuySubmit} id="myClaimBtn" className="mint-but3">Claim All</button>
        </div>
    )
}