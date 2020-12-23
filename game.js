class Game{
constructor(){

}

getState(){
var gameStateRef=database.ref('gameState')
gameStateRef.on("value",function(data){
 gameState=data.val()   
})
}
update(state){
database.ref('/').update({
gameState:state
})
}
async start(){
if(gameState===0){
player=new Player()
var playerCountRef=await database.ref('playerCount').once("value")
if(playerCountRef.exists()){
playerCount=playerCountRef.val()
player.getCount()
}

form=new Form()
form.display()
}
car1=createSprite(300,700)
car2=createSprite(500,700)
car3=createSprite(700,700)
car4=createSprite(900,700)
cars=[car1,car2,car3,car4]
car1.visible=false
car2.visible=false
car3.visible=false
car4.visible=false
}
play(){
Player.getPlayerInfo()
car1.visible=true
car2.visible=true
car3.visible=true
car4.visible=true
if(allPlayers!==undefined){
var index=0
var x=0
var y
for(var plr in allPlayers){
index=index+1
x=x+200
y=displayHeight-allPlayers[plr].distance
cars[index-1].x=x
cars[index-1].y=y
if(index===player.index){
cars[index-1].shapeColor="red"
camera.position.x=displayWidth/2
camera.position.y=cars[index-1].y
}
}}
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=10
player.update()
}
drawSprites()
}
}

