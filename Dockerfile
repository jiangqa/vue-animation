FROM registry.cn-hangzhou.aliyuncs.com/xf003/nginx:v1.0-alias
EXPOSE 80
COPY conf.d /etc/nginx/conf/conf.d
COPY ./dist /usr/share/nginx/html
