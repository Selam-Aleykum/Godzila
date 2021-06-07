const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require(`discord.js`)
const ms = require('rhino-ms')
const { readdirSync } = require('fs'); // tanımlamalar
const fs = require('fs')
const { join } = require('path'); // tanımlamalar
const reklamlar = require('./reklam.json')
client.login("ODM4MzkwNTY1NjM1NjIwODc1.YI6aDw.73gYuT8LqwVh7fpqFYw4YKpmXh8");// godzi nin tokenODM4MzkwNTY1NjM1NjIwODc1.YI6aDw.73gYuT8LqwVh7fpqFYw4YKpmXh8
const db = require('./detabase')

const reklamlarbir = reklamlar.reklam

client.on('message', message => {
  if (!message.guild){
     return;
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
if (message.content.toLowerCase() === prefix + "rolver"){
if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Yetkin yok')
        const Discord = require('discord.js')
        var member = message.mentions.users.first();
        let rol = message.mentions.roles.first();
        if (!member) return message.reply('Birisini etiketlesee')
        if (!rol) return message.reply('Hangi rolü veriyim???')
        member.roles.add(rol)
        const e = new MessageEmbed()
        .setTitle('ROL VERİLDİ')
        .setDescription(`Verilen rol: ${rol}`)
        .addField(`Veren yetkili:`, message.author)
        .addField(`Rol verilen kişi:`, `${member}`)
        .setColor("#00FF00")
        message.channel.send(e)
}
})

//SUNUCU KURMA
//SUNUCU KURMA
//SUNUCU KURMA
//SUNUCU KURMA
//SUNUCU KURMA
//SUNUCU KURMA
client.on('guildMemberAdd', member => {
  if (!db.kontrol('sayaçkanal' + member.guild.id)) return;
  const sayaç = member.guild.channels.cache.find(channel => channel.id === db.bul('sayaçkanal' + member.guild.id));
  sayaç.send(`Sunucumuza hoşgeldin ${member} Seninle birlikte tam tamına __**${member.guild.memberCount}**__ kişi olduk :)`)
})

client.on('guildMemberAdd', member => {
  if (!db.kontrol('sunucuyak' + member.guild.id)) return;
  const sayaç = member.guild.channels.cache.find(channel => channel.id === db.bul('sunucuyak' + member.guild.id));
  sayaç.send(`Sunucumuza hoşgeldin ${member}`)
})

client.on('guildMemberAdd', member => {
  if (!db.kontrol('girişçıkışkanal' + member.guild.id)) return;
  const sayaç = member.guild.channels.cache.find(channel => channel.id === db.bul('girişçıkışkanal' + member.guild.id));
  sayaç.send(`Sunucumuza hoşgeldin ${member}`)
})

client.on('guildMemberAdd', member => {
  if (!db.kontrol('otorolkanal' + member.guild.id)) return;
  const sayaç = member.guild.channels.cache.find(channel => channel.id === db.bul('otorolkanal' + member.guild.id))
  member.roles.add(db.bul('otorolrol' + member.guild.id))
  sayaç.send(`${member} Kişisine başarı ile <&@${db.bul('otorolrol' + member.guild.id}> rolü verildi`)
})

client.on('guildMemberRemove', member => {
  if (!db.kontrol('sayaçkanal' + member.guild.id)) return;
  const sayaç = member.guild.channels.cache.find(channel => channel.id === db.bul('sayaçkanal' + member.guild.id));
  sayaç.send(`${member} Sunucudan ayrıldı :( o kittiğine göre __**${member.guild.memberCount}**__ Kişi kaldık`)
})

//SUNUCU KURMA
//SUNUCU KURMA
//SUNUCU KURMA
//SUNUCU KURMA
//SUNUCU KURMA
//SUNUCU KURMA


client.on('guildMemberAdd', member => {
  if (member.guild.id !== "844231641362989085") return;
  member.roles.add('846886965189672960')
  member.send('Hey! bu sunucuda kayıt olman gerekiyor. kayıt olmak için yetkilileri etiketle')
})

client.on('guildCreate', async guild => {
  const embed = new Discord.MessageEmbed()
  .setTitle('SUNUCUYA EKLENDİM LAAAYĞNNN')
  .setDescription('Sunucu ismi: ' + guild.name)
  .addField('Gaç kişi:', guild.memberCount)
  .addField('Zunucu sahibi Sahibi:', guild.owner)
  .setImage(guild.iconURL)
  client.channels.cache.get('843558709468332082').send(embed)
})

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'davet') {
    message.reply('Sunucuda link yasakmı? Eğer yasaksa **g!dmden-at** yaz');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'dmden-at') {
    const dm = message.author
    dm.send('https://discord.com/oauth2/authorize?client_id=838390565635620875&scope=bot&permissions=8589934591');
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (!db.kontrol("sa" + message.guild.id)) return;
  if (message.content.toLowerCase() === 'sa') {
    if (message.author.id === "827499335813038120"){
      message.channel.send('Aleyküm selam Hoş geldin sahip')
      setTimeout(function () {
        message.channel.send('nasılsın ya')
      }, 5000);
      setTimeout(function () {
        message.channel.send('Allah iyilik versin sahip')
      }, 6000);
    } else if (message.author.id === "412172124472737792"){
      message.channel.send('OOO Hoşgeldin arda abi. Sahip seni çok seviyo haberin ola (Bu mesaj sana özeldir)')
    } else {
    const embed = new MessageEmbed()
    .setTitle('ALEYKÜM SELAM')
    .setDescription('Hoş Geldin Nasılsın iyimisin?');
    message.channel.send(embed)
  }
}
});

