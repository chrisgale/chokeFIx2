import { useEthers } from '@usedapp/core'

export const Wallet = () => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const isConnected = account !== undefined

    const handleActiveSubmit = () => {
        activateBrowserWallet()
        const main = document.getElementById("main");


    const totalsupply = fetch('https://deep-index.moralis.io/api/v2/0x65419b412Fb36aC725463Ae58F95e84a078f39b8?chain=eth',
     {headers: {'X-API-Key': 'T7d37JqEbexjZRNh2S1uuDRmEvW6f7hmipNPyKrp6P4paJU6G35vuecqMHR0K21A'}})
    totalsupply.then((response) => {return response.json();}).then((total) => {const value = total.total; main.innerHTML = value;});


    }


    return (


        <div className="mintButton">
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