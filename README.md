# 2025cloud

This project demonstrates two minimal Node.js applications packaged as Docker container images: `app1` and `app2`. Each application responds with a simple HTTP message when accessed via port 3000.

## 📁 Project Structure

2025cloud/
├── app1/
│ ├── app.js
│ └── Dockerfile
├── app2/
│ ├── app.js
│ └── Dockerfile
└── README.md


##  Dockerfile

Each app folder (`app1/`, `app2/`) contains a `Dockerfile` that defines how the Node.js app is packaged.

### Example `Dockerfile`
```dockerfile
FROM node:20
WORKDIR /app
COPY . .
CMD ["node", "app.js"]
How to Build the Images

Make sure Docker is installed and running on your system.

# Build app1
cd app1
docker build -t justin701/2025cloud:app1 .

# Build app2
cd ../app2
docker build -t justin701/2025cloud:app2 .
Replace justin701 with your own Docker Hub username if different.
▶ How to Run the Images

After building or pulling the images, you can run them locally as containers.

# Run app1
docker run -p 3000:3000 justin701/2025cloud:app1
# Output: "Hello from App1"

# Run app2
docker run -p 3000:3000 justin701/2025cloud:app2
# Output: "Hello from App2"
Then visit: http://localhost:3000

Docker Hub Repository

Publicly accessible repo with both container images:
Link: https://hub.docker.com/repository/docker/justin701/2025cloud/general

Tags available:

app1
app2
Author & License

Maintained by Justin Shih.
Licensed under the MIT License.


---
