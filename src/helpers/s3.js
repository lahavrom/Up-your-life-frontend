const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: "eu-west-3",
});
const S3 = new AWS.S3({ params: { Bucket: "up-your-life" } });

export const getImage = (userId) => {
  try {
    return S3.getSignedUrl("getObject", { Key: `images/${userId}` });
  } catch (err) {
    console.log(err);
  }
};
