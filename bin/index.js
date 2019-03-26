const fsExtra = require('fs-extra');
const dir = 'temp';
const dirPub = 'temp/pubs.json';
let nbrAppel = 1;
let contenuJson = [
    {
        "name": "Arawak",
        "owner": {
            "firstName": "Nicolas",
            "lastName": "Hodicq",
            "mail": "nhodicq@bewizyu.com"
        },
        "openDays": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "openHours": {
            "start": 10,
            "end": 1
        },
        "beers": [
            {
                "type": "Blonde",
                "name": "Triple Karmeliet"
            }
        ]
    },
    {
        "name": "autre",
        "owner": {
            "firstName": "Nicolas",
            "lastName": "Hodicq",
            "mail": "nhodicq@bewizyu.com"
        },
        "openDays": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "openHours": {
            "start": 10,
            "end": 1
        },
        "beers": [
            {
                "type": "Blonde",
                "name": "Triple Karmeliet"
            }
        ]
    }
];

async function AsyncAwaits(dossier, fichier, contenu) {
    
    try {
        const exists = await fsExtra.pathExists(dossier)
        if (exists) {
            await fsExtra.remove(dossier);
        }
        await fsExtra.ensureDir(dossier);
        await fsExtra.writeJson(fichier, contenu); console.log('success!');
        await wacher(fichier)
    } catch (err) {
        console.error(err);
    }
}

AsyncAwaits(dir, dirPub, contenuJson);

async function wacher(fichier) {
    console.log(fichier);
    fsExtra.watchFile(fichier, () => {
        console.log(`le ficher a été modifié ${nbrAppel++} fois`);
    });
}
