<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Filliere;

class FilliereController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $fillieres = Filliere::all();
        // return view("fillieres.index",compact("fillieres"));
        return response()->json(['fillieres' => $fillieres]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('filliere.create');
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
            'intitule' => 'required'
        ],[
            'id.required' => 'required field';
            'intitule.required' => 'required field';
        ]);
        $filliere = new Filliere;
        $filliere->id = $req->id;
        $filliere->intitule = $req->intitule;
        $filliere->save();

        return response()->json(['message' => 'added successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Filliere  $filliere
     * @return \Illuminate\Http\Response
     */
    public function show(Filliere $filliere)
    {
        // return view('fillieres.show',compact('filliere'));
        return response()->json($filliere);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Filliere  $filliere
     * @return \Illuminate\Http\Response
     */
    public function edit(Filliere $filliere)
    {
        // return view('fillieres.edit',compact('filliere'));
        return response()->json($filliere);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Filliere  $filliere
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, Filliere $filliere)
    {
        $req->vaidate([
            'intitule' => 'required'
        ],[
            'intitule.required' => 'required field'
        ]);
        $filliere->update([
            'intitule' => $req->initutle;
        ]);
        return response()->json(['message'=>'update success']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Filliere::where('id', $id)->delete();
        // return redirect()->route('fillieres.index');
        return response()->json(['message'=>'deleted successfully']);
    }
}
