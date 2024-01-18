<?php

namespace App\Http\Controllers;

use App\Models\sceances;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Sceance extends Controller
{
    public function index()
    {
        $sceance = sceances::all();
        return response()->json([
            'Sceances' => $sceance,
        ]);
    }
    public function store(Request $request)
    {
        $sceance = new sceances;
        $sceance->name = $request->name;
        $sceance->filiere = $request->filiere;
        $sceance->intitule = $request->intitule;
        $sceance->dateSceance = $request->dateSceance;
        $sceance->heureDebut = $request->heureDebut;
        $sceance->heureFin = $request->heureFin;
        $sceance->save();
        return response()->json(['message' => 'Sceance added successfully']);
    }
}
