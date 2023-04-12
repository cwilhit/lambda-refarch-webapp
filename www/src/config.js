// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5ta17jlg0kvmd4bvepp2q5v6km",     // CognitoClientID
  "api_base_url": "https://00okbsr637.execute-api.us-west-1.amazonaws.com/production",                                     // TodoFunctionApi
  "cognito_hosted_domain": "stack-up-domain",                   // CognitoDomainName
  "redirect_url": "https://main.d10yikfjh2wb5r.amplifyapp.com"                                      // AmplifyURL
};

export default config;
