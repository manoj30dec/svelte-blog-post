<script lang="ts">
    import type { Data } from './type.js'; 
    export let data:Data;
    // console.log(data)
</script>
<h1>Fetched Users List with server side rendering</h1>
<table border="1" cellpadding="10" cellspacing="0">
    <thead>
        <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Username</th>
            <th>email</th>
        </tr>
    </thead>
    <tbody>
        {#each data.users as {id, name, username, email} }
        <tr>
            <td>{id}</td>
            <td> {name}</td>
            <td>{username}</td>
            <td>{email}</td>
        </tr>
    {/each}
    </tbody>
</table>