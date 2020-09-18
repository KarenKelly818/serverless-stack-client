const dev = {
  STRIPE_KEY: "pk_test_51HFNZIG1ZlDa59pKukECez4bza0S4Ftx0lJG048VhQsB4dFrnDlORGD1SKvVvSmzGzouWcQl55C9f3CqmTg7a5La00rX2cGbWz",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1tmc21s7w06mf"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://eadqyyvft3.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_2EKfA58DZ",
    APP_CLIENT_ID: "5p00k6h1kk2tnk2ucleleepq5h",
    IDENTITY_POOL_ID: "us-east-2:2a5bedb3-4e4f-4796-be0d-b42df5acbd4d"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HFNZIG1ZlDa59pKukECez4bza0S4Ftx0lJG048VhQsB4dFrnDlORGD1SKvVvSmzGzouWcQl55C9f3CqmTg7a5La00rX2cGbWz",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-10sqzpjzxd114"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://a0vc1p93f2.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_nVO0OAGks",
    APP_CLIENT_ID: "6l8fo0n3949798dvpi3tdqois1",
    IDENTITY_POOL_ID: "us-east-2:0f62a74d-e1c9-460d-b8f1-5b77ae1fb74f"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};