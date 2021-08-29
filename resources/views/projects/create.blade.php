@extends('layouts.app')

@section('content')
<div class="row justify-content-center">
    <div class="card col-md-8 p-4">
        <form method="POST" action="/projects">
            @csrf
            <h1 class="heading is-l">lets start something new </h1>


            <div class="form-group">
                <label class="label" for="title">Title</label>
                <input type="text" class="input form-control" name="title" placeholder="My next project...">
            </div>

            <div class="form-group">
                <label class="label" for="description">Description</label>
                <textarea name="description" class="form-control" rows="10" placeholder="description..."></textarea>
            </div>

            <div class="form-group">
                <div class="control">
                    <button type="submit" class="button is-link button-blue py-2 px-4">Create Project</button>
                    <a href="/projects">Cancel</a>
                </div>
            </div>

        </form>
    </div>
</div>
@endsection

