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
        Schema::create('cours_teacher_filliere', function (Blueprint $table) {
            $table->biginteger('id');
            
            $table->string('cours_id');
            $table->foreign('cours_id')->references('id')->on('cours')->onUpdate('cascade')->onDelete('cascade');
            
            $table->string('teacher_id');
            $table->foreign('teacher_id')->references('cin')->on('teacher')->onUpdate('cascade')->onDelete('cascade');
            
            $table->string('filliere_id');
            $table->foreign('filliere_id')->references('id')->on('filliere')->onUpdate('cascade')->onDelete('cascade');
            
            $table->primary(['id','cours_id', 'teacher_id', 'filliere_id']);

            $table->date('date_debut');
            $table->date('date_fin');
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
        Schema::dropIfExists('cours_teacher_filliere');
    }
};
