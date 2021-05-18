var fs = require('fs')

fs.readFile('cal.js','utf8',function(err,data){
    console.log(data)
})

fs.writeFile('cal1.txt','hello man is it done',function(err){
    console.log('executed')    
})

fs.appendFile('cal1.txt','well happening .',function(err){
    console.log('done')
})

