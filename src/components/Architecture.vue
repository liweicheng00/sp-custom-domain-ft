<template>
  <div class="prose max-w-none">
    <h3 id="explanation">Explanation</h3>
    <ul>
      <li>The server create cloudfront distribution and SSL certificate for domain owed by the user.</li>
      <li>After the SSL certificate is verified by AWS ACM, the server set domain aliases to the distribution.</li>
    </ul>
    <blockquote>
      <p>Note that distributions can point to different S3 origin for proposes.
        For example, APIs trigger CI/CD workflow to build another front-end static files with difference third party
        servers key and deploy to other s3 buckets.</p>
    </blockquote>
    <p><img src="../assets/arch.png" alt="bears"></p>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