client.on('message', message => {
  if (!message.guild) return;
  if (!db.kontrol("sa" + message.guild.id)) return;
  if (message.content.toLowerCase() === 'selamın aleyküm') {
    if (message.author.id === "827499335813038120"){
      message.channel.send('Aleyküm selam Hoş geldin sahip')
      setTimeout(function () {
        message.channel.send('nasılsın ya')
      }, 5000);
      setTimeout(function () {
        message.channel.send('Allah iyilik versin sahip')
      }, 6000);
    } else if (message.author.id === "412172124472737792"){
      message.channel.send('OOO Hoşgeldin arda abi. Sahip seni çok seviyo haberin ola (Bu mesaj sana özeldir)')
    } else {
    const embed = new MessageEmbed()
    .setTitle('ALEYKÜM SELAM')
    .setDescription('Hoş Geldin Nasılsın iyimisin?');
    message.channel.send(embed)
  }
}
});


client.on('message', message => {
  if (message.content.toLowerCase() === '1 tane çay') {
    if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
    if (message.author.id !== "827499335813038120") return message.channel.send(`Buyurun efendim çayınız: :tea: (Sahibin notu: **${message.author.username}** başka çay emojisi yoktu kusura galma :D`)
    message.channel.send('Ooo sahip ramazan boyunca sana çay ısmarlamadım al knk çayın: \n :tea: (Sahip sen biliin zaten kodu yazarken başka çay emojisi yok :D)');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === '1 tane kahve') {
    if (message.author.id !== "827499335813038120") return message.channel.send(`Buyurun efendim kahveniz: \n :coffee:`)
    message.channel.send('Sahip sen gahve içmen ben sana açık bi çay söyliyim 2 şekerli ok?')
  }
});
//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//
//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//
//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//
//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//
//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//

client.on('guildMemberAdd', member => {
  if (member.guild.id !== "810455308777816065") return;
  member.roles.add('843777352118304810')
  const yazikanali = member.guild.channels.cache.find(channel => channel.id === '836298564166615060');
  yazikanali.send(`<@${member.id}> kişisine başarı ile <@&843777352118304810> rolü verildi!`);
})

