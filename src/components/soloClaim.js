import {CONTRACT_ADDRESS, CONTRACT_ABI} from "../config.js";
import Web3 from "web3"
import { useEthers } from '@usedapp/core'
import { Button, Container, Row, Col, Table } from 'react-bootstrap';



export const SoloClaim = ({CreationTime}) => {

    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    const {account} = useEthers()



    const handleClaimSubmit = async () => {
        contract.setProvider(web3.givenProvider)

        if (account){
            return contract.methods.cashoutReward(CreationTime).send({from: account})
        } else {
            alert("not connected")
        }
    }

    return (
        <div>
            <Button variant="primary" className='claim-node' onClick={handleClaimSubmit}>{'Claim'}</Button>
        </div>
    )
}