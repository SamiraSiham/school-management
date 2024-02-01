<?php

namespace App\Http\Controllers;
use App\Models\Teacher;
use App\Models\Admin;
use App\Models\Etudiant;
use App\Models\Inscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginRegisterController extends Controller {
    public function loginProf( Request $req ) {
        $req->validate( [
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'required field',
            'email.email' => 'incorrect email format',
            'password.required' => 'required field',
        ] );
        $teacher = Teacher::where( 'email', $req->email )->first();
        // return response()->json( $teacher );
        if ( $teacher->mot_de_passe == $req->password ) {
            return response()->json( $teacher );
        } else {
            return response()->json( [ 'status' => 500 ] );
        }
    }

    public function loginEtudiant( Request $req ) {
        $req->validate( [
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'required field',
            'email.email' => 'incorrect email format',
            'password.required' => 'required field',
        ] );
        $etudiant = Etudiant::where( 'email', $req->email )->first();
        if ( $etudiant->password == $req->password ) {
            return response()->json( $etudiant );
        }
    }

    public function loginCandidat( Request $req ) {
        $candidat = Inscription::where( 'email', $req->email )->first();
        if ( $candidat->password == $req->password ) {
            return response()->json( $candidat );
        }
    }

    public function loginAdmin( Request $req ) {
        $admin = Admin::where( 'email', $req->email )->first();
        return response()->json( $admin );
        // dd( $admin );
        if ( $admin->password == $req->password ) {
            return response()->json( $admin );
        }
    }

    public function validateStudents() {
        $students = DB::table( 'inscription' ) ->orderBy( 'moy_gen_dip2', 'desc' )->limit( 5 )->get();
        
        for ( $i = 0; $i < count( $students );$i++ ) {
            $new_et = new Etudiant;
            $new_et->cin = $students[$i]->cin;
            $new_et->cne = $students[$i]->cne;
            $new_et->nom = $students[$i]->nom;
            $new_et->prenom = $students[$i]->prenom;
            $new_et->date_naiss = $students[$i]->date_naiss;
            $new_et->phone_number = $students[$i]->phone_number;
            $new_et->email = $students[$i]->email;
            $new_et->password = $students[$i]->password;

            $new_et->diplome_1 = $students[$i]->diplome_1;
            $new_et->diplome_2 = $students[$i]->diplome_2;
            $new_et->diplome_3 = $students[$i]->diplome_3;
            $new_et->moy_gen_dip1 = $students[$i]->moy_gen_dip1;
            $new_et->moy_gen_dip2 = $students[$i]->moy_gen_dip2;
            $new_et->moy_gen_dip3 = $students[$i]->moy_gen_dip3;
            

            $new_et->save();

        }
        return response()->json( [ 'res' => 'success' ] );
    }
}
