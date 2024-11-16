<script lang="ts">

  import { onMount } from 'svelte';
  import { fetchTodos } from '$lib/modules/todos';
  import type { Todo } from '$lib/utils/validation';
	import { login } from '$lib/auth';

  let todos: Todo[] = [];
  let loading: boolean = false;
  let error: string | null = null;

  const loadTodos = async () => {
    try {
      loading = true;
      todos = await fetchTodos();
      console.log(todos);
    } catch (err: any) {
      error = "failed to load todos" + err.message;
      console.error(err);
    } finally {
      loading = false;
    }
  }
</script>

<style>
    .todo { margin: 10px 0; display: flex; align-items: center; justify-content: space-between; }
    .todo input[type='checkbox'] { margin-right: 10px; }
</style>

<h1>Todo List</h1>

<!-- Daftar Todos -->
{#if loading}
    <p>Loading...</p>
{:else if error}
    <p>{error}</p>
{:else if todos.length === null}
    <p>No todos yet rawwrr.</p>
{:else}
  {#each todos as todo}
  <script>console.log(todos)</script>
    <strong>rawrr</strong>
        <div class="todo">
            <label>
                - <input
                    type="checkbox"
                    checked={todo.is_complete}
                    />
                    <!-- on:change={() => handleToggleComplete(todo.id, !todo.is_complete)} -->

                <span class={todo.is_complete ? 'TRUE' : ''}>{todo.task}</span>
            </label>
            <!--- <button on:click={() =>}>Delete</button> -->
        </div>
    {/each}
{/if}
