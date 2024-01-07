<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cours;

class CoursController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Cours::all();
        // return view("cours.index",compact('courses'));
        return response()->json($courses);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('cours.create');
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
            'id' => 'required',
            'nom_cours' => 'required',
            'masse_horaire' => 'required',
            'support' => 'required'
        ],[
            'id.required' => 'required field',
            'nom_cours.required' => 'required field',
            'masse_horaire.required' => 'required field',
            'support.required' => 'required field'
        ]);
        $cours = new Cours;
        $cours->id = $req->id;
        $cours->nom_cours => $req->nom_cours;
        $cours->masse_horaire => $req->masse_horaire;
        $cours->support => $req->support;
        $cours->save();

        return response()->json(['message' => 'added successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cours = Cours::where('id', $id)->first();
        // return view('cours.show',compact('cours'));
        return response()->json($cours);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cours = Cours::where('id', $id)->first();
        // return view('cours.edit',compact('cours'));
        return response()->json($cours);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, Cours $cours)
    {
        // $rules=[
        //     'nom_cours' => 'required',
        //     'masse_horaire' => 'required',
        //     'support' => 'required'
        // ];
        $cours->update([
            'nom_cours' => $req->nom_cours,
            'masse_horaire' => $req->masse_horaire,
            'support' => $req->support
        ]);
        // return redirect()->back()->with(['success'=>'update success']);
        return response()->json(['message'=>'updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Cours::where('id', $id)->delete();
        // return redirect()->route('cours.index');
        return response()->json(['message'=>'deleted successfully']);
    }
}
