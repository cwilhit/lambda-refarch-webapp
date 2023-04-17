// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "bsnbi6ov34gbigucdd2jr425r",     // CognitoClientID
  "api_base_url": "https://13kca220ji.execute-api.us-west-1.amazonaws.com/production",                                     // TodoFunctionApi
  "cognito_hosted_domain": "stack-up-domain.auth.us-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d11xikthpamz0t.amplifyapp.com"                                      // AmplifyURL
};

export default config;
