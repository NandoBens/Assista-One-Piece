var motivos = [
    "Os personagens são bem construídos",
    "É uma aventura",
    "É animado",
    "É emocionante",
      "As lutas são muito boas"
  ];
  
  var imagens = [ "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRA1Ye3UI0I4lgTeM1XsSoUDTFIgM8c_GvNgc0Z4gl8u3m6Xefasg9XWP9GvVMpvl4Yc&usqp=CAU",
    "https://br.web.img3.acsta.net/pictures/16/02/03/17/11/571106.jpg","https://uploads.metropoles.com/wp-content/uploads/2022/04/20114920/unnamed-14-7.jpg",         "https://files.meiobit.com/wp-content/uploads/2023/01/one-piece-odyssey-001.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  
  