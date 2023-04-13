var objeto = parsealUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"); 

console.log(objeto);

function parsealUrl(objeto){
 let url2= new URL (objeto)

   let objetoUrl=
   {
        "host" :url2.host,
        "pathname" : url2.pathname, 
        "parametros" : url2.searchParams
   };
   return objetoUrl
}