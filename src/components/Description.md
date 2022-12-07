**# Custom Domain Setting Demo
> This project delivers a system which allows users to customize service domain.

### Why
For some CMS systems or SaaS allow users to set their custom domain. However, features depended on domain name would be failed when front-end code is built and bundled with webpack or other framework like Vue or React. 
These situations mean that env variables and keys of third party services need to be change during process of bundling Javascript files if hosting the project on other domains.

This demo illustrates a method that allow to create different endpoints to the demo itself. 
It does not demonstrate triggering process of bundling new code and pointing to different S3 source in CloudFront.
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
