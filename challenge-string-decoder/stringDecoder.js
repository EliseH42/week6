function decoder (code){
    let codeArr = [...code]
    let decodeArr = []

    //console.log(codeArr)

    let count = codeArr[0]
    count = Number(count)
    let decodedChar = count+1

    //console.log(codeArr[decodedChar])

    for(let i = 0;i<codeArr.length;i+count){
        decodeArr.push(codeArr[decodedChar])
        
        count = codeArr[decodedChar+1]
        
        decodedChar = count++
   }
   return decodeArr.join
}

decoder("0r")