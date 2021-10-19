import { fetchWrapper } from "helpers/fetch-wrapper";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function handler(req, res) {
  const { access_token } = req.query;
  const { comesFrom } = req.query;

  switch (req.method) {
    case "GET":
      return getVillageGraduates();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getVillageGraduates() {
    try {
      let villageGraduate = fetchWrapper.get(baseUrl + `/villages/[name=${comesFrom}]/graduates.json`, access_token);
      
      await villageGraduate.then(response=>{
        res.status(200).json(response);
      })
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default handler;
