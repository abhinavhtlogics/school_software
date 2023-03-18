import React, { Component } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';  
import Swal from 'sweetalert2';	
import Script from "@gumgum/react-script-tag";	
import Copyright from "../basic/Copyright";	
import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";		

axios.defaults.baseURL='http://127.0.0.1:8000/api';			

class Feeslot extends Component {
	
   constructor(props) {
  super(props)
  this.state = {
	categories: [],		
	months: [],		
	slots: [],	
	checkarr:[],
	selectarr:[],
	chkarr:[],   
	slctarr:[],
	idarr:[],  	
	chkbox:[],  
	showError: false,		
	showSuccess: false,		
	messgae: ''	
  }
   this.handleCreate = this.handleCreate.bind(this);
   this.handleSelect = this.handleSelect.bind(this);
   this.handleCheck = this.handleCheck.bind(this);	   
   this.input = React.createRef();    	
 }
 handleSelect = (event) => {  	   

	let opt = event.target.name; 	
    let select_val = event.target.value;  
	let selections=this.state.selectarr; 
	
	const array =opt.split("_"); 	
	let chk_id =array[1];
	let lvl = '';  
	const check_arr=[];				
	
	let checks=this.state.idarr;    
	let allchecks=this.state.chkarr;   
	
	var count=0;	
	let unique = [];    
	
	if(select_val=='monthly')
	{
		for(var key in checks) 
		{ 			
			lvl=checks[key];		
			const array =lvl.split("_"); 	
			let key_id =array[1]; 
			if(key_id==chk_id)		
			{ 				
				for(var key in allchecks) {  
					if(allchecks[key] !== null)
					{
						let level = allchecks[key].id; 
						const level_arr =level.split("_");
						let level_id =level_arr[1]; 	
						if(level_id==chk_id)		
						{
							check_arr.push(level);	
						}
					}
				}	
				
			} 
			else
			{
				check_arr.push(checks[key]);	
			}				
		}
	
	} 
	else if(select_val=='yearly')
	{	
		for(var key in checks) 
		{ 			
			lvl=checks[key];		
			const array =lvl.split("_"); 	
			let key_id =array[1];  			
			
			if(key_id==chk_id)		
			{   
				for(var key in allchecks) {  
					if(allchecks[key] !== null)
					{
						let level = allchecks[key].id; 
						const level_arr =level.split("_");
						let level_id =level_arr[1]; 	
						if(level_id==chk_id)		
						{
							if(count<1)
							{
								check_arr.push(level);
							} 								
							count++;  
						}
					}
				}	
				
			} 
			else
			{
				check_arr.push(checks[key]);	
			}				
		}
		//	
	}
	else if(select_val=='others')
	{
		for(var key in checks) 
		{ 
			lvl=checks[key];		
			const array =lvl.split("_"); 	
			let key_id =array[1];   				
			
			if(key_id !=chk_id)		
			{
				check_arr.push(checks[key]);     
			}  			
			
		}
	}
	else
	{
		for(var key in checks) 
		{ 			
			check_arr.push(checks[key]);     				
		}
	}
	
	for(var i=0; i < check_arr.length; i++){ 
		if(unique.indexOf(check_arr[i]) === -1) { 
			unique.push(check_arr[i]); 	
		} 		
	} 	
	
	
	/* for(var key in checks) 
	{ 
		if(checks[key] !== null)
		{
			lvl=checks[key].name;		
			const array =lvl.split("_"); 	
			let key_id =array[1]; 
						
			if(key_id==chk_id)		
			{
				if(!check_arr.includes(checks[key].name))
				{
					check_arr.push(checks[key].name);	
				}
				
			}
			
		} 	
	} */  
	
	console.log(unique);     
	
	/* console.log(check_arr);		
	
	var obj = {};	
	for (var key in selections)   
	{
		obj[key] = selections[key];   			
	}

	if(select_val !='')	
	{ 			
		obj[opt]=select_val;  		
	}   */
	 
	this.setState({ idarr:unique });     	 
 }
 handleCheck = (event) => {	
    
	let opt = event.target.name; 
	let check = event.target.checked;
    let check_val = event.target.value;
	let check_id = event.target.id;   
	
	let checks=this.state.idarr;   	
	
	const idset =[]; 
	let unique = [];  
	
	if(check)
	{
		for (var key in checks) 
		{
			idset.push(checks[key]);  
		}	
		idset.push(check_id);     
	} 
	else
	{
		for (var key in checks) 
		{
			if(checks[key] !=check_id)
			{
				idset.push(checks[key]);   
			}
			
		}	
	}

	for(var i=0; i < idset.length; i++){ 
		if(unique.indexOf(idset[i]) === -1) { 
			unique.push(idset[i]); 	
		} 		
	} 	

	console.log(unique);	  
	
	this.setState({ idarr:unique });    
	
	/* let checks=this.state.checkarr;   	   
	
	var obj = {};	
	var lvl =''; 
	   
	    if(check)
		{ 
			for (var key in checks) 
			{			    
				if(key==opt)
				{
					lvl =checks[key];   					
				}
				else
				{
					obj[key] = checks[key];   
				}
			}
			if(lvl !='')
			{
				obj[opt]=lvl+','+check_val; 
			}
			else
			{
				obj[opt]=check_val;  
			} 			 
		     
		}
		else
		{
		   for (var key in checks) 
		   {
			    if(key==opt)
				{
					lvl=checks[key];  					
				}
				else
				{
					obj[key] = checks[key];   
				}
				if(lvl !='')
				{
					const array =lvl.split(","); 
					const index = array.indexOf(check_val);  
					if (index > -1) 
					{ 
					  array.splice(index,1); 
					}
					let text = array.toString(); 
					if(text !='')
					{
						obj[opt]=text; 			
					}			
				}
		   }
		}	
	  
	this.setState({ checkarr:obj });     */
	
 }   	
 handleCreate (event) {  
    event.preventDefault();    
	  
	let checks=this.state.chkarr;
	let selects=this.state.slctarr;   
	var obj = {};
	var sbj = {};	
	var lvl ='';   
	
	for(var key in selects) {
		if(selects[key] !== null)
		{ 				
			if(selects[key].value !='')
			{
				sbj[selects[key].name]=selects[key].value;   	
			}
		} 		
	}	
	
	for(var key in checks) {  		

		if(checks[key] !== null)
		{
			if(checks[key].hasOwnProperty('checked'))
			{
				if (checks[key].checked)    
				{
					if(obj.hasOwnProperty(checks[key].name))
					{
						lvl=obj[checks[key].name];
						let txt = checks[key].value+','+lvl;   		
						const array = txt.split(",");  
						let unique = [];  
						for(var i=0; i < array.length; i++){ 
							if(unique.indexOf(array[i]) === -1) { 
								unique.push(array[i]); 
							} 		
						} 							
						obj[checks[key].name] = unique.toString();  
					}
					else
					{
						obj[checks[key].name] = checks[key].value; 
					}	 					
					    	
				}	
			}
		}
	}

	const data = { 				
		months:obj,		
		types:sbj   	 	
	  }	
	  
	axios.post('/feeslot/create',data)		
		.then(response => { 
		console.log(response.data);   	  	
			if (response.data.status === 'successed') 
			{		
				this.setState({ showError: false, showSuccess: true, message: response.data.message});  			
			}
			else
			{
			    this.setState({ showError: true, showSuccess: false, message: response.data.message});	 			   
			}
		})
		.catch(error => {  	   
		   //console.log(error.message); 	
		    console.log(error.response.data);  
		})  
		
    
   }
 componentDidMount() {  		
    axios.get('/feeslot/index').then((response) => {
				
        if (response.status === 200) 
		{ 
			const categoryRows=response.data.data.categories?response.data.data.categories:[];
			const monthRows = response.data.data.months?response.data.data.months:[];    
			const slotRows = response.data.data.slots?response.data.data.slots:[];  
			const idset =[]; 
			let check_arr = [];    
			
			for(var key in categoryRows) 
			{	
				var index=0;  
				if(slotRows.hasOwnProperty(key)) 
				{ 					
					for(var ky in monthRows)
					{						  
						var str = monthRows[ky];  
						str = str.replace(/ +/g, "");
						
						if((slotRows[key]['FeeCatId']==categoryRows[key].fee_id)&&(slotRows[key]['FeeDueMonths'].indexOf(str) != -1))		
						{ 							
							idset.push('month_'+categoryRows[key].fee_id+'_'+index);    	 										
						}   
						index++;	  
					}
					
				}
			}

			for(var i=0; i < idset.length; i++){   
				if(check_arr.indexOf(idset[i]) === -1) { 
					check_arr.push(idset[i]); 				
				} 		
			} 	
	
			this.setState({
				categories: response.data.data.categories?response.data.data.categories:[],		
				months: response.data.data.months?response.data.data.months:[],   
				slots: response.data.data.slots?response.data.data.slots:[],
				idarr: check_arr	
			});
        }
        else {
			this.setState({
				categories: [],		
				months: [],
				slots: []  	  
			});
        }
    });  
	
 }	

