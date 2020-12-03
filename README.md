# LoKal-AnD-Global-Debugging-and-Monitoring

## What

Local server exposed via ngrok to log request from an external source or host file for an external source

## Why

First case

- Needed to help someone debug some issue which only happened on the iOS release version of an app and wi didn't know how to get the JS logs.

Second case

- To test the setup of universal link of an app I needed to expose the config file to Apple before releasing it in production (cf : https://blog.bam.tech/developer-news/test-your-universal-links-locally-ios)

## How

```
git clone https://github.com/Weegle99/local-debugger.git

cd local-debugger

yarn

yarn start
```

You'll see your ngrok url logged. 
For example

```
Local server exposed on https://YOUR_GENERATED_ID.ngrok.io
```

To test, you can make a POST

```
curl -d '{"key":"value"}' -H "Content-Type: application/json" -X POST https://YOUR_GENERATED_ID.ngrok.io
```

And you should see that in your console

```
{ key: 'value' }
```

You can now make a POST call from wherever you want to help you debug or host a file for an external source.

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/Guitoof"><img src="https://avatars2.githubusercontent.com/u/4828287?s=460&u=4600116b0596f1fa1a068646b90ea7f8a86d1bf8&v=4" width="100px;" alt=""/><br /><sub><b>Guitoof</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/AntoineDoubovetzky"><img src="https://avatars3.githubusercontent.com/u/17070498?s=460&u=7c69a65a0a88696ee02d541c133ff76bc1dab5d3&v=4" width="100px;" alt=""/><br /><sub><b>AntoineDoubovetzky</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Weegle99"><img src="https://avatars1.githubusercontent.com/u/20414450?s=460&u=bd8e3cc67a2f6c391c5f1e186f40df1e980c29e6&v=4" width="100px;" alt=""/><br /><sub><b>Weegle99</b></sub></a><br /></td>
  </tr>
</table>
