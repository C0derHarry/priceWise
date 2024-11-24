import axios from "axios";
import * as cheerio from 'cheerio'

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  //   curl -i --proxy brd.superproxy.io:33335 --proxy-user brd-customer-hl_51eb31fe-zone-pricewise:jez52iqper0d -k "https://geo.brdtest.com/welcome.txt?product=unlocker&method=native"
  //Bright Data proxy config
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 33335;
  const session_id = (1000000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  try{
    //Fetch the product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    const title = $('#productTitle').text().trim();
    console.log({title});
  }catch(error: any){
    throw new Error(`Failed to scrape product: ${error.message}`)
  }
}