client.on('guildMemberAdd', member => {
  if (member.guild.id !== "810455308777816065") return;
  const yazikanali = member.guild.channels.cache.find(channel => channel.id === '836301860037984256');
  yazikanali.send(`<@${member.id}> Aramıza Hoşgeldin <#810456093000073246> ni okumayı unutma seninle beraber ${member.guild.memberCount} kişi olduk :)`)
})

client.on('guildMemberRemove', member => {
  if (member.guild.id !== "810455308777816065") return;
  const yazikanali = member.guild.channels.cache.find(channel => channel.id === '836301860037984256');
  yazikanali.send(`<@${member.id}> Aramızdan ayrıldı yolun açık olsun :( sen gittiğine göre ${member.guild.memberCount} kişi kaldık`);
})

//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//
//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//
//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//
//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//
//---------|BİR SUNUCUYA ÖZEL KOMUTLAR|---------//

//811926678284140574 | 836744702631608391

client.on('message', message => {
 if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === "godzilla") {
    if (message.author.bot){
      message.reply('Oo benden bi tane daha buyur **bot kardeş** ne istiyosun?')
    }
    if (message.author.id !== "827499335813038120"){
     message.channel.send("Buyurun efendim ne istemiştiniz? çaymı kahvemi? (1 tane çay/1 tane kahve) Bu sunucudaki prefixim: " + prefix)
      message.author.send('prefixim g! bu arada')
    }else{
  message.channel.send('**Ne var sahip? birimi banlancak? veya çay felanmı isticen** he prefixi öğreneceksen: ' + prefix)
  message.react("\<:ne_var:833329513793585164>")
    }
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === "godzi") {
    if (message.author.bot){
      message.reply('Oo benden bi tane daha buyur **bot kardeş** ne istiyosun?')
    }
    if (message.author.id !== "827499335813038120"){
     message.channel.send("Buyurun efendim ne istemiştiniz? çaymı kahvemi? (1 tane çay/1 tane kahve) bu sunucudaki prefixim: " + prefix)
    }else{
message.channel.send('**Ne var sahip? birimi banlancak? veya çay felanmı isticen** he prefixi öğreneceksen: ' + prefix)
      message.react("\<:ne_var:833329513793585164>")
    }
  }
});

client.on(`message`, message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + `herkese çay`) {
  message.channel.send(`https://i.pinimg.com/236x/51/13/18/5113187546bfb379c727ee92a1257933.jpg`)
    message.channel.send(`Bu devirde birileri çay alan kaç kişi var? <@${message.author.id}> Herkese benden çay dedi ve herkese çay ısmarladı`);
  }
});

client.on('message', message => {
  if (message.content === 'bende iyiyim') {
    message.reply('allah iyilik versin');
  }
});

client.on('message', message => {
  if (message.content === 'amin') {
    message.reply('amin');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'espri') {
  var Espri = [
    'Birisi uyuyormuş ve adam onu su ile uyandırmış neden? (**Çünkü suyun kaldırma kuvveti var**)',
    'Şirin baba:**Köyümüzü nerden buldun?**\nGargamel:**Seni hiç alakadar etmez**',
    'Adamın biri güneşte yanmış, ayda düz',
      'masada hangi örtü kullanılmaz? (**Bitki örtüsü**)',
      'ben yedigün içiyorum sen onbeşgün iç',
      'röntgen filmi çektirdik yakında sinamalarda'
  ];

  var espi = Math.floor(Math.random()*Espri.length);
  const embed = new MessageEmbed()
  .setTitle('ESPRİ')
  .addField('espri:', `${Espri[espi]}`);
  message.channel.send(embed)
   }
});

client.on('guildMemberAdd', member => {
  if (member.guild.id !== "811926678284140574") return;
  const Sayaç = member.guild.channels.cache.find(channe => channe.id === '822814487513268274');
  Sayaç.send(`Aramıza Hoşgeldin <@${member.id}> Seninle beraber: ${member.guild.memberCount} kişi olduk :)`)
});

