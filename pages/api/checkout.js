// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  if (req.method == "POST") {
    console.log(req.body.uid);
    res.status(200).send(`Post Request Product UID: ${req.body.uid}`);
  } else {
    res.status(200).send(`not a post request`);
  }
}