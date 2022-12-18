<template>
  <article class="prose max-w-none">
    <h1 id="custom-domain-setting">Custom Domain Setting</h1>
    <blockquote>
      <p>This project delivers a system which allows users to customize service domain.</p>
    </blockquote>
    <h3 id="why">Why</h3>
    <p>Some CMS systems or SaaS platforms allow users to set their own custom domain. However, when the front-end code is built and bundled with a framework like webpack or Vue or React, features that depend on the domain name may fail. This means that env variables and keys for third party services need to be changed during the process of bundling JavaScript files if the project is being hosted on a different domain.</p>
    <p>This demo demonstrates a method for creating different domain endpoints for the demo itself. It does not cover the process of triggering the bundling of new code and pointing to different S3 sources in CloudFront.</p>
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
