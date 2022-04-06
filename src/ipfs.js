import { create } from "ipfs-http-client";
const client = create("http://localhost:5001");

export const callIPFS = async (data) =>
{
    // Returns promise, from which we retrieve the CID hash
	const { cid } = await client.add(data);
    return cid._baseCache.get('z');
};