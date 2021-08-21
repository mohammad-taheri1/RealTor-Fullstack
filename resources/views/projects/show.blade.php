@extends('layouts.app')

@section('content')
    <header class="d-flex items-center mb-3 py-4">
        <div class="d-flex justify-between w-full items-end">
            <p class="text-black">
                <a href="/projects" class="text-black no-decoration">My Projects</a> / {{ $project->title }}
            </p>

            <a href="/projects/create" class="button-blue py-2 px-4">New Project</a>
        </div>
    </header>

    <main>
        <div class="row -mx-3">
            <div class="col-xl-9 px-3 mb-5">
                <div class="mb-5">
                    <h2 class="text-lg text-muted font-normal mb-3">Tasks</h2>

                    {{-- tasks --}}
                    <div class="my-card mb-3">Lorem ipsum.</div>
                    <div class="my-card mb-3">Lorem ipsum.</div>
                    <div class="my-card mb-3">Lorem ipsum.</div>
                    <div class="my-card">Lorem ipsum.</div>
                </div>


                <div>
                    <h2 class="text-lg text-muted font-normal mb-3">General Notes</h2>

                    {{-- general notes --}}
                    <textarea class="my-card w-full" style="min-height: 200px">Lorem ipsum.</textarea>
                </div>
            </div>

            <div class="col-xl-3 px-3">
                 @include('projects.card')
            </div>
        </div>
    </main>


@endsection
