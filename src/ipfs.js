// // const IPFS = require("ipfs-http-client");
// // const ipfs = new IPFS({
// // 	host: "ipfs.infura.io",
// // 	port: 5001,
// // 	protocol: "https",
// // });

import { create } from "ipfs-http-client";
const client = create("http://localhost:5001");
console.log(client);
export const callIPFS = async (data) => {
	const { cid } = await client.add(data);
	console.log(data);
    console.log(cid);
    console.log(cid._baseCache.get('z'))
};

// export const uploadIpfs = (data) =>
// {
//     ipfs.add(data, (err, hash) => {
// 			if (err) {
// 				return console.log(err);
// 			}
// 			return console.log("https://ipfs.infura.io/ipfs" + hash);
// 		});
//     // const { cid } = await client.add("Hello, world")
//     // return cid;
// }

// // export default ipfs;

// const IPFS = require("ipfs");

// async function main() {
// 	const node = await IPFS.create();
// 	const version = await node.version();

// 	console.log("Version:", version.version);

// 	const fileAdded = await node.add({
// 		path: "hello.txt",
// 		content: "Hello World 101",
// 	});

// 	console.log("Added file:", fileAdded.path, fileAdded.cid);
// 	// ...
// }

// main();

// import { create, urlSource } from "ipfs-http-client";
// const ipfs = create();
// // const { cid } = await client.add("Hello world!");
// async function main() {
// 	const file = await ipfs.add(
// 		urlSource(
// 			"https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4555/s300/blacksquare-logo.jpg"
// 		)
// 	);
// 	console.log(file);
// }
// main()

// import { create } from "ipfs-http-client";
// const ipfs = create("http://localhost:5001");
// const test = ipfs.add("Hello World")
// console.log(test)

// Export so other components dont complain
export const uploadIpfs = () => {
	console.log("upload ipfs");
};
