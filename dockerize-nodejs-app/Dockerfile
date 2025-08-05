FROM node:20

WORKDIR /nodejs-app

COPY . .

# for dependency install
RUN npm install

# apps port 
EXPOSE 3000

# for app run
CMD [ "node", "app.js" ]


# build nodejs app 
# docker build . --tag nodejs-app:v1

# run nodejs app
# docker run -p 3000:3000 nodejs-app:v1