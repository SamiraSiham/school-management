<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Etudiant;

class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $etudiants = Etudiant::all();
        // return view("etudiants.index",compact('etudiants'));
        return response()->json([
            'etudiants' => $etudiants,
            'message' => 'success'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create()
    // {
    //     return view('etudiants.create');
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $req->validate([
            'cin' => 'required',
            'nom' => 'required',
            'prenom' => 'required',
            'date_naiss' => 'required',
            // 'phone_number'=>'required|regex:/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/gm',
            'phone_number'=>'required',
            'email' => 'required|email|unique:etudiant',
            'password' => 'required',
            'diplome_1' => 'required',
            'diplome_2' => 'required',
            'moy_gen_dip1' => 'required',
            'moy_gen_dip2' => 'required',
            'choix_1'=> 'required',
            'choix_2'=> 'required',
            'choix_3'=> 'required'
        ]);
        $etudiant = new Etudiant;
        $etudiant->cin = $req->cin;
        $etudiant->nom = $req->nom;
        $etudiant->prenom = $req->prenom;
        $etudiant->date_naiss = $req->date_naiss;
        $etudiant->phone_number = $req->phone_number;
        $etudiant->email = $req->email;
        $etudiant->password = $req->password; 
        $etudiant->diplome_1 = $req->diplome_1;
        $etudiant->diplome_2 = $req->diplome_2;
        $etudiant->diplome_3 = $req->diplome_3;
        $etudiant->moy_gen_dip1 = $req->moy_gen_dip1;
        $etudiant->moy_gen_dip2 = $req->moy_gen_dip2;
        $etudiant->moy_gen_dip3 = $req->moy_gen_dip3;
        $etudiant->choix_1 = $req->choix_1;
        $etudiant->choix_2 = $req->choix_2;
        $etudiant->choix_3 = $req->choix_3;
        $etudiant->save();

        return response()->json(['message' => 'student added successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($cin)
    {
        // return view('etudiants.show',compact('student'));
        $student = Etudiant::where('cin',$cin)->first();
        return response()->json($student);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        // return view('etudiants.edit', compact('student'));
        return response()->json($student);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, Etudiant $st)
    {
        // $req->validate([
        //     'nom' => 'required',
        //     'prenom' => 'required',
        //     'date_naiss' => 'required',
        //     // 'phone_number'=>'required|regex:/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/gm',
        //     'phone_number'=>'required',
        //     'email' => 'required|email',
        //     // 'diplome_1' => 'required',
        //     // 'diplome_2' => 'required',
        //     // 'moy_gen_dip1' => 'required',
        //     // 'moy_gen_dip2' => 'required',
        //     // 'choix_1'=> 'required',
        //     // 'choix_2'=> 'required',
        //     // 'choix_3'=> 'required'
        // ],[
        //     'nom.required' => 'required field',
        //     'prenom.required' => 'required field',
        //     'date_naiss.required' => 'required field',
        //     'phone_number.required'=>'required field',
        //     'email.required' => 'required field',
        //     'email.email' => 'incorrect email format',
        //     'password.required' => 'required field',
        //     'diplome_1.required' => 'required field',
        //     'diplome_2.required' => 'required field',
        //     'moy_gen_dip1.required' => 'required field',
        //     'moy_gen_dip2.required' => 'required field',
        //     'choix_1.required'=> 'required field',
        //     'choix_2.required'=> 'required field',
        //     'choix_3.required'=> 'required field'
        // ]);
        $st->update([
            'nom' => $req->nom,
            'prenom' => $req->prenom,
            'date_naiss' => $req->date_naiss,
            'phone_number'=>$req->phone_number,
            'email' => $req->email,
            'password' => $req->password,
            'diplome_1' => $req->diplome_1,
            'diplome_2' => $req->diplome_2,
            'diplome_3' => $req->diplome_3,
            'moy_gen_dip1' => $req->moy_gen_dip_1,
            'moy_gen_dip2' => $req->moy_gen_dip_2,
            'moy_gen_dip3' => $req->moy_gen_dip_3,
            'choix_1'=> $req->choix_1,
            'choix_2'=> $req->choix_2,
            'choix_3'=> $req->choix_3
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Student::where('id', $id)->delete();
        return redirect()->route('etudiants.index');
    }
}
