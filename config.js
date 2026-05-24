const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "DARKZONE-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/ERFAN-Md/DARKZONE-MD/forkhttps://github.com/ERFAN-Md/DARKZONE-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923306137477",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "𝐸𝑅𝐹𝒜𝒩 𝒜𝐻𝑀𝒜𝒟",           // Owner's name
    DEV: process.env.DEV || "923306137477",                     // Developer's contact number
    DEVELOPER_NUMBER: '923306137477@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*DARKZONE-MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 THIS PERSON NOT ALLOWED CALL*",
    // ===== REACTION & STICKER SETTINGS =====
    ANTI_CALL: process.env.ANTI_CALL || "true",
    AUTO_DOWNLOADER: process.env.AUTO_DOWNLOADER || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "𝐸𝑅𝐹𝒜𝒩 𝒜𝐻𝑀𝒜𝒟",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://i.ibb.co/Sw4pzTWC/IMG-20260124-WA0728.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© CREATER 𝐸𝑅𝐹𝒜𝒩 𝒜𝐻𝑀𝒜𝒟*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public command?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity
    Add footer powerd by shenks ultraviolet md
and all this commands
const menuPart2 = `
┏━━〔 GENERAL-CMD 〕━━━━━━━━━━━━┓
┃ alive        apk          attp         botstatus   
┃ crop         fancy        getjid       getpp       
┃ getsettings  github       google       groupinfo   
┃ groupstats   image        list         menu        
┃ movie        myactivity   owner        pair        
┃ ping         ping2        qr           s           
┃ simage       ssweb        sticker      take        
┃ telegramsticker time      transcribe   tts         
┃ uptime       write        getsw        ssdesktop   
┃ define       remind       sessioninfo  genmusic    
┃ genlyrics    musicprompt  news         covid       
┃ weather      wiki         translate    iplookup    
┃ getip        getgpp       getdesc      listadmins  
┃ prefixinfo   platform     onwhatsapp   country     
┃ shorturl     url          fetch        qrencode    
┃ imgbb        tgsticker    save         screenshot  
┃ inspect      toimage      tosticker    toaudio     
┃ tovoice      trebleboost  jarvis       topdf       
┃ extractpdf   toword       extractword  toexcel     
┃ extractexcel toppt        extractppt   vcf         
┃ viewvcf      vv           vv2                      
┗━━━━━━━━━━━━━━━┛

┏━━〔 AI-CMD 〕━━━━━━━━━┓
┃ ai           claude       codegen      deepseek    
┃ dream        gemini       gpt          gptimage    
┃ grok         meta         mistral      nemotron    
┃ perplexity   speechwriter text2img     vision      
┃ chatgpt      cohere       copilot      bing        
┃ bard         claudeai     groq         blackbox    
┃ falcon       wizard       vicuna       zephyr      
┃ mixtral      dolphin      phi          nous        
┃ openchat     orca         codellama    solar       
┃ starcoder    yi           internlm     chatglm     
┃ neural       openhermes   command      tinyllama   
┃ replitai     imagine      imagegen     flux        
┃ analyze      suno         humanizer    summarize   
┃ totext       removebg     enlarger     erase       
┃ videogen     aiscanner    aimenu       brandlogo   
┃ companylogo  logoai       qwenai       ilama       
┃ venice       wormgpt      chatbot                  
┗━━━━━━━━━┛

┏━━〔 GROUP-CMD 〕━━━━━━━━━━━━━━┓
┃ add          all          approve      clean       
┃ creategroup  demote       demoteall    disp        
┃ getgroupdesc getgroupprofile goodbye     grouplink   
┃ hidetag      join         kick         kickall     
┃ kickactive   kickinactive leave        listoffline 
┃ listonline   mute         promote      promoteall  
┃ reject       resetwarn    setgoodbye   setgroupprofile
┃ setwelcome   staff        tagall       unmute      
┃ warn         welcome      tosgroup     fetchgroup  
┃ bangroup     ex           clearbanlist setwarn     
┃ warnings     gctime       antileave    addbadword  
┃ removebadword listbadword joinapproval onlyadmins  
┃ link         invite       revoke       setdesc     
┃ fangtrace    getgpp       togstatus    getparticipants
┃ listinactive approveall   rejectall    stickerpack 
┃ tagadmin     ban          unban                    
┗━━━━━━━━━┛

┏━━〔 ANTI-CMD 〕━━━━━━━━━━━━━━━┓
┃ antiall      antiaudio    antibadword  antibot     
┃ antidelete   antidemote   antiedit     antiforeign 
┃ antigroupmention antiimage    antikickall  antilink    
┃ antipromote  antispam     antisticker  antitag     
┃ antitagadmins antivideo    antiviewonce   antiven   
┃ anticall     antimention  antiforward    antistatusmention
┃ antigrouplink antigroupcall  antiaddadmin           
┃ antileft     antisticker  antivideo    antipin     
┃ antityping   antivoicerecord antigroupcall antiremove
┃ antixxvideos antibugbots  antirepo     antibotcommand
┗━━━━━━━━━┛

*Part 2/3*
┏━━〔 ADMIN-CMD 〕━━━━━━━━━━━━━━┓
┃ autosticker  chatbot      vcf                        
┗━━━━━━━━━┛

┏━━〔 OWNER-CMD 〕━━━━━━━━━━━━━━┓
┃ addsudo      alwaysonline anticall     autoreact   
┃ autoread     autorecording autorecordtype autostatusview
┃ autotyping   block        broadcast    cat         
┃ delete       delpp        getsession   groupstatus 
┃ mode         mygroups     newsletter   readreceipts
┃ removesudo   restart      savestatus   setbotname  
┃ setbotpp     setfont      setmenu      setmenuimage
┃ setnewsletter setownername setownernumber setprefix   
┃ setprofile   settimezone  shell        start       
┃ sudolist     tostatus     unblock      viewonce    
┃ hijack       hjack        ban          unban        
┃ botname      removemainadmin autostatuscomment autostatuslike  
┃ setowner     resetowner   iamowner     about       
┃ blockdetect  blockall     unblockall   silent      
┃ setpp        setfooter    repo         antideletestatus
┃ shutdown     setchannel   resetchannel workingreload
┃ reloadenv    setsetting   test         disk        
┃ hostip       findcommands latestupdates deploy     
┃ debugchat    online       privacy      receipt     
┃ profilepic   viewer       lastseen     resetbotname
┃ prefix       setchannel   resetchannel             
┗━━━━━━━━━┛

┏━━〔 SUDO-CMD 〕━━━━━━━━━━━━━━┓
┃ delsudo      listsudo     getsudo      checksudo   
┃ clearsudo    sudomode     sudoinfo     mysudo      
┃ sudodebug    linksudo                                 
┗━━━━━━━━━┛

┏━━〔 AUTOMATION-CMD 〕━━━━━━━━━┓
┃ autoread     autotyping   autorecording autorecordtyping
┃ autoreact    autoreactstatus autoviewstatus autobio
┃ autorec      reactowner                                  
┗━━━━━━━━━┛

┏━━〔 MEDIA-CMD 〕━━━━━━━━━━━━━━┓
┃ facebook     fb           igs          igsc        
┃ instagram    gram         lyrics       pinterest   
┃ ptv          shazam       song         mp3         
┃ spotify      tiktok       trim         ytvideo     
┃ yt           play         video        videodoc    
┃ tiktok       twitter      videodl      playlist    
┃ xvideos      xnxx         mediafire    snapchat    
┗━━━━━━━━━┛

┏━━〔 SPORTS-CMD 〕━━━━━━━━━━━━━┓
┃ bet          bundesliga   bundesligamatches bundesligascorers
┃ bundesligastandings bundesligaupcoming epl          eplmatches   
┃ eplscorers   eplstandings eplupcoming   euros       
┃ eurosmatches eurosscorers eurosstandings eurosupcoming
┃ fifa         fifamatches  fifascorers   fifastandings
┃ fifaupcoming footballnews gameevents   laliga      
┃ laligamatches laligascorers laligastandings laligaupcoming
┃ ligue1       ligue1matches ligue1scorers ligue1standings
┃ ligue1upcoming livescore    livescore2   player      
┃ seriea       serieamatches serieascorers serieastandings
┃ serieaupcoming sportslist   team         ucl         
┃ uclmatches   uclscorers   uclstandings  uclupcoming 
┃ venue        football     matchstats    sportsnews  
┃ teamnews     basketball   cricket       f1          
┃ nfl          mma          tennis        baseball    
┃ hockey       golf         sportsmenu              
┗━━━━━━━━━┛

┏━━〔 FUN-CMD 〕━━━━━━━━┓
┃ bomb         compliment dare         fact        
┃ flirt        gayrate    insult       joke        
┃ meme         memesearch nhie         paranoia    
┃ pickupline   pies       question     ship        
┃ tictactoe    truth      wyr          coinflip    
┃ dice         emojimix   quiz         rps         
┃ snake        tetris     truthdetector quote      
┗━━━━━━━━━┛

┏━━〔 UTILITY-CMD 〕━━━━━━━━━━━━┓
┃ calc         tourl        translate    wame        
┃ weather      save                                   
┗━━━━━━━━━┛

*Part 3/3*
┏━━〔 ANIME-CMD 〕━━━━━━━━━━━━━━┓
┃ hneko        hwaifu       konachan     loli        
┃ megumin      milf         neko         random      
┃ waifu        awoo         bully        cringe      
┃ cry          cuddle       dance        glomp       
┃ highfive     hug          kill         kiss        
┃ lick         shinobu      trap         trap2       
┃ wink         yeet         animemenu    pat         
┗━━━━━━━━━┛

┏━━〔 TEXTMAKER-CMD 〕━━━━━━━━━━┓
┃ advancedglow blackpinklogo blackpinkstyle cartoonstyle 
┃ deadpool     dragonball   effectclouds flag3dtext  
┃ flagtext     freecreate   galaxystyle  galaxywallpaper
┃ glitchtext   luxurygold   makingneon   matrixfx    
┃ multicoloredneon neonglitch   papercutstyle pixelglitc   
┃ royaltext    sandfx       summerbeach  topography  
┃ typography    neon        colorfulglow neononline 
┃ blueneon      neontext    neonlight    greenneon   
┃ greenlightneon blueneonlogo galaxyneon retroneon  
┃ multicolorneon hackerneon devilwings   glowtext   
┃ blackpinkneon neonglitch   colorfulneonlight wooden3d
┃ cubic3d       wooden3donline water3d    cuongthi3d
┃ text3d        graffiti3d   silver3d     style3d   
┃ metal3d       ruby3d       birthday3d   metallogo3d
┃ pig3d         avengers3d   hologram3d   gradient3d
┃ stone3d       space3d      sand3d       gradienttext3d
┃ lightbulb3d   snow3d       papercut3d   underwater3d
┃ shinymetallic3d gradientstyle3d beach3d crack3d 
┃ wood3d        americanflag3d christmas3d nigeriaflag3d
┃ christmassnow3d goldenchristmas3d decorativemetal3d
┃ colorfulpaint3d glossysilver3d balloon3d comic3d 
┗━━━━━━━━━┛

┏━━〔 REACTION-CMD 〕━━━━━━━━━━━┓
┃ angry        bite         blush        boop        
┃ bored        bully        clap         comfort     
┃ confused     cuddle       cry          dance       
┃ embarrassed  excited      facepalm     fear        
┃ feed         glomp        handhold     happy       
┃ highfive     hug          kill         kicked      
┃ kiss         laugh        lick         love        
┃ nervous      nom          pat          peace       
┃ point        poke         pout         punch       
┃ scream       shrug        shy          sip         
┃ slap         sleep        smile        spank       
┃ stab         stare        surprised    thinking    
┃ throw        tickle       tired        victory     
┃ wave         wink         yeet                                    
┗━━━━━━━━━┛

┏━━〔 RELIGION-CMD 〕━━━━━━━━━━━┓
┃ bible                                                     
┗━━━━━━━━━┛

┏━━〔 SEARCH-CMD 〕━━━━━━━━━━━━━┓
┃ ytsearch     yts          ytplay       ytmp3       
┃ ytv          ytmp4        ytvdoc                    
┗━━━━━━━━━┛

┏━━〔 TOOLS-CMD 〕━━━━━━━━━━━━━━┓
┃ bass         biblelist    blown        chipmunk    
┃ copilot      deep         earrape      echo        
┃ encrypt      fast         fetch        getdevice   
┃ gitclone     instrumental karaoke      llama       
┃ nightcore    ocr          q            quran       
┃ reverse      robot        shorturl     slow        
┃ toptt        treble       vocalremove  volaudio    
┃ whois        dnslookup    subdomain    reverseip   
┃ geoip        portscan     headers      traceroute  
┃ asnlookup    shodan       pinghost     latency     
┃ sslcheck     tlsinfo      openports    firewallcheck
┃ maclookup    bandwidthtest securityheaders wafdetect
┃ robotscheck  sitemap      cmsdetect    techstack   
┃ cookiescan   redirectcheck xsscheck     sqlicheck   
┃ csrfcheck    clickjackcheck directoryscan exposedfiles
┃ misconfigcheck cvecheck   hashidentify hashcheck  
┃ bcryptcheck  passwordstrength leakcheck metadata  
┃ filehash     malwarecheck urlscan       phishcheck 
┃ nmap         ipinfo       nglattack    securitymenu
┗━━━━━━━━━┛

┏━━〔 STALKER-CMD 〕━━━━━━━━━━━━┓
┃ wachannel    tiktokstalk  twitterstalk ipstalk     
┃ igstalk      npmstalk     gitstalk     stalkermenu 
┗━━━━━━━━━┛

┏━━〔 LOGO-CMD 〕━━━━━━━━━━━━━━━┓
┃ goldlogo     silverlogo   platinumlogo chromelogo  
┃ diamondlogo  bronzelogo   steelogo     copperlogo  
┃ titaniumlogo firelogo     icelogo      iceglowlogo 
┃ lightninglogo rainbowlogo sunlogo      moonlogo    
┃ dragonlogo   phoenixlogo  wizardlogo   crystallogo 
┃ darkmagiclogo shadowlogo  smokelogo    bloodlogo   
┃ neonlogo     glowlogo     gradientlogo matrixlogo  
┃ aqualogo     logomenu                                
┗━━━━━━━━━┛

┏━━〔 GITHUB-CMD 〕━━━━━━━━━━━━━┓
┃ gitclone     repanalyze   zip          update      
┃ repo                                                
┗━━━━━━━━━┛

┏━━〔 CPANEL-CMD 〕━━━━━━━━━━━━━┓
┃ setlink      setkey       nestconfig   createuser  
┃ createpanel  createunlimited setpayment prompt    
┃ cpanelmenu                                           
┗━━━━━━━━━┛

┏━━〔 FUN-TOOLS-CMD 〕━━━━━━━━━━┓
┃ bf           gf           couple       gay         
┃ getjid       device       trailer      readsite    
┃ goodmorning  goodnight    channelstatus hack       
┗━━━━━━━━━┛

┏━━〔 MENU-CMD 〕━━━━━━━━━━━━━━━┓
┃ menu         menustyle    togglemenuinfo
┃ setmenuimage restoremenuimage
┗━━━━━━━━━┛

┏━━〔 GAMES-CMD 〕━━━━━━━━━━━━━━┓
┃ coinflip     dare         dice         emojimix    
┃ joke         quiz         rps          snake       
┃ tetris       truth        truthdetector tictactoe  
┃ quote                                        
┗━━━━━━━━━┛

┏━━〔 IMAGE-TOOLS-CMD 〕━━━━━━━━┓
┃ image        imagegen     imagine      anime       
┃ art          real         remini       vision      
┗━━━━━━━━━┛

┏━━〔 AI-VIDEO-CMD 〕━━━━━━━━━━━┓
┃ tigervideo   introvideo   lightningpubg
┃ lovevideo    videogen                   
┗━━━━━━━━━┛

┏━━〔 ETHICAL-HACKING-CMD 〕━━━━┓
┃ whois        dnslookup    subdomain    reverseip   
┃ geoip        portscan     headers      traceroute  
┃ asnlookup    shodan       pinghost     latency     
┃ sslcheck     tlsinfo      openports    firewallcheck
┃ maclookup    bandwidthtest securityheaders wafdetect
┃ robotscheck  sitemap      cmsdetect    techstack   
┃ cookiescan   redirectcheck xsscheck     sqlicheck   
┃ csrfcheck    clickjackcheck directoryscan exposedfiles
┃ misconfigcheck cvecheck   hashidentify hashcheck  
┃ bcryptcheck  passwordstrength leakcheck metadata  
┃ filehash     malwarecheck urlscan       phishcheck 
┃ nmap         ipinfo       nglattack    securitymenu
┗━━━━━━━━━┛

┏━━〔 DEV-CMD 〕━━━━━━━━━━━━━━━┓
┃ permanentlyban permanentkick autocreatefiles
┃ httpcustomimport darktunnelimport httpinjectorimport
┃ listconfigs    delconfig      readconfig
┃ botstats       logs           clearlogs    restartbot
┗━━━━━━━━━┛

┏━━━━━━━━━━━━
┃ Only commands in plugins/ will work
┗━━━━━━━━━━━━
`
