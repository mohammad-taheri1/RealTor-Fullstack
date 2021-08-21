<div class="my-card" style="height: 250px">
    <h3 class="font-normal text-xl py-6 -ml-6 mb-3 border-l-4 border-blue-custom pl-4">
        <a href="{{ $project->path() }}" class="text-black no-decoration"> {{ $project->title }} </a>
    </h3>

    <div class="text-muted"> {{ Str::limit($project->description, 100) }} </div>
</div>
