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

## Copyright

Copyright (c) - All Rights Reserved
