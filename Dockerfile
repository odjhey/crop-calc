FROM denoland/deno:1.11.5
RUN deno install --root /usr/local --unstable -A -f -n aleph https://deno.land/x/aleph@v0.3.0-alpha.33/cli.ts

WORKDIR /app

# USER deno

COPY ./webapp .
RUN aleph build

# The port that your application listens to.
EXPOSE 8080

CMD ["aleph", "start", "-p 8080"]


