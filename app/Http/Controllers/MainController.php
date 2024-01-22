<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class MainController extends Controller
{


    public function index(){
        $num = rand (1,100);
        return (Inertia::render("Tutoria/Index",compact("num",)));
    }
    //
    public function proyectos(){

        return (Inertia::render("Tutoria/Proyectos",));
    }
    //
}
