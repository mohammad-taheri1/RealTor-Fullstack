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
                @include('projects.card')
            </div>
        @empty
            <div>No Projects yet.</div>
        @endforelse
    </main>
@endsection
