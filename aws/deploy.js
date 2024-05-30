import AWS from 'aws-sdk';
import fs from 'fs';
const { execSync } = require('child_process');
import dotenv from 'dotenv';
dotenv.config();

 // SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// S3 bucket name
const BUCKET_NAME = process.env.AWS_BUCKET;

// Directory containing the build files
const buildDir = path.join(__dirname, 'build');
// Function to upload a file to S3
const uploadFile = (filePath, bucketPath) => {
  const fileContent = fs.readFileSync(filePath);
  const params = {
    Bucket: BUCKET_NAME,
    Key: bucketPath,
    Body: fileContent,
    ContentType: getContentType(filePath),
  };

  return s3.upload(params).promise();
};

// Function to determine the content type based on file extension
const getContentType = (filePath) => {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.js':
      return 'application/javascript';
    case '.css':
      return 'text/css';
    case '.png':
      return 'image/png';
    case '.jpg':
      return 'image/jpeg';
    case '.svg':
      return 'image/svg+xml';
    default:
      return 'application/octet-stream';
  }
};

// Function to recursively upload the build directory to S3
const uploadDirectory = async (directory, bucketPath) => {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isFile()) {
      const s3Path = path.join(bucketPath, file);
      console.log(`Uploading ${s3Path}...`);
      await uploadFile(fullPath, s3Path);
    } else if (stat.isDirectory()) {
      await uploadDirectory(fullPath, path.join(bucketPath, file));
    }
  }
};

// Build the Docker image, run the container, and upload to S3
const deploy = async () => {
  try {
    console.log('Building the Docker image...');
    execSync('docker build -t mymoss-app .', { stdio: 'inherit' });

    console.log('Running the Docker container...');
    execSync('docker run --rm -v ${PWD}/build:/app/build mymoss-app', { stdio: 'inherit' });

    console.log('Uploading build directory to S3...');
    await uploadDirectory(buildDir, '');

    console.log('Deployment complete!');
  } catch (error) {
    console.error('Deployment failed:', error);
  }
};

// Run the deployment
deploy();