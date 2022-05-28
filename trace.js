let cfData = async () => {
    let data = await fetch("https://neumatic.club/cdn-cgi/trace")
    data = await data.text()
    return parse_cf_data(data)
}

let parse_cf_data = (cfData) => {
    let cf = cfData.split('\n')
    let obj = {}
    for (let i = 0; i < cf.length; i++) {
        let line = cf[i].split('=')
        obj[line[0]] = line[1]
    }
    return obj
}

export default cfData
