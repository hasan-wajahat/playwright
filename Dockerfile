# Use the Playwright base image
FROM mcr.microsoft.com/playwright:latest-amd64

RUN apt-get update && apt-get install -y \
    g++ \
    make \
    cmake \
    unzip \
    libcurl4-openssl-dev \
    autoconf \
    libtool

# Copy the application code to the container
COPY . .

# Install the application dependencies
RUN npm install

RUN npm install aws-lambda-ric

ENTRYPOINT ["/bin/npx", "aws-lambda-ric"]

# Set the command to run your application
CMD ["index.handler"]