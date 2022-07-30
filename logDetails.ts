//type alias
type uid = number | string

function logDetails(uid:number | string,item: string){
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: number| string, user: string){
    console.log(`An user with ${uid} has a name as ${user}.`)
}

type platform = "windows" | "linux" | "ios"

function renderPlatform(platform:platform){
    return platform
}

renderPlatform('ios')

logDetails(123, 'sapato')
logDetails('123', 'sapato')

logInfo(123, "willian")
logInfo('123', 'willian')