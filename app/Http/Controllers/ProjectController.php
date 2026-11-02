<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller
{
    private function rules(?Project $project = null): array
    {
        return [
            'title'          => ['required', 'string', 'max:100',
                                 Rule::unique('projects', 'title')->ignore($project?->id)],
            'description'    => ['required', 'string', 'min:20', 'max:1000'],
            'tech_stack'     => ['required', 'string', 'max:150'],
            'project_url'    => ['nullable', 'url', 'max:255'],
            'repo_url'       => ['nullable', 'url', 'max:255'],
            'image'          => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'date_completed' => ['nullable', 'date', 'before_or_equal:today'],
            'status'         => ['required', Rule::in(['planned', 'in progress', 'completed'])],
        ];
    }

    private function messages(): array
    {
        return [
            'title.unique'    => 'You already have a project with this title.',
            'description.min' => 'Please describe the project in at least 20 characters.',
            'image.max'       => 'The image must not be larger than 2 MB.',
            'status.in'       => 'Status must be planned, in progress, or completed.',
        ];
    }

    public function index()
    {
        return Inertia::render('Projects/Index', [
            'projects' => Project::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate($this->rules(), $this->messages());

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('projects', 'public');
        }

        Project::create($data);

        return redirect()->route('projects.index')->with('success', 'Project created successfully.');
    }

    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', ['project' => $project]);
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate($this->rules($project), $this->messages());

        if ($request->hasFile('image')) {
            if ($project->image) {
                Storage::disk('public')->delete($project->image);
            }
            $data['image'] = $request->file('image')->store('projects', 'public');
        } else {
            unset($data['image']);
        }

        $project->update($data);

        return redirect()->route('projects.index')->with('success', 'Project updated successfully.');
    }

    public function destroy(Project $project)
    {
        if ($project->image) {
            Storage::disk('public')->delete($project->image);
        }
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Project deleted successfully.');
    }
}
