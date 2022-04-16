import { create } from "ipfs-http-client";
/* Use this host for running the IPFS on your own local node  */
const client = create("http://localhost:5001");

export const callIPFS = async (data) =>
{
    // Returns promise, from which we retrieve the CID hash
	const { cid } = await client.add(data);
    return cid._baseCache.get('z');
};