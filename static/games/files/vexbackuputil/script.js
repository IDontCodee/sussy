window.vexVersions = [
    { version: 3, sg_name: 'v3:sg', hs_name: 'v3:h' },
    { version: 4, sg_name: 'v4:sg', hs_name: 'v4:h' },
    { version: 5, sg_name: 'vex5_v3:sg', hs_name: 'vex5_v3:h' },
    { version: 6, sg_name: 'vex6_sg', hs_name: 'vex6_h' }
]

// const versionobj = window.vexVersions.find(element => element.version == e);

const vexSaveCode = {
    save: (version_number) => {
        try {
            const versionobj = window.vexVersions.find(element => element.version == version_number)
            console.log(versionobj)
            const saveobj = { save: JSON.parse(localStorage.getItem(versionobj.sg_name)), hs: JSON.parse(localStorage.getItem(versionobj.hs_name)), version: version_number }
            console.log(saveobj)
            const result = btoa(JSON.stringify(saveobj))
            console.log(`Completed: ${result}`)
            alert(`Below is your save code (triple click it to select):\n\n\n${result}`)
        } catch (err) {
            console.warn('Something went wrong:')
            console.error(err)
            alert('Something went wrong')
        }
    },
    load: (version_number, code) => {
        try {
            const versionobj = window.vexVersions.find(element => element.version == version_number);
            const saveobj = JSON.parse(atob(code))
            if (version_number == saveobj.version) {
                localStorage.setItem(versionobj.sg_name, JSON.stringify(saveobj.save))
                localStorage.setItem(versionobj.hs_name, JSON.stringify(saveobj.hs))
                console.log(saveobj)
                alert('Done!')
            } else {
                alert(`Cannot load a save code made in Vex ${saveobj.version} on Vex ${version_number}!`)
            }
        } catch (err) {
            console.warn('Something went wrong:')
            console.error(err)
            alert('Something went wrong - did you input a valid save code?')
        }
    },
    getVersion: () => {
        return window.location.hash.slice(1)
    }
}

document.getElementById('version').innerText = vexSaveCode.getVersion()