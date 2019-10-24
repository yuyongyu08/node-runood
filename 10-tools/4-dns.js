let dns = require('dns');

let hostname = 'yuyongyu08.github.io';

dns.lookup(hostname, {
    family: 6
}, (err, address, family) => {
    console.log('address:', address)
    console.log('family:', family)
})

dns.resolve(hostname, (err, records) => {
    console.log('records: ', records);
});

dns.resolve4(hostname, (err, addresses) => {
    console.log('addresses4: ', addresses);
    let ip = addresses[0]

    console.log('ip:', ip);
    dns.reverse(ip, (err, hostnames) => {
        if (err) console.log(err.stack)
        console.log('hostnames: ', hostnames)
    })
});

dns.resolve6(hostname, (err, addresses) => {
    console.log('addresses6: ', addresses);
});