client.on('guildMemberRemove', member => {
  if (member.guild.id !== "811926678284140574") return;
  const Sayaç = member.guild.channels.cache.find(channe => channe.id === '822814487513268274');
  Sayaç.send(`<@${member.id}> Aramızdan ayrıldı ;-; o gittiğine göre şuan toplam: ${member.guild.memberCount} kişiyiz :(`)
});

client.on('ready', () => {
   console.log('aktif aktif sen rahat ol :D')
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === "evet godzilla işten ayrıl"){
    db.sil(`${message.author.tag}${message.author.id}`)
    message.reply('Başarı ile işten ayrıldın ama paralar gitti :/')
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === "evet godzilla premium u sil"){
    if (!db.kontrol(`premium_${message.author.id}`)) return message.reply('Sende zaten pre yok AGA BEEEEE')
     db.sil(`premim_${message.author.id}`)
    message.channel.send('Premiumun silindi neden sildin Hâla anlamadım -_-')
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'nasılsın') {
  var Nsl = [
    'iyiyim sen?',
    'çok iyi deilim :( )',
    'kötüyüm',
    'CANLI DERSTEYİM',
    'GORONAYIM :ab:'
  ];
  var nsl = Math.floor(Math.random()*Nsl.length);
  const embed = new MessageEmbed()
  .setTitle('NASIL MIYIM?')
  .addField('.', `${Nsl[nsl]}`);
  message.channel.send(embed)
  }
});

client.commands= new Discord.Collection();
client.zunucutanıt = new Discord.Collection();
client.sansloo = new Discord.Collection();
client.kasacooldown = new Discord.Collection();

const commandFiless = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiless) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    if (typeof command.kod === 'object'){
    command.kod.forEach(x => {
      client.commands.set(x, command)
    })
  } else {
    client.commands.set(command.kod, command)
  }
}

client.on("error", console.error);

client.on("message", async message => {

    if(message.author.bot) return;
    if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();



        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'godzilla naber') {
    message.reply('iyi senden?');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'bende iyi') {
    message.reply('allah iyilik versin');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'yardım') {
    message.reply(prefix +'yardım DİYE BİR KOMUT YOK!')
    message.channel.send('Onun yerine **g!komutlar** yazabilirsin :)')
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'merhaba') {
    message.reply('Merhaba hoş geldin');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === prefix + 'godzilla vs king kong') {
    message.reply('şu anlık elimizde fragmanı var ileride filmin linkini atacağım az kaldı az :D :https://www.youtube.com/watch?v=odM92ap8_c0');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'yaşasın ırkımız') {
    message.channel.send('çine bedel kırkımız söylenir türkümüz çağlardan çağlara:https://www.youtube.com/watch?v=Q997SPR0BaA');
  }
});

client.on('message', message => {
  if (message.content === 'godzilla nasılsın') {
    message.reply('iyiyim sen nasılsın?');
  }
});

