// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "54apapaoq4giplmmo7m6ejrvfq",     // CognitoClientID
  "api_base_url": "https://0gekptbza7.execute-api.us-west-1.amazonaws.com/production",                                     // TodoFunctionApi
  "cognito_hosted_domain": "stack-up-domain.auth.us-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d10xcyq9m7pr7q.amplifyapp.com"                                      // AmplifyURL
};

export default config;
