# create s3 bucket
aws s3 mb s3://vik-code-sam

# package cloudformation [aws cloudformation help]
aws cloudformation package --s3-bucket vik-code-sam --template-file template.yaml --output-template-file gen/template-generated.yaml
# sam package ...


# deploy
aws cloudformation deploy --template-file gen/template-generated.yaml --stack-name hello-world-sam --capabilities CAPABILITY_IAM
# sam deploy ...

# local invoke
sam local invoke -e event.json --debug-port 5858 helloworld