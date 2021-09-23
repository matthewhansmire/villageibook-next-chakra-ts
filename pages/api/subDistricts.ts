import { fetchToken } from "helpers/fetch-token";
import { fetchWrapper } from "helpers/fetch-wrapper";
import { getParametrizedRoute } from "next/dist/shared/lib/router/utils/route-regex";

const baseUrl = "https://villageibook-api.abosit.com";

async function handler(req, res) {
  const { access_token } = await fetchToken();
  const { district } = req.query;

  switch (req.method) {
    case "GET":
      return getSubDistricts();
    case "POST":
      return createSubDistrict();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getSubDistricts() {
    try {
      let subDistrict = fetchWrapper.get(baseUrl + "/sub-districts.json", access_token);
      if(subDistrict){
        subDistrict = fetchWrapper.get(baseUrl + `/district/[href=${district}]/sub-districts.json`, access_token);
      }

      await subDistrict.then(response=>{
        res.status(200).json(response);
      })
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async function createSubDistrict() {
    try {
      fetchWrapper.post(baseUrl + "/sub-districts", req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default handler;