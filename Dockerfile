FROM registry-git.fpt.net/hifpt/hi-webkit-fe/hi-webkit-fe-base-image:hi-webkit-payment-latest as build

WORKDIR /app

COPY . .

RUN npm run build

##################################################################################################

FROM registry-git.fpt.net/hifpt/hi-webkit-fe/hi-webkit-fe-base-image:hi-webkit-fe-nginx-latest

COPY --from=build /app/dist /usr/share/nginx/html/web/payment
COPY --from=build /app/docker-config/default.conf /etc/nginx/conf.d/default.conf
