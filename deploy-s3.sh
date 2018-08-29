#!/usr/bin/env bash
set -e

S3Uri="s3://sad-prd-management-frontend"
Url="https://devicemanagement.pfm-intelligence.com"

if [ "$1" = "stg" ] || [ "$1" = "prd" ]
then
    environment="$1"
    profile="$1"
    if [ "$1" = "stg" ]
    then
        Url="https://devicemanagement.${environment}.pfm-intelligence.com"
    fi
else
    echo "Please specify prd|stg environment as the first argument"
    exit 0
fi

echo "AWS credentials profile: ${profile}"

if [ "$2" != "" ]
then
    srcPath="$2"
else
    echo "Please specify the source directory in the second argument (without trailing slash)"
    exit 0
fi

echo "Source directory: ${srcPath}"

if [ "$3" != "" ]
then
    S3Uri="s3://$3"
else
    echo "Please specify the name of the S3 bucket in the third argument"
    exit 0
fi

echo "ASW S3 bucket: ${S3Uri}"

aws s3 sync "$srcPath" "$S3Uri" --region eu-west-1 --acl public-read --profile "$profile"
aws s3 cp "$srcPath"/index.html "$S3Uri"/index.html --region eu-west-1  --acl public-read --metadata Cache-Control=max-age=0 --cache-control no-cache --profile "$profile"

aws s3 cp "$srcPath"/assets/i18n/en.json "$S3Uri"/assets/i18n/en.json --region eu-west-1  --acl public-read --metadata Cache-Control=max-age=0 --cache-control no-cache --profile "$profile"
aws s3 cp "$srcPath"/assets/i18n/nl.json "$S3Uri"/assets/i18n/nl.json --region eu-west-1  --acl public-read --metadata Cache-Control=max-age=0 --cache-control no-cache --profile "$profile"
aws s3 cp "$srcPath"/assets/i18n/de.json "$S3Uri"/assets/i18n/de.json --region eu-west-1  --acl public-read --metadata Cache-Control=max-age=0 --cache-control no-cache --profile "$profile"

echo "Deployment available on ${Url}"
