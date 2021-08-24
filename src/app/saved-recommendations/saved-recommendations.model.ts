import { Users } from "../login/login.model";

export class savedShares {
      user_id:number;
      stock_symbol:String;
	  stock_shortname:String;
	  stock_bseprice:number;
	  stock_nseprice:number;
	  stock_profit:number;
	  stock_quantity:number;
	  saved_time:Date;
	  user:Users
	
   constructor(stock_symbol:String,
	stock_shortname:String,
	stock_bseprice:number,
	stock_nseprice:number,
	stock_profit:number,
	stock_quantity:number,
	saved_time:Date)
   {
       this.user_id=this.user.id;
	   this.stock_symbol=stock_symbol;
	   this.stock_shortname=stock_shortname;
	   this.stock_bseprice=stock_bseprice;
	   this.stock_nseprice=stock_nseprice;
	   this.stock_profit=stock_profit;
	   this.stock_quantity=stock_quantity;
	   this.saved_time=saved_time;
   }
}
