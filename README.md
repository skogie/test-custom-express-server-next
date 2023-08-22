## Starting the server

First, run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You should see the page render 
```
Data: My bad data

My page
```

## Switch to version 13.4.12

downgrade to working next version (13.4.12) you should now see

You should see the page render 
```
Data: My nice data

My page
```

which means that we could read what was in res.locals inside `_app.tsx`

