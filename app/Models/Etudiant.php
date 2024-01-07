<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    use HasFactory;
    protected $table = 'etudiant';
    protected $primaryKey = 'cin';
    public $incrementing = false;
    protected $guarded =[];
    // protected $fillable = [
    //     'cin' , 'nom' , 'prenom' ,
    //     'date_naiss' , 'phone_number',
    //     'email' , 'password' ,
    //     'diplome_1' , 'diplome_2' , 'diplome_3',
    //     'moy_gen_dip1' , 'moy_gen_dip2' , 'moy_gen_dip3',
    //     'choix_1' , 'choix_2' , 'choix_3'
    // ];
}
