<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TeacherController;
use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\CoursController;
use App\Http\Controllers\FilliereController;
use App\Http\Controllers\LoginRegisterController;use App\Http\Controllers\Sceance;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('teacher', TeacherController::class);
Route::resource('etudiant', EtudiantController::class);
Route::resource('candidat', InscriptionController::class);
Route::resource('filliere', FilliereController::class);
Route::resource('cours', CoursController::class);

Route::get('/seance',[Sceance::class,'index']);
Route::post('/seance/create',[Sceance::class,'store']);


Route::post('login-prof', [LoginRegisterController::class, 'loginProf']);
Route::post('login-etudiant', [LoginRegisterController::class, 'loginEtudiant']);
Route::post('login-admin', [LoginRegisterController::class, 'loginAdmin']);
Route::post('login-candidat', [LoginRegisterController::class, 'loginCandidat']);