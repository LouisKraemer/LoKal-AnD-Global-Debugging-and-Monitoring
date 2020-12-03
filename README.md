# Lokal-and-Global-Debugging-and-Monitoring

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
