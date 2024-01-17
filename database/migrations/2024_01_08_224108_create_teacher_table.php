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
        Schema::create('teacher', function (Blueprint $table) {
            // $table->id('cin_teacher');
            $table->string('cin')->primary();
            $table->string('last_name');
            $table->string('first_name');
            $table->string('phone_number');
            $table->date('date_inscription');
            $table->integer('salaire');
            $table->string('email');
            $table->string('mot_de_passe');
            $table->foreignId('role_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('teacher');
    }
};
