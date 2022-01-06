import { useEthers } from '@usedapp/core'
import React from "react"

import "../button.css";



export var items = []

export const Wallet = () => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const isConnected = account !== undefined

    const handleActiveSubmit = async () => {
        activateBrowserWallet()
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