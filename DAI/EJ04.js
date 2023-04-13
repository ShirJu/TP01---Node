import fs from 'fs'

fs.copyFile (`./entrada.txt`,`./salida.txt`, (err)=>
{
    if (err) throw err;
   console.log(`entrada.txt se ha copiado a salida`);
})