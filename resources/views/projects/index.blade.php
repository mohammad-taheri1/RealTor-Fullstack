@extends('layouts.app')

@section('content')
        <div class="flex items-center mb-3">
            <a href="/projects/create">New Project</a>
        </div>

        <div class="row">
            @forelse ($projects as $project)
            <div class="col-md-4 px-3">
                <div class="bg-white p-4 rounded shadow" style="height: 300px">
                    <h3 class="font-normal text-xl py-6"> {{ $project->title }}</h3>

                    <div class="text-muted"> {{ Str::limit($project->description, 100) }} </div>
                </div>
            </div>
            @empty
                <div>No Projects yet.</div>
            @endforelse
        </div>
@endsection
