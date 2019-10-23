Object.keys(global).forEach((key, index) => {
    console.log(`${index}.${key}:`)
});

console.dir(global)


// 0.console:
// 1.DTRACE_NET_SERVER_CONNECTION:
// 2.DTRACE_NET_STREAM_END:
// 3.DTRACE_HTTP_SERVER_REQUEST:
// 4.DTRACE_HTTP_SERVER_RESPONSE:
// 5.DTRACE_HTTP_CLIENT_REQUEST:
// 6.DTRACE_HTTP_CLIENT_RESPONSE:
// 7.global:
// 8.process:
// 9.Buffer:
// 10.clearImmediate:
// 11.clearInterval:
// 12.clearTimeout:
// 13.setImmediate:
// 14.setInterval:
// 15.setTimeout: