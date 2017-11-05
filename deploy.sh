#!/bin/sh

npm run build

gcloud app deploy app.yaml --verbosity=info --project=lambda-182214 -q
