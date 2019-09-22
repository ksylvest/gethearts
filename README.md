# Hearts

## Configuration

```sh
bundle
```

## Deployment

```bash
heroku create hearts
heroku domains:add gethearts.com
git push heroku master
heroku run rake db:setup
```

## Status

[![Maintainability](https://api.codeclimate.com/v1/badges/5af3ee584ba04fb11626/maintainability)](https://codeclimate.com/github/ksylvest/gethearts/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5af3ee584ba04fb11626/test_coverage)](https://codeclimate.com/github/ksylvest/gethearts/test_coverage)

## Copyright

Copyright (c) - All Rights Reserved
