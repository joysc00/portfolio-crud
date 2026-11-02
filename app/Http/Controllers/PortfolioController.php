<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    // Public page: reads the Projects section from the database.
    public function index(): Response
    {
        return Inertia::render('Portfolio', [
            'projects' => Project::latest()->get(),
        ]);
    }
}
