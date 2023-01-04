window.createFsStore = async (opt) => {
    if(!showDirectoryPicker) return;
    var dir = await window.showDirectoryPicker({ mode: "readwrite", startIn: "documents" });
    var rawCookie = await dir.getFileHandle('sus_cookies.txt', { create: true });
    var rawLs = await dir.getFileHandle('sus_ls.txt', { create: true });
    var fileCookie = await rawCookie.getFile();
    var fileLs = await rawLs.getFile()
    window.stores = {
        cookie: JSON.parse(await fileCookie.text() || "{}"),
        ls: JSON.parse(await fileLs.text() || "{}")
    }
    async function save() {
        console.log('Saving...')
        // Create
        var writec = await rawCookie.createWritable();
        var writel = await rawLs.createWritable();
        // Write
        await writec.write(JSON.stringify(window.stores.cookie));
        await writel.write(JSON.stringify(window.stores.ls));
        // Close
        await writec.close();
        await writel.close();
        console.log('Saved')
    }
    if(opt?.onlySave) {
        await save();
        return;
    }
    if(opt?.restore) {
        for(const key in Object.keys(stores.ls)) {
            const value = stores.ls[key];
            localStorage.setItem(key, value);
        };
        for(const key in Object.keys(stores.cookie)) {
            const value = stores.cookie[key];
        }

    }
    window.addEventListener('storage', async (e) => {
        stores.ls = localStorage;
        stores.cookie = parseCookie();
        await save();
    });
    setInterval(async () => {
        await save();
    }, interval);
    window.addEventListener('beforeunload', async (event) => {
        await save();
        event.preventDefault();
        return e.returnValue = "Are you sure you want to leave? Changes might not be saved (saving now)"
    })
}

function parseCookie() {
    document.cookie;
}

function writeCookieFromObj(obj) {

}