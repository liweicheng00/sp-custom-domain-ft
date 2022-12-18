# Custom Domain Setting
> This project delivers a system which allows users to customize service domain.

### Why
Some CMS systems or SaaS platforms allow users to set their own custom domain. However, when the front-end code is built and bundled with a framework like webpack or Vue or React, features that depend on the domain name may fail. This means that env variables and keys for third party services need to be changed during the process of bundling JavaScript files if the project is being hosted on a different domain.

This demo demonstrates a method for creating different domain endpoints for the demo itself. It does not cover the process of triggering the bundling of new code and pointing to different S3 sources in CloudFront.
### How to Use
* Use project default domains, `<any-word>.sp1.liweicheng00.link` and all processes would be done automatically. 
* Or, use your own domain which you allow setting CNAME records for. 
  * Set **Your subdomain** and **Cloudfront domain** record on your DNS provider.
  * Set **CNAME NAME** and **CNAME VALUE** record on your DNS provider.
  * Click <strong>Refresh</strong> after setting records.
  * Wait for deploying.

### Stack
* Framework: `Vue` `Vite` `@tailwindcss` `@tailwindcss/typography` `FastAPI` `Pulumi`
* AWS: `CloudFront` `S3` `ACM` `Elastic Beanstalk`

*****
