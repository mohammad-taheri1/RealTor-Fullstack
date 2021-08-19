<?php

namespace Tests\Unit;

use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProjectTest extends TestCase
{
    use RefreshDatabase;

   /** @test */
   public function it_has_a_path()
   {
      $project = Project::factory()->make();

      $this->assertEquals('/projects/' . $project->id, $project->path());
   }
}
