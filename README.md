
## DevelopmentJ


Running Next.js
```bash
npm run dev
```

Starting the PlanetScale Database server
Also run in separate window
```bash
pscale connect gpt-generated-snippets main --port 3309
```

### How to make changes to the Database schema?

1. Change to a new branch

```bash
pscale branch create gpt-generated-snippets <branch name>
```

2. Make local changes to ./prisma/schema.prisma

3. Push changes

```bash
npx prisma db push

```

4. Request deploy (merge changes)

```bash
pscale deploy-request create gpt-generated-snippets initial-setup
```

5. Delete dev branch once merged

```bash
pscale branch delete gpt-generated-snippets initial-setup
```

_Note you must open the Dashboard via the URL provided to queue changes_
