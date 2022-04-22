class Form {
  constructor() 
  {
    this.input = createInput("").attribute("Placeholder", "Enter your name:")
    this.playButton = createButton("Play")
    this.titleImage = createImg("/assets/title.png")
    this.greeting = createElement("h3")
  }
  
  setElementPosition()
  {
    this.input.position(width/2, height/2)
    this.titleImage.position(120, 100)
    this.playButton.position(width/2-90, height/2-20)
    this.greeting.position(width/2-100, height/2-50)
  }

  handleMousePressed()
  {
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      variableMessage = "Hello! Welcome to the car racing game!"
      this.greeting.html(variableMessage)
      player.name = this.input.value()
    })
  }

  hide()
  {
    this.greeting.hide()
    this.playerButton.hide()
    this.input.hide()
  }

  display()
  {
    setElementPosition();
    handleMousePressed();
  }

  

}
