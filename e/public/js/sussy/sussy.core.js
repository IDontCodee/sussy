class __sussy$ {}
__sussy$.config = new sussyConfig()

__sussy$.loadGC = () => {
    window.open(__sussy$.config.GCURI, '_blank')
}

__sussy$.loadDC = () => {
    __sussy$.getURIconfig()
    .then(json => window.open(json.DCURI, '_blank'))
}

__sussy$.getURIconfig = async() => {
    const res = await fetch('/URIconfig')
    const json = await res.json()
    var returned = {}
    returned.DCURI = json.DC
    returned.WDURI = json.WD
    return returned
}