const snekfetch = require('snekfetch');
let points = JSON.parse(fs.readFileSync('./xp.json', 'utf8'));

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
};
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on("message", async message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
    if (message.channel.type === "dm") return;

  if (message.author.bot) return;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;

  if (!points[user.id]) points[user.id] = {
    points: 0,
    level: 0,
  };

  let userData = points[user.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    userData.level = curLevel;
        var user = message.mentions.users.first() || message.author;
message.channel.send(`**${user.username} Helal lan 1 level atladın**`)
    }

fs.writeFile('./xp.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })

  if (message.content.toLowerCase() === prefix + 'level' || message.content.toLowerCase() === prefix + 'profil') {
const level = new Discord.MessageEmbed().setTitle(`${user.username}`).setDescription(`**Seviye:** ${userData.level}\n**XP:** ${userData.points}`).setColor("RANDOM").setFooter(``).setThumbnail(user.avatarURL)
message.channel.send(`==> **| ${user.username} Adlı Kullanıcının Profili Burada!**`)
message.channel.send(level)
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase(

  ) === 'müslüman godzilla') {
    message.channel.send('**Elhamdülillah**');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === prefix + 'yt spam king') {
    message.reply('emin misin eminsen **evet yt spam at** yaz');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === prefix + 'dc spam king') {
    message.reply('Emin misin? eminsen **evet dc spam at** yaz');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'evet dc spam at') {
    message.reply('atıyom son kararınmı? **EVET DC SPAM AT** YAZ BÜYÜK HARFLERLE');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'EVET DC SPAM AT') {
    message.reply('**AT LAN DC SPAM** YAZ BÜYÜK HARFLERLE');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'AT LAN DC SPAM') {
    message.channel.send('spam yasak **:D**');
  }
});

client.on('message', message => {
  if (message.content === 'MÜSLÜMAN GODZİLLA') {
    message.reply('**Elhamdülillah**');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'Müslüman godzilla') {
    message.reply('**Elhamdülillah**');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'müslüman Godzilla') {
    message.reply('**Elhamdülillah**');
  }
});

client.on("mesage", message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + "kaç-sunucudasın?"){
    message.channel.send(`${client.guild.cache.size} kadar sunucudayım eğer burası 100 ise daha büyüyemem (çünkü daha doğrulanmadım)`)
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'kaç-sunucudasın') {
    message.channel.send(`${client.guilds.cache.size} kadar sunucudayım :)`);
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'kaç-sunucudasın?') {
    message.channel.send(`${client.guilds.cache.size} kadar sunucudayım :)`);
  }
});

client.on('message', message => {
  if (message.content === 'Müslüman Godzilla') {
    message.reply('**Elhamdülillah**');
  }
});

client.on('message', message => {
  if (message.content === 'Amin') {
    message.reply('amin');
  }
});

client.on('message', message => {
  if (message.content === 'AMİN') {
    message.reply('amin');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === prefix + 'kanal pp si') {
    message.channel.send('https://media.discordapp.net/attachments/782165799753220107/817734204522889236/unknown.png?width=1440&height=604')
    message.channel.send('istersen link atayım eğer atmamı istiyosan **g!bağlantılar** yaz');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'kırkşehir e git') {
    message.channel.send('https://media.discordapp.net/attachments/816584400816046081/821417765579653120/IMG-20201226-WA0023.jpg?width=919&height=689')
    message.channel.send('**GİTMİŞKEN SAMETKYR YA Bİ SELAM ÇAK :smile:**')
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'evet yt spam at') {
    message.channel.send('SON KARARIN MI? **EVET** YAZ BÜYÜK HARFLERLE');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'EVET') {
    message.channel.send('BAK ATIYOM **AT LAN** YAZ BÜYÜK HARFLERLE');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === 'grs') {
    message.reply('GRS kanka');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content === 'AT LAN') {
    message.channel.send('spam yasak **:D**');
  }
});