  render() {    

    let categoryRows = this.state.categories;  		
	const monthRows = this.state.months;   
	const slotRows = this.state.slots;  
	const idset =[]; 
	let check_arr = []; 
		
	
	let monthList = Object.keys(monthRows).map(k => (  	  
	  <th key={k} scope="col"><span>{monthRows[k]}</span></th>       
	));	

	
	
	console.log(check_arr);  		 
	
	/* let monthList = monthRows.length > 0	
		&& monthRows.map((item, i) => {    			
		return ( 
				<th key={i} scope="col"><span>{item}</span></th>     
			)  		
	}, this);  
 */
	
	
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

<HeaderPart />

 {/***********************************
  HaderPart end
************************************/}

   {/***********************************
    Main wrapper start
************************************/}

<div id="main-wrapper">

          {/***********************************
            Content body start
        ************************************/}
          
		  <div className="content-body">
            <div className="container-fluid">
                <div className="row page-titles mx-0">	
                    <div className="col-sm-6 p-md-0">
                        <div className="welcome-text">
                            <h4>Create Fee Slot</h4>		
                        </div>
                    </div>                     
                </div>                

                <div className="row">
                    <div className="col-12">
                        <div className="card">                            
							<form onSubmit={this.handleCreate}> 		
							<div className="form-own pending-fee-table fee-chart-table">
							<div className="text-center"> 
								{this.state.showError ? <div className="error">{this.state.message}</div> : null}
								{this.state.showSuccess ? <div className="success">{this.state.message}</div> : null} 
							</div>
							  <div className="table-responsive">
								<table className="table table-bordered table-striped verticle-middle table-responsive-sm">  
									<thead>
										<tr>
											<th scope="col"><span>Fee Category</span></th>
											{monthList}   
											<th scope="col"><span>Fee Type</span></th>  
										</tr>		
									</thead>
									<tbody>
										{
										categoryRows.length > 0 && (  
                                        categoryRows.map((item,i)=>(
										<tr key={i}>  										
											<td key={i}><span>{item.name}</span></td>
											{Object.keys(monthRows).map((key,index) => ( 	
											<td key={key}>	  
											<div className="checkbox">	
											<label>						
													
											<input type="checkbox" id={'month_'+item.fee_id+'_'+index} name={'month_'+item.fee_id} value={key} onChange={this.handleCheck} checked={(this.state.idarr.includes('month_'+item.fee_id+'_'+index))?true:false} ref={node =>this.state.chkarr.push(node)}/></label>  		
											</div>				
											</td>	  					
										))}  
										<td>											   
											<select name={'feetype_'+item.fee_id} className="form-control" defaultValue={(slotRows.hasOwnProperty(i))?slotRows[i]['FeeSlotDesc']:''} onChange={(event)=>this.handleSelect(event)} ref={node =>this.state.slctarr.push(node)}>	
												<option value="">--Select--</option>		
												<option value="others">Others</option>		  
												<option value="yearly">Yearly</option>
												<option value="monthly">Monthly</option>
											 </select>   
										  </td>	
										</tr>
											))  
										  )   
										}     										
									</tbody>
								</table>
							  </div>
							</div>
                            <div className="text-right btn-submit-right">
							  <input type="submit" className="btn btn-primary" value="Save Details"/>
							</div>		
							</form>  
                        </div>
                    </div>		
                </div>
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
					
export default Feeslot;  