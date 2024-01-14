<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admin')->insert([
            [
                'id' => 1,
                'first_name' => 'Samira',
                'last_name' => 'Siham',
                'email' => 'SihamSamira@um5.ac.ma',
                'password' => 'SihamSamira.um5'
            ],
            [
                'id' => 2,
                'first_name' => 'Haytam',
                'last_name' => 'Rais',
                'email' => 'RaisHaytam@um5.ac.ma',
                'password' => 'RaisHaytam.um5'
            ],
        ],
        );
    }
}
