/* global showDirectoryPicker */
export async function createFsStore() {
    if(!window.showDirectoryPicker) return;
    var dir = await window.showDirectoryPicker({ mode: "readwrite", startIn: "documents" });
    var { rawCookie, rawLs } = await createFSfileHandles(dir);
    var fileCookie = await rawCookie.getFile();
    var fileLs = await rawLs.getFile();
    window.stores = {
        cookie: JSON.parse(await fileCookie.text() || "{}"),
        ls: JSON.parse(await fileLs.text() || "{}")
    }
    window.addEventListener('storage', async (e) => {
        stores.ls = localStorage;
        stores.cookie = parseCookie();
        await save(rawCookie, rawLs);
    });
    setInterval(async () => {
        await save(rawCookie, rawLs);
    }, interval);
    window.addEventListener('beforeunload', async (event) => {
        await save(rawCookie, rawLs);
        event.preventDefault();
        return e.returnValue = "Are you sure you want to leave? Changes might not be saved (saving now)"
    })
}

function parseCookie() {
    return { data: document.cookie };
}

function writeStoreData() {
    window.stores.ls = window.localStorage;
    window.stores.cookie = parseCookie();
}

export async function manualSave() {
    if(window.stores) {
        writeStoreData();
        await save(rawCookie, rawLs);
    } else {
        var dir = await window.showDirectoryPicker({ mode: "readwrite", startIn: "documents" });
        var { rawCookie, rawLs } = await createFSfileHandles(dir);
        var fileCookie = await rawCookie.getFile();
        var fileLs = await rawLs.getFile();

        window.stores = {
            cookie: JSON.parse(await fileCookie.text() || "{}"),
            ls: JSON.parse(await fileLs.text() || "{}")
        };

        writeStoreData()
        await save(rawCookie, rawLs);
        delete window.stores;
    }
}

export async function restore() {
    if(!window.showDirectoryPicker) return;
    var dir = await window.showDirectoryPicker({ mode: "readwrite", startIn: "documents" });
    var { rawCookie, rawLs } = await createFSfileHandles(dir);
    var fileCookie = await rawCookie.getFile();
    var fileLs = await rawLs.getFile();
    window.stores = {
        cookie: JSON.parse(await fileCookie.text() || "{}"),
        ls: JSON.parse(await fileLs.text() || "{}")
    };



    for(const key in Object.keys(stores.ls)) {
        const value = stores.ls[key];
        console.log(key)
        console.log(value);
        // localStorage.setItem(key, value);
    };
    for(const key in Object.keys(stores.cookie)) {
        // const value = stores.cookie[key];
    };
}
async function save(c, l) {
    console.log('Saving...')
    // Create
    var writec = await c.createWritable();
    var writel = await l.createWritable();
    // Write
    await writec.write(JSON.stringify(window.stores.cookie));
    await writel.write(JSON.stringify(window.stores.ls));
    // Close
    await writec.close();
    await writel.close();
    console.log('Saved');
}

async function createFSfileHandles(dir) {
    var rawCookie = await dir.getFileHandle('sus_cookies.txt', { create: true });
    var rawLs = await dir.getFileHandle('sus_ls.txt', { create: true });
    return { rawCookie, rawLs };
}