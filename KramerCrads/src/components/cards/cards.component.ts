import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards : any=[]

  constructor(private http:HttpClient) {
    this.getCards();
   }
getCards()
{
    this.http.get('http://localhost:3000/getAllCards',{responseType:'json'}).subscribe(result=>{
    let crd:any = result;
    this.cards = crd['data']['cards'];
    
  })
}
  ngOnInit(): void {

  }
  openModal(){
    let txt:any ="";
    txt=window.prompt("enter your new card's text");
    
    if(txt!=null && txt!=""){
    this.http.post('http://localhost:3000/addNewCard',
    {
      "id":"",
      "header":txt,
      "text":[],
      "color": "random_color"
    }
    ).subscribe(()=>{
      this.getCards()
    });}
  }
  openCardModal(id:any){
    let txt:any ;
    txt= window.prompt("enter your new card's text");

  
    if(txt!=null && txt!=""){ this.http.put('http://localhost:3000/addToCard',
  {
     "id":id,
     "text":txt
  }
  ).subscribe(()=>{
    this.getCards() 
  });}
    }

 removeCard(id:any){
   
   this.http.put('http://localhost:3000/removeCard',
   {
      "id":id
   }
   ).subscribe(()=>{
     this.getCards() 
   });
 }

 moveCard(i:any,direction:any){
  this.http.post('http://localhost:3000/moveCard',
  {
    "direction":direction,
     "index":i
  }
  ).subscribe(()=>{
    this.getCards() 
  });
 }
}
