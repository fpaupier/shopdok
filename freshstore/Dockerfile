FROM node:alpine
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install --silent
COPY public/ public/
COPY src/ src/
# RUN yarn install --save next react react-dom
EXPOSE 3000
CMD ["yarn", "start"]
