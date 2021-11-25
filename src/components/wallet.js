import { useEthers } from '@usedapp/core'

export const Wallet = () => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const isConnected = account !== undefined

    const handleActiveSubmit = () => {
        activateBrowserWallet()
        const main = document.getElementById("main");


    const totalsupply = fetch('https://deep-index.moralis.io/api/v2/0xe4E8974FE1311C71ef326D95363068a87F942713?chain=rinkeby',
     {headers: {'X-API-Key': 'T7d37JqEbexjZRNh2S1uuDRmEvW6f7hmipNPyKrp6P4paJU6G35vuecqMHR0K21A'}})
    totalsupply.then((response) => {return response.json();}).then((total) => {const value = total.total; main.innerHTML = value;});


    }


    return (


        <div className="mintButton">
          {isConnected ? (
                    <button  className="button-14-copy" href="#header" style = {{color: "black", background: "white"}} onClick={deactivate}>
                        disconnect
                    </button>
                    ) : (
                        <button  className="button-14-copy" href="#header" style = {{color: "black", background: "white"}} onClick={handleActiveSubmit}>
                        connect
                        </button>
                    )
                }
        </div>
      )
}