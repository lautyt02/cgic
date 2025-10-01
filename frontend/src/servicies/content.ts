
const getLogos=async ()=>{
    return fetch("/src/data/logos.json").then((resp)=>{
            return resp.json()
        }).catch((err)=>{
            console.log("Ocurrio el siguioente error: "+err)
        })
}
const getHubData = async ()=>{
    console.log("getHubData")
    return fetch("/src/data/hub-data.json").then((resp)=>{
            console.log(resp)
            return resp.json()
        }).catch((err)=>{
            console.log("Ocurrio el siguioente error: "+err)
        })
}
export {getLogos, getHubData}