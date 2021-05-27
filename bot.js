require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

const BOT_PREFIX = "!"
const ROLE_COMMAND = "role"
const REMOVE_ROLE_COMMAND = "removerole"

client.on('ready', () => {
    console.log('Pop!')
})

client.on('message', msg => {
    if (msg.content === "Thankyou") {
        msg.react("❤️")
        msg.reply("<a:Heart:802488003498082305>")
    }

    if (msg.content === "thankyou") {
        msg.react("❤️")
        msg.reply("<a:Heart:802488003498082305>")
    }

    if (msg.content === "Thank you") {
        msg.react("❤️")
        msg.reply("<a:Heart:802488003498082305>")
    }

    if (msg.content === "thank you") {
        msg.react("❤️")
        msg.reply("<a:Heart:802488003498082305>")
    }

    if (msg.content === "thanks") {
        msg.react("❤️")
        msg.reply("<a:Heart:802488003498082305>")
    }

    if (msg.content === "Thanks") {
        msg.react("❤️")
        msg.reply("<a:Heart:802488003498082305>")
    }

    if (msg.content === `${BOT_PREFIX}leaks`) {
        msg.reply("<#704762722121678938>")
    }

    if (msg.content === `${BOT_PREFIX}updates`) {
        msg.reply("<#696406631893827584>")
    }

    if (msg.content === `${BOT_PREFIX}aio`) {
        msg.reply("<#718369576789737552>")
    }

    if (msg.content === `${BOT_PREFIX}ancient`) {
        msg.reply("<#696414795477418004>")
    }

    if (msg.content === `${BOT_PREFIX}bis`) {
        msg.reply("<#717241606604062790>")
    }

    if (msg.content === `${BOT_PREFIX}commander`) {
        msg.reply("<#809142424131338301>")
    }

    if (msg.content === `${BOT_PREFIX}hyperstat`) {
        msg.reply("<#720575896788140053>")
    }

    if (msg.content === `${BOT_PREFIX}emblem`) {
        msg.reply("<#721116223118639104>")
    }

    if (msg.content === `${BOT_PREFIX}fever`) {
        msg.reply("<#815869884382707732>")
    }

    if (msg.content === `${BOT_PREFIX}5thjob`) {
        msg.reply("<#847033792651984907>")
    }

    if (msg.content === `${BOT_PREFIX}flame`) {
        msg.reply("<#718368711828045825>")
    }

    if (msg.content === `${BOT_PREFIX}legion`) {
        msg.reply("<#839302625064386580>")
    }

    if (msg.content === `${BOT_PREFIX}links`) {
        msg.reply("<#720188141272825929>")
    }

    if (msg.content === `${BOT_PREFIX}pets`) {
        msg.reply("<#723962465473265714>")
    }

    if (msg.content === `${BOT_PREFIX}statcap`) {
        msg.reply("<#718369146773176350>")
    }

    if (msg.content === `${BOT_PREFIX}potential`) {
        msg.reply("<#718366473722134549>")
    }

    if (msg.content === `${BOT_PREFIX}ra`) {
        msg.reply("<#718369419792744508>")
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} darkknight`) {
        roleUserDarkKnight(msg.member)
    }

     if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} hero`) {
        roleUserHero(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} paladin`) {
        roleUserPaladin(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} bowmaster`) {
        roleUserBowMaster(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} marksman`) {
        roleUserMarksman(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} pathfinder`) {
        roleUserPathFinder(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} bishop`) {
        roleUserBishop(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} icelightning`) {
        roleUserIceLightning(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} firepoison`) {
        roleUserFirePoison(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} nightlord`) {
        roleUserNightLord(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} shadower`) {
        roleUserShadower(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} dualblade`) {
        roleUserDualBlade(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} corsair`) {
        roleUserCorsair(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} buccaneer`) {
        roleUserBuccaneer(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} cannoneer`) {
        roleUserCannoneer(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} dawnwarrior`) {
        roleUserDawnWarrior(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} windarcher`) {
        roleUserWindArcher(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} blazewizard`) {
        roleUserBlazeWizard(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} nightwalker`) {
        roleUserNightWalker(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} thunderbreaker`) {
        roleUserThunderBreaker(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} aran`) {
        roleUserAran(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} mercedes`) {
        roleUserMercedes(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} evan`) {
        roleUserEvan(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} luminous`) {
        roleUserLuminous(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} phantom`) {
        roleUserPhantom(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} shade`) {
        roleUserShade(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} blaster`) {
        roleUserBlaster(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} wildhunter`) {
        roleUserWildHunter(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} battlemage`) {
        roleUserBattleMage(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} xenon`) {
        roleUserXenon(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} mechanic`) {
        roleUserMechanic(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} demonslayer`) {
        roleUserDemonSlayer(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} demonavenger`) {
        roleUserDemonAvenger(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} kaiser`) {
        roleUserKaiser(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} angelicbuster`) {
        roleUserAngelicBuster(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND} secret`) {
        roleUserAll(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} darkknight`) {
        removeroleUserDarkKnight(msg.member)
    }

     if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} hero`) {
        removeroleUserHero(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} paladin`) {
        removeroleUserPaladin(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} bowmaster`) {
        removeroleUserBowMaster(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} marksman`) {
        removeroleUserMarksman(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} pathfinder`) {
        removeroleUserPathFinder(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} bishop`) {
        removeroleUserBishop(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} icelightning`) {
        removeroleUserIceLightning(msg.member)
    }
    
    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} firepoison`) {
        removeroleUserFirePoison(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} nightlord`) {
        removeroleUserNightLord(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} shadower`) {
        removeroleUserShadower(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} dualblade`) {
        removeroleUserDualBlade(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} corsair`) {
        removeroleUserCorsair(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} buccaneer`) {
        removeroleUserBuccaneer(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} cannoneer`) {
        removeroleUserCannoneer(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} dawnwarrior`) {
        removeroleUserDawnWarrior(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} windarcher`) {
        removeroleUserWindArcher(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} blazewizard`) {
        removeroleUserBlazeWizard(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} nightwalker`) {
        removeroleUserNightWalker(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} thunderbreaker`) {
        removeroleUserThunderBreaker(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} aran`) {
        removeroleUserAran(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} mercedes`) {
        removeroleUserMercedes(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} evan`) {
        removeroleUserEvan(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} luminous`) {
        removeroleUserLuminous(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} phantom`) {
        removeroleUserPhantom(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} shade`) {
        removeroleUserShade(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} blaster`) {
        removeroleUserBlaster(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} wildhunter`) {
        removeroleUserWildHunter(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} battlemage`) {
        removeroleUserBattleMage(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} xenon`) {
        removeroleUserXenon(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} mechanic`) {
        removeroleUserMechanic(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} demonslayer`) {
        removeroleUserDemonSlayer(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} demonavenger`) {
        removeroleUserDemonAvenger(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} kaiser`) {
        removeroleUserKaiser(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} angelicbuster`) {
        removeroleUserAngelicBuster(msg.member)
    }

    if (msg.content === `${BOT_PREFIX}${REMOVE_ROLE_COMMAND} secret`) {
        removeroleUserAll(msg.member)
    }
})

function roleUserDarkKnight(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397706712711179")
}

function roleUserHero(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397714887540836")
}

function roleUserPaladin(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397715541852210")
}

function roleUserBowMaster(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397711162736652")
}

function roleUserMarksman(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397716502347866")
}

function roleUserPathFinder(member) {
    member.roles.add("696407810279211039")
    member.roles.add("828492063888375879")
}

function roleUserBishop(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397713868193857")
}

function roleUserIceLightning(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397716552679446")
}

function roleUserFirePoison(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397717521301585")
}

function roleUserNightLord(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397718150578207")
}

function roleUserShadower(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397718884450325")
}

function roleUserDualBlade(member) {
    member.roles.add("696407810279211039")
    member.roles.add("828492065054392331")
}

function roleUserCorsair(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397723313897493")
}

function roleUserBuccaneer(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397723800174602")
}

function roleUserCannoneer(member) {
    member.roles.add("696407810279211039")
    member.roles.add("828492066040315944")
}

function roleUserDawnWarrior(member) {
    member.roles.add("696407811139174400")
    member.roles.add("696407799168761916")
}

function roleUserWindArcher(member) {
    member.roles.add("696407811139174400")
    member.roles.add("696407802628800554")
}

function roleUserBlazeWizard(member) {
    member.roles.add("696407811139174400")
    member.roles.add("696407804625420358")
}

function roleUserNightWalker(member) {
    member.roles.add("696407811139174400")
    member.roles.add("696407809104936970")
}

function roleUserThunderBreaker(member) {
    member.roles.add("696407811139174400")
    member.roles.add("696407809671299164")
}

function roleUserAran(member) {
    member.roles.add("696407811831234600")
    member.roles.add("696407816323334186")
}

function roleUserMercedes(member) {
    member.roles.add("696407811831234600")
    member.roles.add("696407817091022979")
}

function roleUserEvan(member) {
    member.roles.add("696407811831234600")
    member.roles.add("696408093159850054")
}

function roleUserLuminous(member) {
    member.roles.add("696407811831234600")
    member.roles.add("696408093646520331")
}

function roleUserPhantom(member) {
    member.roles.add("696407811831234600")
    member.roles.add("696408094594564167")
}

function roleUserShade(member) {
    member.roles.add("696407811831234600")
    member.roles.add("696408673643266118")
}

function roleUserBlaster(member) {
    member.roles.add("696408674209497138")
    member.roles.add("846671257431965726")
}

function roleUserWildHunter(member) {
    member.roles.add("696408674209497138")
    member.roles.add("696408675903995925")
}

function roleUserBattleMage(member) {
    member.roles.add("696408674209497138")
    member.roles.add("696408677132927046")
}

function roleUserXenon(member) {
    member.roles.add("696408674209497138")
    member.roles.add("696408677707677767")
}

function roleUserMechanic(member) {
    member.roles.add("696408674209497138")
    member.roles.add("696408678269714442")
}

function roleUserDemonSlayer(member) {
    member.roles.add("839475408839901184")
    member.roles.add("696408675006545990")
}

function roleUserDemonAvenger(member) {
    member.roles.add("839475408839901184")
    member.roles.add("696408675572645980")
}

function roleUserKaiser(member) {
    member.roles.add("828492059747942440")
    member.roles.add("828492063528058920")
}

function roleUserAngelicBuster(member) {
    member.roles.add("828492059747942440")
    member.roles.add("828492064844808212")
}

function roleUserAll(member) {
    member.roles.add("696407810279211039")
    member.roles.add("696397706712711179")
    member.roles.add("696397714887540836")
    member.roles.add("696397715541852210")
    member.roles.add("696397711162736652")
    member.roles.add("696397716502347866")
    member.roles.add("828492063888375879")
    member.roles.add("696397713868193857")
    member.roles.add("696397716552679446")
    member.roles.add("696397717521301585")
    member.roles.add("696397718150578207")
    member.roles.add("696397718884450325")
    member.roles.add("828492065054392331")
    member.roles.add("696397723313897493")
    member.roles.add("696397723800174602")
    member.roles.add("828492066040315944")
    member.roles.add("696407811139174400")
    member.roles.add("696407799168761916")
    member.roles.add("696407802628800554")
    member.roles.add("696407804625420358")
    member.roles.add("696407809104936970")
    member.roles.add("696407809671299164")
    member.roles.add("696407811831234600")
    member.roles.add("696407816323334186")
    member.roles.add("696407817091022979")
    member.roles.add("696408093159850054")
    member.roles.add("696408093646520331")
    member.roles.add("696408094594564167")
    member.roles.add("696408673643266118")
    member.roles.add("696408674209497138")
    member.roles.add("846671257431965726")
    member.roles.add("696408675903995925")
    member.roles.add("696408677132927046")
    member.roles.add("696408677707677767")
    member.roles.add("696408678269714442")
    member.roles.add("839475408839901184")
    member.roles.add("696408675006545990")
    member.roles.add("696408675572645980")
    member.roles.add("828492059747942440")
    member.roles.add("828492063528058920")
    member.roles.add("828492064844808212")
}

function removeroleUserDarkKnight(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397706712711179")
}

function removeroleUserHero(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397714887540836")
}

function removeroleUserPaladin(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397715541852210")
}

function removeroleUserBowMaster(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397711162736652")
}

function removeroleUserMarksman(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397716502347866")
}

function removeroleUserPathFinder(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("828492063888375879")
}

function removeroleUserBishop(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397713868193857")
}

function removeroleUserIceLightning(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397716552679446")
}

function removeroleUserFirePoison(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397717521301585")
}

function removeroleUserNightLord(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397718150578207")
}

function removeroleUserShadower(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397718884450325")
}

function removeroleUserDualBlade(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("828492065054392331")
}

function removeroleUserCorsair(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397723313897493")
}

function removeroleUserBuccaneer(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397723800174602")
}

function removeroleUserCannoneer(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("828492066040315944")
}

function removeroleUserDawnWarrior(member) {
    member.roles.remove("696407811139174400")
    member.roles.remove("696407799168761916")
}

function removeroleUserWindArcher(member) {
    member.roles.remove("696407811139174400")
    member.roles.remove("696407802628800554")
}

function removeroleUserBlazeWizard(member) {
    member.roles.remove("696407811139174400")
    member.roles.remove("696407804625420358")
}

function removeroleUserNightWalker(member) {
    member.roles.remove("696407811139174400")
    member.roles.remove("696407809104936970")
}

function removeroleUserThunderBreaker(member) {
    member.roles.remove("696407811139174400")
    member.roles.remove("696407809671299164")
}

function removeroleUserAran(member) {
    member.roles.remove("696407811831234600")
    member.roles.remove("696407816323334186")
}

function removeroleUserMercedes(member) {
    member.roles.remove("696407811831234600")
    member.roles.remove("696407817091022979")
}

function removeroleUserEvan(member) {
    member.roles.remove("696407811831234600")
    member.roles.remove("696408093159850054")
}

function removeroleUserLuminous(member) {
    member.roles.remove("696407811831234600")
    member.roles.remove("696408093646520331")
}

function removeroleUserPhantom(member) {
    member.roles.remove("696407811831234600")
    member.roles.remove("696408094594564167")
}

function removeroleUserShade(member) {
    member.roles.remove("696407811831234600")
    member.roles.remove("696408673643266118")
}

function removeroleUserBlaster(member) {
    member.roles.remove("696408674209497138")
    member.roles.remove("846671257431965726")
}

function removeroleUserWildHunter(member) {
    member.roles.remove("696408674209497138")
    member.roles.remove("696408675903995925")
}

function removeroleUserBattleMage(member) {
    member.roles.remove("696408674209497138")
    member.roles.remove("696408677132927046")
}

function removeroleUserXenon(member) {
    member.roles.remove("696408674209497138")
    member.roles.remove("696408677707677767")
}

function removeroleUserMechanic(member) {
    member.roles.remove("696408674209497138")
    member.roles.remove("696408678269714442")
}

function removeroleUserDemonSlayer(member) {
    member.roles.remove("839475408839901184")
    member.roles.remove("696408675006545990")
}

function removeroleUserDemonAvenger(member) {
    member.roles.remove("839475408839901184")
    member.roles.remove("696408675572645980")
}

function removeroleUserKaiser(member) {
    member.roles.remove("828492059747942440")
    member.roles.remove("828492063528058920")
}

function removeroleUserAngelicBuster(member) {
    member.roles.remove("828492059747942440")
    member.roles.remove("828492064844808212")
}

function removeroleUserAll(member) {
    member.roles.remove("696407810279211039")
    member.roles.remove("696397706712711179")
    member.roles.remove("696397714887540836")
    member.roles.remove("696397715541852210")
    member.roles.remove("696397711162736652")
    member.roles.remove("696397716502347866")
    member.roles.remove("828492063888375879")
    member.roles.remove("696397713868193857")
    member.roles.remove("696397716552679446")
    member.roles.remove("696397717521301585")
    member.roles.remove("696397718150578207")
    member.roles.remove("696397718884450325")
    member.roles.remove("828492065054392331")
    member.roles.remove("696397723313897493")
    member.roles.remove("696397723800174602")
    member.roles.remove("828492066040315944")
    member.roles.remove("696407811139174400")
    member.roles.remove("696407799168761916")
    member.roles.remove("696407802628800554")
    member.roles.remove("696407804625420358")
    member.roles.remove("696407809104936970")
    member.roles.remove("696407809671299164")
    member.roles.remove("696407811831234600")
    member.roles.remove("696407816323334186")
    member.roles.remove("696407817091022979")
    member.roles.remove("696408093159850054")
    member.roles.remove("696408093646520331")
    member.roles.remove("696408094594564167")
    member.roles.remove("696408673643266118")
    member.roles.remove("696408674209497138")
    member.roles.remove("846671257431965726")
    member.roles.remove("696408675903995925")
    member.roles.remove("696408677132927046")
    member.roles.remove("696408677707677767")
    member.roles.remove("696408678269714442")
    member.roles.remove("839475408839901184")
    member.roles.remove("696408675006545990")
    member.roles.remove("696408675572645980")
    member.roles.remove("828492059747942440")
    member.roles.remove("828492063528058920")
    member.roles.remove("828492064844808212")
}
client.login(process.env.Balloon)