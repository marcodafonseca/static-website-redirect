# static-website-redirect
This is a bit of code I find myself reusing for all static websites I host on AWS

Typically I tend to host the HTML files in S3 with CloudFront acting as a caching layer between S3 and the end-user.
I also don't make my S3 buckets publicly accessible for security reasons.

What this code does is it removes the .html extension from URLs and redirects users who tried loading the .html path to the non-.html path

Once you have your S3 bucket and CloudFront setup all you need to do is create a Lambda@Edge function (This can only be done from the N.Virginia region) and copy the index.js file contained in this repository into your new function.

Then deploy the function to your CloudFront setup as an "Origin Request" event on your relevant behavior.
