function chatView(chatModel){
    return `<div class="chatCard">
    
    <img src="${chatModel.avatar}" class="chatCardAvatar" alt="${chatModel.title}" />
    
   <div class="chatLastMessage"> </div>
    <p class="chatLastMessage">
      Click on the Vite logo to learn more
    </p>
  </div>
  `
}