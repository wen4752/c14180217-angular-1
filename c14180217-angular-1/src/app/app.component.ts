import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  input=''

  
  board:string[][] = [
                      ['*','*','*','*','*'],
                      ['*','*','*','*','*'],
                      ['*','*','*','*','*'],
                      ['*','*','*','*','*'],
                      ['*','*','*','*','*']]
  giliran='0'
cekmenang(){

  let x=Number(this.input[0])
  let y=Number(this.input[2])

  if(this.board[x][y]=='*'){
    this.board[x][y]=this.giliran
    if(this.giliran=='0'){
      this.giliran='1'
    }else{
      this.giliran='0'
    }
    this.cekvertikalhorizontal()
  }else{
    alert("board sudah terisi")
  }
}

cekvertikalhorizontal(){
  loop1:
  for(var i=0;i<5;i++){
    // cek horizontal
    let count0=0
    let count1=0
    for(var j=0;j<5;j++){
      if(this.board[i][j]=='1'){
        count1+=1
      }else if(this.board[i][j]=='0'){
        count0+=1
      }else{
        if(count0==4||count1==4){
          break
        }
        count0=0
        count1=0
      }
    }
    
    if(count0>=4){
      alert("player 0 menang")
      this.reset()
      break loop1
    }
    if(count1>=4){
      alert("player 1 menang")
      this.reset()
      break loop1
    }
    count0=0
    count1=0

    //cek vertikal
    for(var j=0;j<5;j++){
      if(this.board[j][i]=='1'){
        count1+=1
      }else if(this.board[j][i]=='0'){
        count0+=1
      }else{
        if(count0==4||count1==4){
          break
        }
        count0=0
        count1=0
      }
    }

    if(count0>=4){
      alert("player 0 menang")
      this.reset()
      break loop1
    }
    if(count1>=4){
      alert("player 1 menang")
      this.reset()
      break loop1
    }

  }
}
reset(){
  window.location.reload();
}
  

}

