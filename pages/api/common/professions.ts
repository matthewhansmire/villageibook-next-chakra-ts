import { fetchClientToken } from "helpers/fetch-client-token";
import { fetchWrapper } from "helpers/fetch-wrapper";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function handler(req, res) {
  const { access_token } = await fetchClientToken();
  
  switch (req.method) {
    case "GET":
      return getProfessions();
    // case "POST":
    //   return createProfession();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getProfessions() {
    try {
      let profession = fetchWrapper.get(baseUrl + "/professions.json?page=1&size=1200", access_token);
      
      await profession.then(response=>{
        res.status(200).json(response);
      })
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async function createProfession() {
    try {
      fetchWrapper.post(baseUrl + "/professions", req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default handler;
