import React, { Component } from "react";
import axios from 'axios';  
import { Link } from 'react-router-dom';      

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';	  

class PaymentMode extends Component {   
  
  constructor (props) {
  super(props)
  this.state = {  		
	showError: false,		
	showSuccess: false,		
	messgae: '',
	tab:'',  
	concessionData:[],  
	concession_type:'',	
	concession_type2:'',
	concession_amount:0,   
	concession_amount2:0             
  }
	   this.handleCreate = this.handleCreate.bind(this);   		
	   this.handleChange = this.handleChange.bind(this);	
	   this.handleTab = this.handleTab.bind(this);  
	   this.handleNav = this.handleNav.bind(this);   	
   }
   handleChange = (event) => {
		const re = /^[0-9.\b]+$/;  
		var inp = event.target.value;      			
		const arr=inp.split('.');	
		
		if(re.test(inp) && (arr.length<=2))		
		{
			this.setState({ [event.target.name]:event.target.value });  							    
		}				
  }
  handleNav = (event,param) => { 
	   this.setState({ tab:'',concession_type:'',concession_type2:'',concession_amount:0,concession_amount2:0,showError:false,showSuccess:false }); 	     		       
  }  
  handleTab = (event,param) => { 
	   this.setState({ [event.target.name]: event.target.value }); 
	   this.setState({tab:param});  	
  }  
   handleCreate (event) {
   event.preventDefault();   
  		
  const { concession,concession_type,concession_amount,concession_type2,concession_amount2 } = event.target; 

let concesion=concession.value;

let type=(concession_type)?concession_type.value:'';    
let type2=(concession_type2)?concession_type2.value:'';   
let amount=(concession_amount)?concession_amount.value:0;  
let amount2=(concession_amount2)?concession_amount2.value:0;    

const data = { 				
	concession:concession.value,		
	type:type,   	 	 		
	type2:type2,  
	amount:amount,  
	amount2:amount2          
}

console.log(data);		

	axios.post('/feeconcession/add',data)	
    .then(response => {   
		    	  	
		if (response.data.status === 'successed')   
		{		
			this.setState({ showError: false, showSuccess: true, message: response.data.message});  	
			this.getData();   	
		}
		else
		{
			this.setState({ showError: true, showSuccess: false, message: response.data.message});	 			   
		}
    })
    .catch(error => {  	   
	   console.log(error.message); 	
    })
	
   }
componentDidMount() {     

	this.getData();  
	
}
getData(){   		
	   
	axios.get(`/feeconcession/index`).then(response => {      
	 	
	this.setState({  			 			 			
			concessionData:response.data.data?response.data.data:[]   	
		});
	})
	.catch(error => {  	   
	   console.log(error.message); 									
    })    

}
   
   render () {	   
	
	const concessions=(this.state.concessionData.length>0)?this.state.concessionData:[];  
	let tab1_type='';	
	let tab2_type='';
	let tab3_type='';  
	let tab1_type2='';	
	let tab2_type2='';     
	
	let tab1_amount=0;   
	let tab2_amount=0; 
	let tab3_amount=0; 
	let tab1_amount2=0;
	let tab2_amount2=0; 
	  
	
	
	for(var key in concessions)	
	{
		if(concessions[key].ConcessionName=='sibling')  
		{
			tab1_type=concessions[key].ConcessionType; 
			tab1_type2=concessions[key].ConcessionType2; 	
			tab1_amount=concessions[key].ConcessionAMount;  
			tab1_amount2=concessions[key].ConcessionAMount2;   
		}
		if(concessions[key].ConcessionName=='staff')  
		{
			tab2_type=concessions[key].ConcessionType;   
			tab2_type2=concessions[key].ConcessionType2; 
			tab2_amount=concessions[key].ConcessionAMount;  
			tab2_amount2=concessions[key].ConcessionAMount2;     	
		}
		if(concessions[key].ConcessionName=='management')  
		{
			tab3_type=concessions[key].ConcessionType;      
			tab3_amount=concessions[key].ConcessionAMount;  	
		}   
		
	}
	
	// console.log(tab1_type);		
   
	return (   
		  <div>
				
				 {/********************
				   Preloader Start
				   *********************/} 

		<Preloader />

	{/********************
	Preloader end
	*********************/}

	 {/***********************************
		HeaderPart start
	************************************/}
	
	<div id="main-wrapper">

	<HeaderPart />

	 {/***********************************
	  HaderPart end
	************************************/}
	
	   {/***********************************
		Main wrapper start
	************************************/}  

			  {/***********************************
				Content body start
			************************************/}
			  <div className="content-body">
					<div className="container-fluid">  							
						
					</div>
				</div>
			  
			  {/***********************************
				Content body end
			************************************/}

			  {/***********************************
				Footer Copyright start
			************************************/}

			  <Copyright />

			  {/***********************************
				Footer Copyright end
			************************************/}		

			</div>
			{/***********************************
			Main wrapper end
		************************************/}
		  </div>
		);

	}
  
}

export default PaymentMode;  	    	