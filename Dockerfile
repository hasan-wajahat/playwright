# Use the Playwright base image
FROM mcr.microsoft.com/playwright:latest-amd64

# Copy the application code to the container
COPY . .

# Install the application dependencies
RUN npm install

# Set the command to run your application
CMD ["npm", "test"]