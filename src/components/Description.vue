<template>
  <article class="prose max-w-none">
    <h1 id="custom-domain-setting-demo">Custom Domain Setting Demo</h1>
    <blockquote>
      <p>This project delivers a system which allows users to customize service domain.</p>
    </blockquote>
    <h3 id="why">Why</h3>
    <p>For some CMS systems or SaaS allow users to set their custom domain. However, features depended on domain name would be failed when front-end code is built and bundled with webpack or other framework like Vue or React.
      These situations mean that env variables and keys of third party services need to be change during process of bundling Javascript files if hosting the project on other domains.</p>
    <p>This demo illustrates a method that allow to create different endpoints to the demo itself.
      It does not demonstrate triggering process of bundling new code and pointing to different S3 source in CloudFront.</p>
    <h3 id="how-to-use">How to Use</h3>
    <ul>
      <li>Use project default domains, <code>&lt;any-word&gt;.sp1.liweicheng00.link</code> and all processes would be done automatically. </li>
      <li>Or, use your own domain which you allow setting CNAME records for. <ul>
        <li>Set <strong>Your subdomain</strong> and <strong>Cloudfront domain</strong> record on your DNS provider.</li>
        <li>Set <strong>CNAME NAME</strong> and <strong>CNAME VALUE</strong> record on your DNS provider.</li>
        <li>Click <strong>Refresh</strong> after setting records.</li>
        <li>Wait for deploying.</li>
      </ul>
      </li>
    </ul>
    <h3 id="stack">Stack</h3>
    <ul>
      <li>Framework: <code>Vue</code> <code>Vite</code> <code>@tailwindcss</code> <code>@tailwindcss/typography</code> <code>FastAPI</code> <code>Pulumi</code></li>
      <li>AWS: <code>CloudFront</code> <code>S3</code> <code>ACM</code> <code>Elastic Beanstalk</code></li>
    </ul>
    <hr>

  </article>
</template>


<style scoped>

</style>
