import axios from 'axios';
import * as cheerio from 'cheerio'


export async function scrapAmazonProduct(url:string){
    if(!url) return;

    const username =String(process.env.BRIGHT_DATA_USERNAME);
    const password =String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const session_id=(1000000*Math.random())|0;
    const options={
        auth:{
            username:`${username}-session-${session_id}`,
            password,
        },
        host: "brd.superproxy.io",
        port,
        rejectUnauthorized:false,
    }


    try{
        const response = await axios.get(url,options);
        const $ = cheerio.load(response.data);

        const title=$("#productTitle").text().trim();
        const currentPrice = extratPrice();

        console.log("Price is:",price)


    }catch(error:any){
        throw new Error(`Failed to scarpe product: ${error.message}`)

    }

}








// curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_9e800bd6-zone-pricewise:8ttq1uqt6dl8 -k "http://lumtest.com/myip.json"