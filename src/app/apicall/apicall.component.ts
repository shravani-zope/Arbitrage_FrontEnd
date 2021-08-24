import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApicallService, niftyfifty, quoteresponse } from '../apicall.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})


export class ApicallComponent implements OnInit {
  [x: string]: any;
  
  NiftyFifty:niftyfifty[];
  QuoteResponse:quoteresponse[];
  BSEdata:quoteresponse[];
  nseSymbols: Array<string>;
  // quoteres:quoteresponse["result"][];
  quoteres:Array<string>;
  nsestring: string;
  bseSymbols:Array<string>;
  bsestring:string;
  bsedata:Array<string>; 
  counter:Array<number>;
  bseMarketPrice:Array<number>;
  marketPriceDiff:Array<number>;
  nseMarketPrice:Array<number>;
  i:number;
  profitpercent:Array<number>;
  buy:Array<string>;
  profitarray: Array<number>;
  profit: number;
  rounded:number;
  symbolname:Array<string>;
  nsePrice:Array<number>;
  bsePrice:Array<number>;
  //static stockss:Array<string>;

  //stockss:niftyfifty["stocks"][];
  //quotess:Autocomplete["quotes"][]

  
  constructor(private _serv : ApicallService,private _http:HttpClient) { }

  ngOnInit(): void{

    this._serv.getniftyfifty().subscribe(
      
      Response => {
         
          let nseSymbols=Response["stocks"];
          //console.log("stockss array");
          //console.log(stockss);
          this.nseSymbols=Response.stocks;
          //console.log(nseSymbols);
          this.nsestring=this.nseSymbols.toString();
          //console.log("string")
         // console.log(this.nsestring);
          this.bseSymbols=[];
          for(var val in nseSymbols){
            
            let splittednew=nseSymbols[val].slice(0,-3)+".BO";
            
            splittednew=splittednew.toString();
            
            this.bseSymbols=this.bseSymbols.concat(splittednew);
          }
          this.bsestring=this.bseSymbols.toString()
          //console.log(this.bsestring);
          
          
         
          this._serv.apicallsuccess(this.nsestring).subscribe(
   
            Response => {
              this.nseMarketPrice=[];
              let nsedata=Response["quoteResponse"];
              console.log(nsedata.result);
              //this.quoteres=Response.quoteResponse.result;
              this.QuoteResponse=nsedata.result;
              for(var val in nsedata.result)
              {
                //console.log(nsedata.result[val].regularMarketPrice)
                this.nseMarketPrice[val]=nsedata.result[val].regularMarketPrice;

              }
             // console.log(this.nseMarketPrice);

             this._serv.apicallsuccess(this.bsestring).subscribe(
   
              Response => {
                this.profitarray=[];
                this.bseMarketPrice=[];
                let bsedata=Response['quoteResponse'];
                //console.log(bsedata.result);
                //this.bsedata=Response.quoteResponse.result;
                this.BSEdata=bsedata.result;
                this.i=0;
                this.buy=[];
                this.symbolname=[];
                this.nsePrice=[];
                this.bsePrice=[];
                this.counter=[];
                for(var val in bsedata.result,nsedata.result) 
                {               
                  this.bseMarketPrice[val]=bsedata.result[val].regularMarketPrice;
                  this.nseMarketPrice[val]=nsedata.result[val].regularMarketPrice;
                  //this.profitarray[val]=this._serv.calculateProfitPercent(this.bseMarketPrice[val],this.nseMarketPrice[val])
                  let val2=parseFloat(this.bseMarketPrice[val]);
                  let val3=parseFloat(this.nseMarketPrice[val]);
                  this.rounded=0;                 
                  this.rounded=Math.abs(val2-val3);
                  if(this.rounded!=0)
                  {
                    this.symbolname[this.i]=bsedata.result[val].shortName;
                    this.nsePrice[this.i]= val3;
                    this.bsePrice[this.i]=val2;
                    this.profitarray[this.i]=parseFloat(this.rounded.toFixed(4));
                    if(val2>val3)
                  {
                    this.buy[this.i]="NSE";
                  }
                  else
                  {

                    this.buy[this.i]="BSE";
                  }
                  this.counter[this.i]=this.i;
                  this.i=this.i+1;
                 
                  }
                  else{
                    continue;
                  }
                 

                  
                  
                }
                // console.log(this.nseMarketPrice);
                // console.log(this.bseMarketPrice);
                // console.log(this.profitarray);
               
                           
               }
              
             );   
            
             }

            
           );
        
       }
       

    ); 

    

      
    
   
  

    
      }
      
     
    

      
        
       

  }

  
 
   
  


