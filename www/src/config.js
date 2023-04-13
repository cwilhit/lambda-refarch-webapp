// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5f3la93o87nf9ns9nnhmgp4oh4",     // CognitoClientID
  "api_base_url": "https://r6yr1eccw5.execute-api.us-west-1.amazonaws.com/production",                                     // TodoFunctionApi
  "cognito_hosted_domain": "stack-up-domain.auth.us-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d13rl73xsbadjn.amplifyapp.com/"                                      // AmplifyURL
};

export default config;
