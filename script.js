function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  //pegar a tag da img
  const img = document.querySelector('#profile img')

  //substituir a imagem
  if(html.classList.contains('light')){
  //se tiver lightmode, adicionar a imagem light
  img.setAttribute("src", "./assets/AvatarLigth2.png")
  }else{
    img.setAttribute("src", "./assets/Avatar2.png")
  }
}
 // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }
//todo esse codigo acima é o 'html.classList.toggle('light')'