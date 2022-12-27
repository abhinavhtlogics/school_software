<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Htl_user;
use DB;
use Illuminate\Http\Request;


class LoginController extends Controller
{
    
    public function test(Request $req){
       
        $userId=$req->input('userId');
        $password=$req->input('paasWord');
        // echo $userId;
        // echo $password;
        $data=array();
       $data= DB::table('usermaster')
        ->select('userId','UserPassword')
        ->where('UserId', '=', $userId)
        ->where('UserPassword', '=', md5($password))
        ->get();

       
     
       // echo count($data);

        if(count($data) == 1){
            return ['status'=>True, 'message'=>'Login Successfull'];
        }
        else{
            return ['status'=>False, 'message'=>'Username and Password is incorrect'];
        }
       // echo "<br>";
        
    }
}
