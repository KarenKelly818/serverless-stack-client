export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HFNZIG1ZlDa59pKukECez4bza0S4Ftx0lJG048VhQsB4dFrnDlORGD1SKvVvSmzGzouWcQl55C9f3CqmTg7a5La00rX2cGbWz",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-karen-kelly"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://dx2pzeezyk.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_3JCNs4npO",
    APP_CLIENT_ID: "3hr35bi906qaub5moh4d5i3hvc",
    IDENTITY_POOL_ID: "us-east-2:e0640dac-a56b-4c56-8ed4-ac2d977f9d0d"
  }
};