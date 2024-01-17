<?php

namespace App\Http\Controllers;
use App\Models\Teacher;
use App\Models\Admin;
use App\Models\Etudiant;
use App\Models\Inscription;
use Illuminate\Http\Request;

class LoginRegisterController extends Controller
{
    public function loginProf(Request $req){
        $req->validate([
            'email' => 'required|email',
            'password' => 'required',
        ],[
            'email.required' => 'required field',
            'email.email' => 'incorrect email format',
            'password.required' => 'required field',
        ]);
        $teacher = Teacher::where('email',$req->email)->first();
        // return response()->json($teacher);
        if($teacher->mot_de_passe == $req->password){
            return response()->json($teacher);
        }else{
            return response()->json(['status' => 500]);
        }
    }
    public function loginEtudiant(Request $req){
        $req->validate([
            'email' => 'required|email',
            'password' => 'required',
        ],[
            'email.required' => 'required field',
            'email.email' => 'incorrect email format',
            'password.required' => 'required field',
        ]);
        $etudiant = Etudiant::where('email',$req->email)->first();
        if($etudiant->password == $req->password){
            return response()->json($etudiant);
        }
    }
    public function loginCandidat(Request $req){
        $candidat = Inscription::where('email',$req->email)->first();
        if($candidat->password == $req->password){
            return response()->json($candidat);
        }
    }
    
    public function loginAdmin(Request $req){
        $admin = Admin::where('email',$req->email)->first();
        return response()->json($admin);
        // dd($admin);
        if($admin->password == $req->password){
            return response()->json($admin);
        }
    }
}
