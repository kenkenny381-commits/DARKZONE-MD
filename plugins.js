module.exports = async (sock, m, command, args, from, isGroup, isAdmin, isBotAdmin, isOwner) => {
    if (command!== 'menu' && command!== 'help') return

    const prefix = process.env.PREFIX || '.'
    const os = require('os')

    // Get RAM usage
    let total = os.totalmem()
    let free = os.freem()
    let used = total - free
    let percent = Math.round((used / total) * 100)
    let bars = Math.round(percent / 10)
    let bar = '█'.repeat(bars) + '░'.repeat(10 - bars)
    let usedGB = (used / 1024 / 1024 / 1024).toFixed(2)
    let totalGB = (total / 1024 / 1024 / 1024).toFixed(2)

    // Count commands
    const fs = require('fs')
    let totalCmds = fs.readdirSync('./plugins').filter(f => f.endsWith('.js')).length

    // Runtime formatter
    function runtime(seconds) {
        seconds = Number(seconds)
        let d = Math.floor(seconds / 86400)
        let h = Math.floor(seconds % 86400 / 3600)
        let m = Math.floor(seconds % 3600 / 60)
        let s = Math.floor(seconds % 60)
        return `${d}d ${h}h ${m}m ${s}s`
    }

    // Update menuPart1 with live data
    const menuPart1 = `
┏━━─『 SHENKS ULTRAVIOLET MD 』─━━
┃ » Bot Name: SHENKS ULTRAVIOLET MD
┃ » Owner: shenks kenny
┃ » Owner Contact: 254726227630
┃ » Prefix: [ ${prefix} ]
┃ » Host: Heroku
┃ » Mode: ${process.env.MODE || 'public'}
┃ » Version: v1.4.9
┃ » Speed: ${process.uptime() < 60? Math.round(process.uptime() * 1000) + 'ms' : '100000ms'}
┃ » Uptime: ${runtime(process.uptime())}
┃ » RAM: ${bar} ${percent}% [${usedGB}GB/${totalGB}GB]
┃ » Total Commands: ${totalCmds}
┗━━━━━━━━━━━━━━━─···
`

    const menuFooter = `
┏━━━━━━━━━━━━
┃ Powered by Shenks Ultraviolet MD
┃ Type ${prefix}menu 2 or 3 for more
┗━━━━━━━━━━━━
`

    if (args[0] === '2') {
        return sock.sendMessage(from, {
            text: `*Part 2/3*\n${global.menuPart2}`
        }, { quoted: m })
    }

    if (args[0] === '3') {
        return sock.sendMessage(from, {
            text: `*Part 3/3*\n${global.menuPart2}`
        }, { quoted: m })
    }

    // Part 1
    await sock.sendMessage(from, {
        text: menuPart1 + '\n*Part 1/3*\n' + global.menuPart2 + menuFooter
    }, { quoted: m })
}