client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'ankaraya git') {
    message.channel.send('https://i.pinimg.com/originals/20/3e/7d/203e7d2b99528827439f68a1996358d9.jpg')
    message.channel.send('ankaraya gittin gez bakalım :D');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'anıtkabir e git') {
    message.channel.send('https://www.etstur.com/letsgo/wp-content/uploads/2018/11/anitkabir-fotografi.jpg')
    message.channel.send('**1881-1938** HER ZAMAN KALBİMİZDESİN');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'soğuksu milli parkına git') {
    message.channel.send('https://lh3.googleusercontent.com/proxy/lVFJDeIpVfpVeW0eqaB8H0e3rF4mDVOydV4kjU3kwVgHH5YNjMD-6IDgzv9Ox9122u6HN3x4Isl7i7PMWCCeVi_B4IvobA')
    message.channel.send('Kızılcahamam ın milli PARKI yani memleketimin parkı');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'izmir e git') {
    message.channel.send('https://www.haberizlenim.com/d/news/8075.jpg')
    message.channel.send('Şu sağ taraftaki mor mudur pembe midir o kule benim dikkatimi çekti. Garip');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'king ghidorah ı nasıl yendin') {
    message.channel.send('https://tenor.com/view/memati-seni-hi%C3%A7alakadar-etmez-gif-13260279');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'king ghidorah ı nasıl yendin?') {
    message.channel.send('https://tenor.com/view/memati-seni-hi%C3%A7alakadar-etmez-gif-13260279');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'ayasofya camii ye git') {
    message.channel.send('https://i4.hurimg.com/i/hurriyet/75/750x422/5f1aaa46c03c0e133ca872cc.jpg')
    message.channel.send('Gitmişken namaz kıl :smile:');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'kız kulesine git') {
    message.channel.send('https://turkishairlines.ssl.cdn.sdlmedia.com/637389593236221508JQ.jpg')
    message.channel.send('Çok güzel deilmi ya');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'muğla ya git') {
    message.channel.send('https://iasbh.tmgrup.com.tr/978bd7/650/344/0/0/1152/604?u=https://isbh.tmgrup.com.tr/sbh/2018/07/17/1531814637479.jpg')
    message.channel.send('Ülkemizin en güzel 10 yerlerinden bir tanesi (Kelebekler Vadisi)');
  }
});

client.on('message', message => {
  if (!message.guild){
      var prefix = "g!"
    } else if (db.kontrol("prefix" + message.guild.id)){
      var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "g!"
    }
  if (message.content.toLowerCase() === prefix + 'istanbul a git') {
    message.channel.send('https://www.dreamofholiday.com/userFiles/bolgeler/950205793_1588435982.jpg')
    message.channel.send('En çok truzim olan yerimiz güzel olmasaydı **TARİH** ile dolu olmasaydı insanlar gelmezdi :D');
  }
});

client.on('message', message => {
if (!db.kontrol('reklam' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes(reklamlarbir)) return;
  if (!message.member.hasPermission("ADMINISTRATOR")){
  message.delete()
  message.reply('kanka reklam yapmassan sevinirim :)')
  }
})

client.on('message', message => {
if (!db.kontrol('reklam' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("https")) return;
  if (!message.member.hasPermission("ADMINISTRATOR")){
  message.delete()
  message.reply('kanka reklam yapmassan sevinirim :)')
  }
})

client.on('message', message => {
if (!db.kontrol('reklam' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("http")) return;
  if (!message.member.hasPermission("ADMINISTRATOR")){
  message.delete()
  message.reply('kanka reklam yapmassan sevinirim :)')
  }
})

client.on('message', message => {
  if (message.guild.id !== "811926678284140574") return;
  if (message.channel.id !== "836744702631608391") return;
  if (message.author.bot) return;
  message.react("✅")
  message.react("❌")
})

client.on('message', message => {
  if (message.guild.id !== "810455308777816065") return;
  if (message.channel.id !== "810496176943005757") return;
  if (message.author.bot) return;
  message.react("✅")
  message.react("❌")
})

client.on('message', message => {
  if (message.guild.id !== "811926678284140574") return;
  if (message.channel.id !== "823821748591263774") return;
  if (message.author.bot) return;
  message.react('✅')
  message.react('❌')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("amk")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("oç")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("yarrak")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("piç")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("aq")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("pezeveng")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("orospu çocuğu")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("şerefsiz")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("orospu")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("öç")) return;
  message.delete()
  message.reply('Küfür etme layn')
})

client.on('message', message => {
if (!db.kontrol('küfür' + message.guild.id)) return;
  if (!message.guild) return;
  if (!message.content.toLowerCase().includes("sik")) return;
  message.delete()
  message.reply('Küfür etme layn')
})
