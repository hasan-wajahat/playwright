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


ENV NPM_CONFIG_CACHE=/tmp/.npm

COPY package*.json ./

# Install the application dependencies
RUN npm install

RUN npm install aws-lambda-ric

# Copy the application code to the container
COPY . .

ENTRYPOINT ["/bin/npx", "aws-lambda-ric"]

# Set the command to run your application
CMD ["index.handler"]


# Local testing
# COPY ./entry_script.sh /entry_script.sh
# RUN chmod +x /entry_script.sh
# ADD aws-lambda-rie /usr/bin/aws-lambda-rie
# ENTRYPOINT [ "/entry_script.sh","index.handler" ]