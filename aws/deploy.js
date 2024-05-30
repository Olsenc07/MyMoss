import AWS from 'aws-sdk';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const s3 = new AWS.S3();
s3.upload({
  Bucket: process.env.AWS_BUCKET,
  Key: 'index.html',
  Body: fs.readFileSync('build/index.html'),
}, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File uploaded successfully.');
  }
});


// Example: List S3 Buckets
s3.listBuckets((err, data) => {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
