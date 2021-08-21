@extends('layouts.app')

@section('content')
    <header class="d-flex items-center mb-3 py-4">
        <div class="d-flex justify-between w-full items-end">
            <h2 class="text-muted text-sm font-normal">My Projects</h2>

            <a href="/projects/create" class="button-blue py-2 px-4">New Project</a>
        </div>
    </header>

    <main class="row">
        @forelse ($projects as $project)
            <div class="col-md-4 px-3 pb-5">
                <div class="bg-white p-4 rounded-xl shadow" style="height: 300px">
                    <h3 class="font-normal text-xl py-6 -ml-6 mb-3 border-l-4 border-blue-custom pl-4">
                        <a href="{{ $project->path() }}" class="text-black no-decoration"> {{ $project->title }} </a>
                    </h3>

                    <div class="text-muted"> {{ Str::limit($project->description, 100) }} </div>
                </div>
            </div>
        @empty
            <div>No Projects yet.</div>
        @endforelse
    </main>
@endsection
