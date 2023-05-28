# Production on VPS

Locally run :

```sh
docker build --no-cache -t devboard .
docker save -o devboard.tar devboard
scp devboard.tar ubuntu@51.254.100.84:/home/ubuntu/projects/devboard
```

On the VPS run :

```sh
docker load -i devboard.tar
docker run -d -p 4242:80 devboard
```
