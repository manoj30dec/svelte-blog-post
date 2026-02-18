<script>
    // import {invalidate} from "$app/navigation";
    export let form;
    let formData = {
        name:form?.values?.name ?? '',
        email:form?.values?.email ?? '',
        message:form?.values?.message ?? ''
    }

</script>
<h1>Contact Us</h1>
<!-- <form action="/thankyou" method="post" class="mt-5" style="max-width:600px;"> -->
<form  method="post" class="mt-5" style="max-width:600px;">
  <!-- Name -->
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name="name" bind:value="{formData.name}" placeholder="Your Name" >
    {#if form?.errors?.name}
        <p style="color: red">{form.errors.name}</p>
    {/if}
  </div>

  <!-- Email -->
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" bind:value="{formData.email}" placeholder="you@example.com" >
    {#if form?.errors?.email}
        <p style="color: red">{form.errors.email}</p>
    {/if}
  </div>

  <!-- Message -->
  <div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <textarea class="form-control" id="message" name="message" bind:value={formData.message} rows="5" placeholder="Write your message here..." ></textarea>
    {#if form?.errors?.message}
        <p style="color: red">{form.errors.message}</p>
    {/if}
  </div>

  <!-- Submit Button -->
  <div class="d-grid">
    <button type="submit" class="btn btn-primary btn-lg">Submit</button>
  </div>
</form>
