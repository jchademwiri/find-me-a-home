import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db('sample_airbnb');

	const data = await db
		.collection('listingsAndReviews')
		.find({})
		.limit(30)
		.toArray();

	console.log(data);
	res.json(data);
}
