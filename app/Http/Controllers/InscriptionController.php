<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inscription;
use App\Models\Filliere;

class InscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $candidats = Inscription::all();
        $fillieres = Filliere::all();
        // dd($candidats);
        return response()->json([
            'candidats' => $candidats,
            'message' => 'success'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('candidats.create');
    }

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
            'cne' => 'required',
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
        // dd($req);
        $candidat = new Inscription;
        $candidat->cin = $req->cin;
        $candidat->cne = $req->cne;
        $candidat->nom = $req->nom;
        $candidat->prenom = $req->prenom;
        $candidat->date_naiss = $req->date_naiss;
        $candidat->phone_number = $req->phone_number;
        $candidat->email = $req->email;
        $candidat->password = $req->password; 
        $candidat->diplome_1 = $req->diplome_1;
        $candidat->diplome_2 = $req->diplome_2;
        $candidat->diplome_3 = $req->diplome_3;
        $candidat->moy_gen_dip1 = $req->moy_gen_dip1;
        $candidat->moy_gen_dip2 = $req->moy_gen_dip2;
        $candidat->moy_gen_dip3 = $req->moy_gen_dip3;
        $candidat->choix_1 = $req->choix_1;
        $candidat->choix_2 = $req->choix_2;
        $candidat->choix_3 = $req->choix_3;
        $candidat->save();

        return response()->json(['message' => 'candidate added successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($cin)
    {
        $candidat = Inscription::where('cin',$cin)->first();
        return response()->json($candidat);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Inscription $candidat)
    {
        return response()->json($candidat);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Inscription $candidat)
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
        $candidat->update([
            'cne' => $req->cne,
            'nom' => $req->nom,
            'prenom' => $req->prenom,
            'date_naiss' => $req->date_naiss,
            'phone_number'=>$req->phone_number,
            'email' => $req->email,
            'password' => $req->password,
            'diplome_1' => $req->file(diplome_1),
            'diplome_2' => $req->file(diplome_2),
            'diplome_3' => $req->file(diplome_3),
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
    public function destroy($cin)
    {
        Inscription::where('cin', $cin)->delete();
        return redirect()->route('candidats.dashboard')->with(['success' => 'inscription supprimee']);
    }
}
