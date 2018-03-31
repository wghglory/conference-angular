# Introduce Bootstrap

1.  At this point, bootstrap 4.0.0, jquery 3.3.1, popper.js 1.12.9 will be installed.

```bash
yarn add bootstrap jquery popper.js
```

1.  Edit `.angular-cli.json`:

```json
{
  "styles": [
    "styles.scss",
    "../node_modules/bootstrap/scss/bootstrap.scss"
    // Or "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js", // order matters
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
}
```

Pay attention to the order, otherwise you may see this error: `Uncaught TypeError: Cannot read property 'fn' of undefined`.
