<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teacher;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class teacherController extends Controller {

    

    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */

    public function index() {
        $teachers = Teacher::all();
        // return view( 'teachers.index', compact( 'teachers' ) );
        return response()->json($teachers);
    }

    /**
    * Show the form for creating a new resource.
    *
    // * @return \Illuminate\Http\Response
    */

    // public function create() {
    //     return view( 'teachers.create' );
    // }

    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $req
    * @return \Illuminate\Http\Response
    */

    public function store( Request $req ) {

        $req->validate([
            'cin' => 'required',
            'last_name' => 'required',
            'first_name' => 'required',
            // 'phone_number'=>'required|regex:/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/gm',
            'phone_number'=>'required',
            'date_inscription'=>'required',
            'salaire' => 'required',
            'email' => 'required|email|unique:teacher',
            'mot_de_passe' => 'required'
        ],[
            'cin.required' => 'required field',
            'last_name.required' => 'required field',
            'first_name.required' => 'required field',
            'phone_number.required' => 'required field',
            // 'phone_number.regex' => 'incorrect form',
            'date_inscription.required' => 'required field',
            'salaire.required' => 'required field',
            'email.required' => 'required field',
            'email.email' => 'email format',
            'mot_de_passe.required' => 'required field'
        ]);
        $teacher = new Teacher;
        $teacher->cin = $req->cin;
        $teacher->last_name = $req->last_name;
        $teacher->first_name = $req->first_name;
        $teacher->phone_number = $req->phone_number;
        $teacher->date_inscription = $req->date_inscription;
        $teacher->salaire = $req->salaire;
        $teacher->email = $req->email;
        $teacher->mot_de_passe = $req->mot_de_passe;

        $teacher->save();
        // return redirect()->back()->with( [ 'success'=>'added successfully' ] );
        return response()->json("Added successfully");
    }

    /**
    * Display the specified resource.
    *
    // * @param  Teacher $teacher
    // * @return \Illuminate\Http\Response
    */

    public function show( Teacher $teacher ) {
        // return view( 'teachers.show', compact( 'teacher' ) );
        return response()->json($teacher);
    }

    /**
    * Show the form for editing the specified resource.
    *
    // * @param  Teacher $teacher
    // * @return \Illuminate\Http\Response
    */

    public function edit( Teacher $teacher ) {
        // return view( 'teachers.edit', compact( 'teacher' ) );
        return response()->json($teacher);
    }

    /**
    * Update the specified resource in storage.
    *
    // * @param  \Illuminate\Http\Request  $request
    // * @param  string  $id
    // * @return \Illuminate\Http\Response
    */

    public function update( Request $req, Teacher $teacher ) {

        $req->validate([
            'last_name' => 'required',
            'first_name' => 'required',
            // 'phone_number'=>'required|regex:/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/gm',
            'phone_number'=>'required',
            'date_inscription'=>'required',
            'salaire' => 'required',
            'email' => 'required|email|unique:teacher',
        ],[
            'last_name.required' => 'required field',
            'first_name.required' => 'required field',
            'phone_number.required' => 'required field',
            // 'phone_number.regex' => 'incorrect form',
            'date_inscription.required' => 'required field',
            'salaire.required' => 'required field',
            'email.required' => 'required field',
            'email.email' => 'email format',
        ]);

        $teacher->update( [
            'last_name' => $req->last_name,
            'first_name' => $req->first_name,
            'phone_number' => $req->phone_number,
            'date_inscription' => $req->date_inscription,
            'salaire' => $req->salaire,
            'email' => $req->email,
        ] );

        // return redirect()->back()->with( [ 'success'=>'update success' ] );
        return response()->json("Updated Successfully");
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */

    public function destroy( Teacher $teacher ) {
        $teacher->delete();
        // Teacher::where('cin', $cin)->delete();
        // return redirect()->route('teachers.index')->with(['success'=>'deleted successfully']);
        return response()->json('deleted successfully');
    }
}
