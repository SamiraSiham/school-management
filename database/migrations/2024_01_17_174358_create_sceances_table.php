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
        Schema::create('sceances', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('filiere');
            $table->string('intitule');
            $table->date('dateSceance');
            $table->time('heureDebut');
            $table->time('heureFin');
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
        Schema::dropIfExists('sceances');
    }
};
