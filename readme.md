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