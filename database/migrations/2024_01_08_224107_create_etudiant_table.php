<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('etudiant', function (Blueprint $table) {
            $table->string('cin')->primary();
            $table->string('cne');
            $table->string('nom');
            $table->string('prenom');
            $table->date('date_naiss');
            $table->string('phone_number');
            $table->string('email')->unique();
            $table->string('password');
            $table->binary('diplome_1');
            $table->binary('diplome_2')->nullable();
            $table->binary('diplome_3')->nullable();
            $table->double('moy_gen_dip1');
            $table->double('moy_gen_dip2');
            $table->double('moy_gen_dip3')->nullable();
            $table->string('filliere_id')->nullable();
            $table->foreign('filliere_id')->nullable()->references('id')->on('filliere')->onDelete('cascade');
            $table->foreignId('role_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('cascade')->default('2');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('etudiant');
    }
};
