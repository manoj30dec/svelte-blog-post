<script lang="ts">
  import { onMount } from 'svelte';

  let comments: { postId: number; id:number, email:string, body:string, name: string }[] = [];
  let loading = true;

  onMount(async () => {
    // Runs only in browser
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    comments = await res.json();
    console.log("data fetched on mount component", comments)
    loading = false;
  });
  const deleteThis=(event:MouseEvent,id:number)=>{
    event.preventDefault();
    const updatedComments = comments.filter((item)=>item.id !== id);
    comments = updatedComments;
  }
</script>

<h1>Users (Client-side)</h1>

{#if loading}
  <p>Loading...</p>
{:else}
<table border="1" cellpadding="10" cellspacing="0">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
            <th>body</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
           {#each comments as comment}
        <tr>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
              <td><a href="#" onclick={()=>deleteThis(event,comment.id)}>Delete</a></td>
        </tr>
         {/each}
    </tbody>
</table>
{/if}
