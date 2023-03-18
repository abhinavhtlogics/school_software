<?php
 
namespace App\Models;  
use Illuminate\Database\Eloquent\Model;		
 
class FeeSlot extends Model		
{	
    protected $table = 'fee_slot_master';           			
    protected $fillable = ['FeeSlotId','FeeCatId','FeeSlotDesc','FeeDueMonths','FeeYear','SessionId','SchoolCode'];
	public $timestamps = false;	  		
}