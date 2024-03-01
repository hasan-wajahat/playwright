# Dockerized Playwright Configuration

This repository contains a Dockerized configuration for running Playwright tests on AWS Lambda.

## Prerequisites

- Docker installed on your local machine
- AWS account with Lambda access

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.

## Build Docker Image

To build the Docker image, run the following command:

```bash
docker buildx build --platform linux/amd64 -t playwright .
```

If you are using standard platform, you can use the following command:

```bash
docker build -t playwright .
```

## Pushing to ECR

To install the lambda you need to first upload to ECR.

First login to AWS CLI then authenticate Docker to ECR

```bash
aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com
```

Replace `region` with your AWS region, `aws_account_id` with your AWS account id and `region` with your AWS region. This information can be found in AWS ECR.

Then tag the image

```bash
docker tag playwright aws_account_id.dkr.ecr.us-west-2.amazonaws.com/my-repository
```

Again replace `aws_account_id` with your AWS account id and `region` with your AWS region. This information can be found in AWS ECR.

Then push the image

```bash
docker push aws_account_id.dkr.ecr.us-west-2.amazonaws.com/my-repository
```