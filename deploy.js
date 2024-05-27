import AWS from 'aws-sdk';
import { IAM } from 'aws-sdk';
import fs from 'fs';

AWS.config.update({
  region: 'us-east-1',
});

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const bucketName = 'mymoss-bucket';

s3.upload({
  Bucket: bucketName,
  Key: 'index.html',
  Body: fs.readFileSync('build/index.html'),
}, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File uploaded successfully.');
  }
});
