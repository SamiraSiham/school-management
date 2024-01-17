<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {
    public function login() {
        return view( 'login' );
    }

    public function AuthLogin( Request $req ) {
        // dd( $req->all() );
        if ( Auth::attempt( [ 'email' => $req->email, 'password' => $req->password ], true ) ) {
            if ( Auth::user()->role_id == 1 ) {
                // admins
                return redirect()->route( 'admin.dashboard' )->with( [ 'success'=>'login success', 'role'=>'admin' ] );
            } else if ( Auth::user()->role_id == 2 ) {
                // etudiants
                return redirect()->route( 'etudiants.dashboard' )->with( [ 'success'=>'login success', 'role'=>'etudiant' ] );
            } else if ( Auth::user()->role_id == 3 ) {
                // teachers
                return redirect()->route( 'teachers.dashboard' )->with( [ 'success'=>'login success', 'role'=>'teacher' ] );
            }
        } else {
            return redirect()->back()->with( [ 'error', 'incorrect credentials' ] );
        }
    }
}
